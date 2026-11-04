"use client";

import { Controller } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useFirebaseMessaging } from "@/hooks/use-firebase-messaging";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { PasswordInput } from "@/components/ui/password-input";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { toUserMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { Loader2 } from "lucide-react";

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "validation.required" })
    .max(255, { message: "validation.email_invalid" })
    .email({ message: "validation.email_invalid" }),
  // Not trimmed: spaces can be part of a password.
  password: z.string().min(1, { message: "validation.required" }),
  remember: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

// next-auth errors that carry no user-facing text (provider codes, status-only or transport errors).
const TECHNICAL_AUTH_ERROR = /^(CredentialsSignin|Configuration|AccessDenied|Callback\w*)$|\(\d{3}\)|fetch failed|ECONN|ETIMEDOUT|invalid response|backend server error/i;

/** Message from the backend (forwarded by next-auth) that is safe to show, or null. */
function getSignInErrorMessage(error: unknown): string | null {
  const raw = error instanceof Error ? error.message : typeof error === "string" ? error : null;
  const message = toUserMessage(raw);
  if (!message || TECHNICAL_AUTH_ERROR.test(message)) return null;
  return message;
}

export default function SignInPage() {
  const router = useRouter();
  const { t } = useLanguage();
  // Firebase (permission prompt + FCM token request) starts on the first interaction with the
  // form instead of on page load; the token is still sent with the login request.
  const { fcmToken, requestToken } = useFirebaseMessaging({ lazy: true });

  const resolveFcmToken = async (): Promise<string | null> => {
    if (fcmToken) return fcmToken;
    const pending = requestToken();
    // Only wait when permission is already granted (no prompt pending), and never for long.
    if (typeof Notification === "undefined" || Notification.permission !== "granted") {
      return null;
    }
    return Promise.race([
      pending,
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000)),
    ]);
  };

  const {
    register,
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", remember: false },
  });

  const mutation = useMutation({
    mutationFn: async (data: LoginFormData) => {
      const token = await resolveFcmToken();
      const authPayload: Record<string, any> = {
        email: data.email || "",
        password: data.password || '',
        'fcm-token': token || '',
        redirect: false,
        remember: data.remember ?? false,
      };
      const result = await signIn("credentials", authPayload);
      if (result?.error) {
        throw new Error(result.error);
      }
      return result;
    },

    onSuccess: async () => {
      toast.success(t("auth.signin.success"));
      const session = await getSession();
      const userType = (session?.user?.user_type || session?.user?.role_name)?.toLowerCase();
      router.push(`/${userType}/home`);
    },

    onError(error) {
      // Show only what the backend says (e.g. "invalid credentials"); never echo the submitted values.
      const message = getSignInErrorMessage(error) ?? t("auth.signin.failed");
      setError("root.server", { type: "server", message });
      toast.error(message, { id: API_ERROR_TOAST_ID });
    },
  });

  const handleFormSubmit = (data: LoginFormData) => {
    clearErrors("root.server");
    mutation.mutate(data);
  };

  return (
    <div className="w-full max-w-[500px] bg-white rounded-[24px] shadow-2xl p-8 md:p-10 flex flex-col gap-6">
      <div className="flex justify-center mb-1">
        <Image
          src="/images/logo.svg"
          alt={t("auth.signin.logoAlt")}
          width={140}
          height={48}
          priority
          className="object-contain h-12 w-auto"
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      <h1 className="text-xl font-bold text-[#15042B]">
        {t("auth.signin.title")}
      </h1>

      <form
        onFocusCapture={() => {
          requestToken();
        }}
        onPointerDownCapture={() => {
          requestToken();
        }}
        onSubmit={handleSubmit(handleFormSubmit, (errs) => {
          const firstErrorKey = Object.keys(errs)[0];
          if (firstErrorKey) {
            const errorObj = errs[firstErrorKey as keyof typeof errs];
            if (errorObj?.message) {
              toast.error(t(errorObj.message));
            }
          }
        })}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-[#15042B] text-sm font-semibold leading-5">
            {t("auth.signin.email")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            dir="ltr"
            autoComplete="email"
            placeholder={t("auth.signin.emailPlaceholder")}
            {...register("email")}
            error={!!errors.email}
            aria-invalid={!!errors.email}
          />
          <FieldError message={errors.email?.message ? t(errors.email.message) : undefined} className="mt-0" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password" className="text-[#15042B] text-sm font-semibold leading-5">
            {t("auth.signin.password")} <span className="text-red-500">*</span>
          </Label>
          <PasswordInput
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder={t("auth.signin.passwordPlaceholder")}
            {...register("password")}
            error={!!errors.password}
            aria-invalid={!!errors.password}
          />
          <FieldError message={errors.password?.message ? t(errors.password.message) : undefined} className="mt-0" />
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center space-x-2">
            <Controller
              name="remember"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkbox
                  id="remember"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <label htmlFor="remember" className="text-sm font-medium text-gray-600 cursor-pointer select-none">
              {t("auth.signin.rememberMe")}
            </label>
          </div>
          <Link prefetch={false}
            href="/auth/forgot-password"
            className="text-sm auth-link"
          >
            {t("auth.signin.forgotPassword")}
          </Link>
        </div>

        <FormErrorAlert message={errors.root?.server?.message} />

        <Button
          type="submit"
          disabled={mutation.isPending}
          className="w-full bg-[#008081] hover:bg-[#008081] text-white h-12 text-base font-semibold rounded-xl shadow-md transition-all active:scale-[0.98]"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="h-4 w-4 me-2 animate-spin" />
              {t("auth.signin.submitting")}
            </>
          ) : (
            t("auth.signin.submit")
          )}
        </Button>
      </form>
    </div>
  );
}