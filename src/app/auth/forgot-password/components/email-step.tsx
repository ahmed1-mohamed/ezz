import { UseFormReturn } from "react-hook-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/form-message";
import { Loader2 } from "lucide-react";
import { ForgetPasswordSchema } from "@/validators/forget-password.schema";

interface EmailStepProps {
  form: UseFormReturn<Pick<ForgetPasswordSchema, "email">>;
  onSubmit: (data: Pick<ForgetPasswordSchema, "email">) => void;
  onInvalid: (errors: any) => void;
  isPending: boolean;
  t: (key: string) => string;
}

export function EmailStep({ form, onSubmit, onInvalid, isPending, t }: EmailStepProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-[#15042B]">
          {t("auth.forgotPassword.title")}
        </h1>
        <p className="font-normal text-[#4A5565]">
          {t("auth.forgotPassword.description")}
        </p>
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmit, onInvalid)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            {t("auth.forgotPassword.emailLabel")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            dir="ltr"
            autoComplete="email"
            placeholder={t("auth.forgotPassword.emailPlaceholder")}
            {...form.register("email")}
            error={!!form.formState.errors.email}
            aria-invalid={!!form.formState.errors.email}
          />
          <FieldError
            message={form.formState.errors.email?.message ? t(form.formState.errors.email.message) : undefined}
            className="mt-0"
          />
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-[#008081] hover:bg-teal-700 text-white h-12 text-base font-medium"
        >
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 me-2 animate-spin" />
              {t("auth.forgotPassword.sending")}
            </>
          ) : (
            t("auth.forgotPassword.submitEmail")
          )}
        </Button>
      </form>

      <Link prefetch={false}
        href="/auth/signin"
        className="text-sm auth-link-secondary"
      >
        {t("auth.forgotPassword.haveAccount")}{" "}
        <strong>{t("auth.forgotPassword.signInLink")}</strong>
      </Link>
    </>
  );
}
