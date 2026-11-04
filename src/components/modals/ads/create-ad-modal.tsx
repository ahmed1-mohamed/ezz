"use client";

import { useEffect, useRef, useState } from "react";
import { FormProvider, useWatch } from "react-hook-form";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useAdActions } from "@/hooks/use-ad-actions";
import { useCreateAdData } from "@/hooks/use-create-ad";
import { Megaphone } from "lucide-react";
import { CreateAdStepOne } from "./create-ad-components/CreateAdStepOne";
import { CreateAdStepTwo } from "./create-ad-components/CreateAdStepTwo";
import { useAdDateValidation } from "@/features/ads/hooks/use-ad-date-validation";
import { useCreateAdForm } from "@/features/ads/hooks/use-create-ad-form";
import { FormErrorAlert } from "@/components/ui/form-message";
import { useDebounce } from "@/hooks/useDebounce";

import { useLanguage } from "@/contexts/LanguageContext";

interface CreateAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function CreateAdModal({
  isOpen,
  onClose,
  onSuccess,
}: CreateAdModalProps) {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const { createAd, isCreating } = useAdActions();
  const { data: session } = useSession();

  const [developerSearch, setDeveloperSearch] = useState("");
  const [developerPerPage, setDeveloperPerPage] = useState(15);
  const debouncedDeveloperSearch = useDebounce(developerSearch);

  const [projectSearch, setProjectSearch] = useState("");
  const [propertySearch, setPropertySearch] = useState("");
  const debouncedProjectSearch = useDebounce(projectSearch);
  const debouncedPropertySearch = useDebounce(propertySearch);

  const developerScrollRef = useRef<HTMLDivElement | null>(null);

  const [tempStart, setTempStart] = useState("");
  const [tempEnd, setTempEnd] = useState("");
  const { dateErrors, validateDateTimeRange } = useAdDateValidation(tempStart, tempEnd, isOpen);

  const {
    methods,
    step,
    adImagePreview,
    getCountryId,
    handleDeveloperChange,
    handleNext,
    handleBack,
    handleImageUpload,
    onSubmit,
  } = useCreateAdForm({
    isOpen,
    onClose,
    onSuccess,
    createAd,
    isCreating,
    session,
    validateDateTimeRange,
  });

  const { watch, control } = methods;

  const watchStartDate = useWatch({ control, name: "startDate" });
  const watchEndDate = useWatch({ control, name: "endDate" });
  const watchDeveloperId = useWatch({ control, name: "developerId" });
  const watchCountry = useWatch({ control, name: "country" });

  useEffect(() => {
    setTempStart(watchStartDate || "");
    setTempEnd(watchEndDate || "");
  }, [watchStartDate, watchEndDate]);

  const {
    developers,
    projects,
    properties,
    loading: developersLoading,
    projectsLoading,
    propertiesLoading,
    developerHasMore,
    loadDevelopers,
  } = useCreateAdData(
    isOpen,
    debouncedDeveloperSearch,
    getCountryId(watchCountry || ""),
    debouncedProjectSearch,
    debouncedPropertySearch,
    watchDeveloperId,
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && developerHasMore && !developersLoading) {
          const newPerPage = developerPerPage + 15;
          setDeveloperPerPage(newPerPage);
          loadDevelopers(1, newPerPage, "", true);
        }
      },
      { threshold: 0.1 },
    );

    if (developerScrollRef.current) {
      observer.observe(developerScrollRef.current);
    }
    return () => observer.disconnect();
  }, [developerHasMore, developersLoading, developerPerPage, loadDevelopers]);

  const linkToValue = watch("linkTo");
  useEffect(() => {
    setProjectSearch("");
    setPropertySearch("");
  }, [linkToValue]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        if (!isCreating) onClose();
      }}
      title={
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200/50 dark:border-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400">
            <Megaphone className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100">
              {t("ads.createModal.title")}
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-normal">
              {step === 1
                ? t("ads.createModal.step1Subtitle")
                : t("ads.createModal.step2Subtitle")}
            </p>
          </div>
        </div>
      }
      size="2xl"
      showCloseButton={true}
      footer={
        <div className="flex items-center justify-between w-full pt-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span
                className={`h-2 w-7 rounded-full transition-all duration-300 ${
                  step === 1 ? "bg-teal-600" : "bg-teal-200 dark:bg-teal-900"
                }`}
              />
              <span
                className={`h-2 w-7 rounded-full transition-all duration-300 ${
                  step === 2 ? "bg-teal-600" : "bg-gray-200 dark:bg-neutral-700"
                }`}
              />
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {isAr ? `الخطوة ${step} من 2` : `Step ${step} of 2`}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {step === 2 ? (
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={isCreating}
                className="gap-1.5 h-9 text-xs sm:text-sm font-medium border-gray-200 dark:border-neutral-700"
              >
                {t("ads.createModal.back")}
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={onClose}
                disabled={isCreating}
                className="h-9 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 border-gray-200 dark:border-neutral-700"
              >
                {t("ads.createModal.cancel")}
              </Button>
            )}

            {step === 1 ? (
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white gap-1.5 h-9 px-5 text-xs sm:text-sm font-semibold shadow-xs shadow-teal-600/20"
                onClick={handleNext}
              >
                {t("ads.createModal.continueToCreative")}
              </Button>
            ) : (
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white gap-2 h-9 px-5 text-xs sm:text-sm font-semibold shadow-xs shadow-teal-600/20"
                onClick={onSubmit}
                disabled={isCreating}
              >
                {isCreating ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent" />
                    <span>{t("ads.createModal.publishingAd")}</span>
                  </>
                ) : (
                  <span>{t("ads.createModal.publishAd")}</span>
                )}
              </Button>
            )}
          </div>
        </div>
      }
    >
      <FormProvider {...methods}>
        <div className="space-y-6 max-h-[68vh] overflow-y-auto pe-1 sm:pe-2">
          <FormErrorAlert message={methods.formState.errors.root?.server?.message} />
          <div className="grid grid-cols-2 gap-3 p-1.5 bg-gray-100/70 dark:bg-neutral-800/60 rounded-xl border border-gray-200/60 dark:border-neutral-700/60 mb-5">
            <button
              type="button"
              onClick={() => {
                if (step === 2) handleBack();
              }}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                step === 1
                  ? "bg-white dark:bg-neutral-900 text-teal-700 dark:text-teal-400 shadow-xs border border-gray-200/50 dark:border-neutral-700/50"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <span className="flex items-center justify-center h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 text-[11px] font-bold">
                1
              </span>
              <span>{t("ads.createModal.tabPlacement")}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (step === 1) handleNext();
              }}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                step === 2
                  ? "bg-white dark:bg-neutral-900 text-teal-700 dark:text-teal-400 shadow-xs border border-gray-200/50 dark:border-neutral-700/50"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <span className="flex items-center justify-center h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 text-[11px] font-bold">
                2
              </span>
              <span>{t("ads.createModal.tabCreative")}</span>
            </button>
          </div>

          {step === 1 ? (
            <CreateAdStepOne
              dateErrors={dateErrors}
              validateDateTimeRange={validateDateTimeRange}
            />
          ) : (
            <CreateAdStepTwo
              developerSearch={developerSearch}
              setDeveloperSearch={setDeveloperSearch}
              developersLoading={developersLoading}
              developers={developers}
              developerHasMore={developerHasMore}
              developerScrollRef={developerScrollRef}
              handleDeveloperChange={handleDeveloperChange}
              projectSearch={projectSearch}
              setProjectSearch={setProjectSearch}
              projectsLoading={projectsLoading}
              projects={projects}
              propertySearch={propertySearch}
              setPropertySearch={setPropertySearch}
              propertiesLoading={propertiesLoading}
              properties={properties}
              adImagePreview={adImagePreview}
              handleImageUpload={handleImageUpload}
            />
          )}
        </div>
      </FormProvider>
    </Modal>
  );
}