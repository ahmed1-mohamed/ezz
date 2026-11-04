import { useState, useCallback, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function useAdDateValidation(startDate: string, endDate: string, isOpen: boolean) {
  const { t } = useLanguage();
  const [dateErrors, setDateErrors] = useState<{
    startDate?: string;
    endDate?: string;
    general?: string;
  }>({});

  const isValidDateFormat = (dateStr: string): boolean => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    return datePattern.test(dateStr);
  };

  const convertToUTCDateTime = (
    dateStr: string,
    isEndDate: boolean = false,
  ): string => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    if (isEndDate) {
      date.setUTCHours(23, 59, 59, 999);
    } else {
      date.setUTCHours(0, 0, 0, 0);
    }
    return date.toISOString();
  };

  const validateDateTimeRange = useCallback(
    (start: string, end: string): boolean => {
      if (start && !isValidDateFormat(start)) {
        setDateErrors((prev) => ({
          ...prev,
          startDate: t("ads.form.dateFormatInvalid"),
          general: undefined,
        }));
        return false;
      }

      if (end && !isValidDateFormat(end)) {
        setDateErrors((prev) => ({
          ...prev,
          endDate: t("ads.form.dateFormatInvalid"),
          general: undefined,
        }));
        return false;
      }

      if (!start) {
        setDateErrors((prev) => ({
          ...prev,
          startDate: t("ads.createStepOne.startDateRequired"),
          general: undefined,
        }));
        return false;
      }

      setDateErrors((prev) => ({
        ...prev,
        startDate: undefined,
      }));

      if (!end) {
        setDateErrors((prev) => ({
          ...prev,
          endDate: undefined,
          general: undefined,
        }));
        return true;
      }

      const startDateTime = new Date(convertToUTCDateTime(start, false));
      const endDateTime = new Date(convertToUTCDateTime(end, true));

      if (startDateTime >= endDateTime) {
        setDateErrors((prev) => ({
          ...prev,
          endDate: t("ads.form.endAfterStart"),
          general: t("ads.form.endAfterStartHint"),
        }));
        return false;
      }

      setDateErrors((prev) => ({
        ...prev,
        endDate: undefined,
        general: undefined,
      }));
      return true;
    },
    [t],
  );

  useEffect(() => {
    if (startDate || endDate) {
      validateDateTimeRange(startDate, endDate);
    }
  }, [startDate, endDate, validateDateTimeRange]);

  useEffect(() => {
    if (!isOpen) {
      setDateErrors({});
    }
  }, [isOpen]);

  return {
    dateErrors,
    validateDateTimeRange,
    setDateErrors,
  };
}
