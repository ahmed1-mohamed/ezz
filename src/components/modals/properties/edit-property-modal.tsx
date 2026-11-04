"use client";

import { Controller } from "react-hook-form";
import { FieldError } from "@/components/ui/form-message";
import { useSession } from "next-auth/react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEditPropertyForm } from "@/features/properties/hooks/use-edit-property-form";

interface EditPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyId: number;
}

export function EditPropertyModal({
  isOpen,
  onClose,
  propertyId,
}: EditPropertyModalProps) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const { t } = useLanguage();

  const availabilityOptions = [
    { label: t("properties.options.available") || "Available", value: "available" },
    { label: t("properties.options.reserved") || "Reserved", value: "reserved" },
    { label: t("properties.options.sold") || "Sold", value: "sold" },
  ];

  const constructionStatusOptions = [
    { label: t("buildings.statusOptions.ready") || "Ready", value: "ready" },
    { label: t("buildings.statusOptions.underConstruction") || "Under Construction", value: "under-construction" },
    { label: t("buildings.statusOptions.offPlan") || "Off Plan", value: "off-plan" },
  ];

  const furnishOptions = [
    { label: t("properties.options.furnished") || "Furnished", value: "furnished" },
    { label: t("properties.options.unfurnished") || "UnFurnished", value: "unfurnished" },
    { label: t("properties.options.semiFurnished") || "SemiFurnished", value: "semi-furnished" },
  ];

  const finishingOptions = [
    { label: t("properties.options.finished") || "Finished", value: "finished" },
    { label: t("properties.options.semiFinished") || "SemiFinished", value: "semi-finished" },
    { label: t("properties.options.unfinished") || "UnFinished", value: "unfinished" },
  ];

  const viewOptions = [
    { label: t("properties.options.seaView") || "Sea View", value: "sea" },
    { label: t("properties.options.cityView") || "City View", value: "city" },
    { label: t("properties.options.gardenView") || "Garden View", value: "garden" },
  ];

  const ownershipOptions = [
    { label: t("properties.options.freehold") || "Freehold", value: "freehold" },
    { label: t("properties.options.leasehold") || "Leasehold", value: "leasehold" },
  ];

  const {
    methods,
    propertyLoading,
    isSubmitting,
    propertyTypes,
    propertySubtypes,
    projects,
    handleClose,
    onSubmit,
  } = useEditPropertyForm({
    propertyId,
    isOpen,
    onClose,
    token,
    t,
  });

  const {
    register,
    control,
    formState: { errors },
  } = methods;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("properties.editProperty") || "Edit Property"}
      size="xl"
      showCloseButton={false}
      footer={
        <div className="flex gap-3 justify-end w-full">
          <Button variant="outline" onClick={handleClose} disabled={isSubmitting}>
            {t("common.cancel") || "Cancel"}
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white"
            onClick={onSubmit}
            disabled={isSubmitting || propertyLoading}
          >
            {isSubmitting
              ? (t("common.updating") || "Updating...")
              : (t("properties.updateProperty") || "Update Property")}
          </Button>
        </div>
      }
    >
      {propertyLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-r-transparent" />
        </div>
      ) : (
        <div className="max-h-[calc(100vh-280px)] overflow-y-auto pr-2">
          <form onSubmit={onSubmit} className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">
              {t("properties.form.basicInfo.title") || "Basic Information"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="ep-name">
                  {t("properties.form.basicInfo.propertyName") || "Property Name"} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="ep-name"
                  {...register("property_name")}
                  placeholder={t("properties.form.basicInfo.propertyName") || "Property Name"}
                  error={!!errors.property_name}
                  className={`mt-1 ${errors.property_name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                <FieldError message={errors.property_name?.message} />
              </div>
              <div>
                <Label htmlFor="ep-unit">{t("properties.form.basicInfo.propertyNo") || "Property No."}</Label>
                <Input id="ep-unit" {...register("property_no")} placeholder={t("properties.form.basicInfo.propertyNoPlaceholder") || "e.g. B4307"} className="mt-1" error={!!errors.property_no} />
                <FieldError message={errors.property_no?.message} />
              </div>
              <div>
                <Label htmlFor="ep-project">
                  {t("properties.form.basicInfo.project") || "Project"} <span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="project_id"
                  control={control}
                  render={({ field }) => (
                    <Select key={`proj-${field.value}`} value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger error={!!errors.project_id} className={`mt-1 ${errors.project_id ? "border-red-500 focus:ring-red-500" : ""}`}>
                        <SelectValue placeholder={t("properties.form.basicInfo.selectProject") || "Select Project"} />
                      </SelectTrigger>
                      <SelectContent>
                        {projects.map((p: any) => (
                          <SelectItem key={p.project_id} value={String(p.project_id)}>
                            {p.project_name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                <FieldError message={errors.project_id?.message} />
              </div>
              <div>
                <Label htmlFor="ep-type">
                  {t("properties.form.basicInfo.propertyType") || "Property Type"} <span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="property_type_id"
                  control={control}
                  render={({ field }) => (
                    <Select key={`type-${field.value}`} value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger error={!!errors.property_type_id} className={`mt-1 ${errors.property_type_id ? "border-red-500 focus:ring-red-500" : ""}`}>
                        <SelectValue placeholder={t("properties.form.basicInfo.selectPropertyType") || "Select Type"} />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((t: any) => (
                          <SelectItem key={t.id} value={String(t.id)}>
                            {t.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                <FieldError message={errors.property_type_id?.message} />
              </div>
              <div>
                <Label htmlFor="ep-subtype">
                  {t("properties.form.basicInfo.unitSubType") || "Property Sub Type"} <span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="property_subtype_id"
                  control={control}
                  render={({ field }) => (
                    <Select key={`subtype-${field.value}`} value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger error={!!errors.property_subtype_id} className={`mt-1 ${errors.property_subtype_id ? "border-red-500 focus:ring-red-500" : ""}`}>
                        <SelectValue placeholder={t("properties.form.basicInfo.selectSubType") || "Select Sub Type"} />
                      </SelectTrigger>
                      <SelectContent>
                        {propertySubtypes.map((s: any) => (
                          <SelectItem key={s.id} value={String(s.id)}>
                            {s.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                <FieldError message={errors.property_subtype_id?.message} />
              </div>
            </div>

            <h3 className="text-sm font-semibold text-gray-900 mt-2">{t("common.statusLabel") || "Status"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label>{t("common.statusLabel") || "Status"} <span className="text-red-500">*</span></Label>
                <Controller name="status" control={control} render={({ field }) => (
                  <Select key={`status-${field.value}`} value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger error={!!errors.status} className={`mt-1 ${errors.status ? "border-red-500 focus:ring-red-500" : ""}`}>
                      <SelectValue placeholder={t("common.selectStatus") || "Select Status"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">{t("common.active") || "Active"}</SelectItem>
                      <SelectItem value="inactive">{t("common.inactive") || "Inactive"}</SelectItem>
                    </SelectContent>
                  </Select>
                )} />
                <FieldError message={errors.status?.message} />
              </div>
              <div>
                <Label>{t("properties.availability") || "Availability"} <span className="text-red-500">*</span></Label>
                <Controller name="availability_status" control={control} render={({ field }) => (
                  <Select key={`avail-${field.value}`} value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger error={!!errors.availability_status} className={`mt-1 ${errors.availability_status ? "border-red-500 focus:ring-red-500" : ""}`}>
                      <SelectValue placeholder={t("properties.availability") || "Availability"} />
                    </SelectTrigger>
                    <SelectContent>
                      {availabilityOptions.map((o) => (
                        <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )} />
                <FieldError message={errors.availability_status?.message} />
              </div>
              <div>
                <Label>{t("buildings.constructionStatus") || "Construction Status"} <span className="text-red-500">*</span></Label>
                <Controller name="construction_status" control={control} render={({ field }) => (
                  <Select key={`const-${field.value}`} value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger error={!!errors.construction_status} className={`mt-1 ${errors.construction_status ? "border-red-500 focus:ring-red-500" : ""}`}>
                      <SelectValue placeholder={t("buildings.constructionStatus") || "Construction Status"} />
                    </SelectTrigger>
                    <SelectContent>
                      {constructionStatusOptions.map((o) => (
                        <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )} />
                <FieldError message={errors.construction_status?.message} />
              </div>
            </div>

            <h3 className="text-sm font-semibold text-gray-900 mt-2">
              {t("properties.sections.sizeAndPricing") || "Size & Pricing"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="ep-price">
                  {t("properties.form.pricing.price") || "Price"} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="ep-price"
                  type="number"
                  {...register("price", { valueAsNumber: true })}
                  placeholder={t("properties.form.pricing.price") || "Price"}
                  error={!!errors.price}
                  className={`mt-1 ${errors.price ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                <FieldError message={errors.price?.message} />
              </div>
              <div>
                <Label htmlFor="ep-size">
                  {t("properties.form.unitDetails.unitSize") || "Size (sqm)"} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="ep-size"
                  type="number"
                  {...register("size", { valueAsNumber: true })}
                  placeholder={t("properties.form.unitDetails.size") || "Size"}
                  error={!!errors.size}
                  className={`mt-1 ${errors.size ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                <FieldError message={errors.size?.message} />
              </div>
              <div>
                <Label htmlFor="ep-floor">{t("properties.floor") || "Floor"}</Label>
                <Input id="ep-floor" {...register("floor")} placeholder={t("properties.floor") || "Floor"} className="mt-1" error={!!errors.floor} />
                <FieldError message={errors.floor?.message} />
              </div>
            </div>

            <h3 className="text-sm font-semibold text-gray-900 mt-2">
              {t("properties.sections.rooms") || "Rooms"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="ep-bedrooms">{t("properties.form.unitDetails.bedrooms") || "Bedrooms"}</Label>
                <Input
                  id="ep-bedrooms"
                  type="number"
                  {...register("bedrooms", { valueAsNumber: true })}
                  placeholder={t("properties.form.unitDetails.bedrooms") || "Bedrooms"}
                  error={!!errors.bedrooms}
                  className={`mt-1 ${errors.bedrooms ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                <FieldError message={errors.bedrooms?.message} />
              </div>
              <div>
                <Label htmlFor="ep-bathrooms">{t("properties.bathrooms") || "Bathrooms"}</Label>
                <Input
                  id="ep-bathrooms"
                  type="number"
                  {...register("bathrooms", { valueAsNumber: true })}
                  placeholder={t("properties.bathrooms") || "Bathrooms"}
                  error={!!errors.bathrooms}
                  className={`mt-1 ${errors.bathrooms ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                <FieldError message={errors.bathrooms?.message} />
              </div>
              <div>
                <Label>{t("properties.view") || "View"}</Label>
                <Controller name="view" control={control} render={({ field }) => (
                  <Select key={`view-${field.value}`} value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="mt-1" error={!!errors.view}>
                      <SelectValue placeholder={t("properties.selectView") || "Select View"} />
                    </SelectTrigger>
                    <SelectContent>
                      {viewOptions.map((o) => (
                        <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )} />
                <FieldError message={errors.view?.message} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label>{t("properties.furnishStatus") || "Furnish Status"}</Label>
                <Controller name="furnish_status" control={control} render={({ field }) => (
                  <Select key={`furnish-${field.value}`} value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="mt-1" error={!!errors.furnish_status}>
                      <SelectValue placeholder={t("properties.furnishStatus") || "Furnish Status"} />
                    </SelectTrigger>
                    <SelectContent>
                      {furnishOptions.map((o) => (
                        <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )} />
                <FieldError message={errors.furnish_status?.message} />
              </div>
              <div>
                <Label>{t("properties.finishingType") || "Finishing Type"} <span className="text-red-500">*</span></Label>
                <Controller name="finishing_status" control={control} render={({ field }) => (
                  <Select key={`finish-${field.value}`} value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger error={!!errors.finishing_status} className={`mt-1 ${errors.finishing_status ? "border-red-500 focus:ring-red-500" : ""}`}>
                      <SelectValue placeholder={t("properties.finishing") || "Finishing"} />
                    </SelectTrigger>
                    <SelectContent>
                      {finishingOptions.map((o) => (
                        <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )} />
                <FieldError message={errors.finishing_status?.message} />
              </div>
              <div>
                <Label>{t("properties.ownershipType") || "Ownership Type"}</Label>
                <Controller name="ownership_type" control={control} render={({ field }) => (
                  <Select key={`owner-${field.value}`} value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="mt-1" error={!!errors.ownership_type}>
                      <SelectValue placeholder={t("properties.ownership") || "Ownership"} />
                    </SelectTrigger>
                    <SelectContent>
                      {ownershipOptions.map((o) => (
                        <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )} />
                <FieldError message={errors.ownership_type?.message} />
              </div>
            </div>

            <div>
              <Label htmlFor="ep-desc">{t("common.shortDescription") || "Description"}</Label>
              <Input
                id="ep-desc"
                {...register("description")}
                placeholder={t("properties.descriptionPlaceholder") || "Property description"}
                className="mt-1"
                error={!!errors.description}
              />
              <FieldError message={errors.description?.message} />
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
}