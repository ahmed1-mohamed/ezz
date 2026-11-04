"use client";

import {
  useForm as useReactHookForm,
  type FieldValues,
  type SubmitErrorHandler,
  type UseFormProps,
  type UseFormReturn,
} from "react-hook-form";
import { scrollToFirstInvalidField } from "@/lib/form-utils";

const PATCHED = Symbol("scrollToFirstError");

/**
 * `react-hook-form`'s `useForm`, but a failed submit scrolls to and focuses the first invalid
 * field on screen (see `scrollToFirstInvalidField`). Use it instead of importing `useForm`
 * from "react-hook-form" directly.
 */
export function useForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
>(
  props?: UseFormProps<TFieldValues, TContext, TTransformedValues>
): UseFormReturn<TFieldValues, TContext, TTransformedValues> {
  // react-hook-form's own focus follows registration order and skips Controller fields.
  const form = useReactHookForm<TFieldValues, TContext, TTransformedValues>({
    shouldFocusError: false,
    ...props,
  });

  // The returned object is the same on every render, so patch it once.
  const patched = form as typeof form & { [PATCHED]?: true };
  if (!patched[PATCHED]) {
    const originalHandleSubmit = form.handleSubmit;
    form.handleSubmit = (onValid, onInvalid?: SubmitErrorHandler<TFieldValues>) =>
      originalHandleSubmit(onValid, async (errors, event) => {
        await onInvalid?.(errors, event);
        scrollToFirstInvalidField(event?.target ?? null);
      });
    patched[PATCHED] = true;
  }

  return form;
}
