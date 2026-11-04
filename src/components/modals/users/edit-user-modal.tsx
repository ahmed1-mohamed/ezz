"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { Controller } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { AdminUsersService } from "@/features/users/services/AdminUsersService";
import { getEditNewUserSchema, type EditNewUserInput } from "@/validators/edit-new-user.schema";
import { useLanguage } from "@/contexts/LanguageContext";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { FormProvider } from "react-hook-form";
import { useDevelopersSelect } from "@/hooks/use-developers-select";
import { useRolesSelect } from "@/hooks/use-roles-select";
import { DeveloperFields } from "./components/DeveloperFields";

/** Backend field names that differ from the form's. */
const EDIT_USER_FIELD_MAP: Record<string, keyof EditNewUserInput> = {
  phone: "phone_number",
  role: "role_name",
  role_id: "role_name",
  role_type: "role_name",
};

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: number;
  onSuccess?: () => void;
}

export function EditUserModal({
  isOpen,
  onClose,
  userId,
  onSuccess,
}: EditUserModalProps) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const queryClient = useQueryClient();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedCountryId, setSelectedCountryId] = useState<number | undefined>();
  const { developers, isLoading: developersLoading } = useDevelopersSelect(selectedCountryId);

  const schema = useMemo(() => getEditNewUserSchema(t), [t]);
  const methods = useForm<EditNewUserInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "+",
      status: "active",
      role_name: "Admin",
      user_type: "expert",
      developer_id: undefined,
      developer_role: "",
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    setError,
    getValues,
    watch,
    formState: { errors },
  } = methods;

  // Same GET /dashboard/users/:id as ViewUserModal: share its cache entry (raw response body)
  // so View -> Edit doesn't refetch; `select` restores the { data: body } shape used below.
  const { data: userData, isLoading: userLoading } = useQuery({
    queryKey: ["userDetails", userId],
    queryFn: async () => (await AdminUsersService.getUser(userId)).data,
    select: (body) => ({ data: body }),
    enabled: !!token && userId != null && isOpen,
  });
  // Shares the roles cache with AddUserModal (same /dashboard/roles/all request).
  const { roles: rolesData } = useRolesSelect();
  const roles: any[] = Array.isArray(rolesData)
    ? rolesData
    : (rolesData as { data?: unknown[] }).data ?? [];

  useEffect(() => {
    if (!userData) return;
    const responsePayload = (userData as unknown as { data?: any })?.data;
    const user = responsePayload?.data ? responsePayload.data : responsePayload;
    if (!user) return;
    const u = user as Record<string, unknown>;

    const currentUserType = String(
      (u.user_type as string) ||
      ""
    ).toLowerCase();

    let exactRoleName = "";
    if (u.role && (u.role as any).role_name) {
      exactRoleName = (u.role as any).role_name;
    } else if (u.role_name) {
      exactRoleName = u.role_name as string;
    } else {
      // Fallback if missing
      if (currentUserType === "expert") exactRoleName = "Expert";
      else if (currentUserType === "developer") exactRoleName = "Developer";
      else exactRoleName = "Admin";
    }

    reset({
      first_name: (u.first_name as string) ?? "",
      last_name: (u.last_name as string) ?? "",
      email: (u.email as string) ?? "",
      phone_number: (u.phone_number as string)
        ? ((u.phone_number as string).startsWith("+")
          ? (u.phone_number as string)
          : "+" + (u.phone_number as string))
        : "+",
      status: (u.status as "active" | "inactive" | "banned") ?? "active",
      role_name: exactRoleName,
      user_type: currentUserType || "expert",
      developer_id: u.developer_id ? Number(u.developer_id) : undefined,
      developer_role: (u.developer_role as string) ?? "",
    });
  }, [userData, reset]);

  const handleClose = useCallback(() => {
    if (isSubmitting) return;
    reset();
    onClose();
  }, [isSubmitting, reset, onClose]);

  const onSubmit = async (formValues: EditNewUserInput) => {
    if (!userId) return;
    setIsSubmitting(true);
    try {
      const payload: Record<string, unknown> = {
        first_name: formValues.first_name,
        last_name: formValues.last_name,
        email: formValues.email,
        phone_number: formValues.phone_number,
        status: formValues.status,
        user_type: formValues.user_type || "expert",
        role_name: formValues.role_name || "Expert",
      };

      if (payload.user_type === "developer") {
        payload.developer_id = formValues.developer_id;
        payload.developer_role = formValues.developer_role;
      }

      const rolesList = Array.isArray(roles) ? roles : [];
      const selectedRoleName = (formValues.role_name || "Expert").toLowerCase();
      const matchedRole = rolesList.find((r: any) =>
        (r.role_name ?? r.name)?.toLowerCase() === selectedRoleName
      );

      if (matchedRole) {
        payload.role_id = matchedRole.role_id ?? matchedRole.id;
        payload.role_name = matchedRole.role_name ?? matchedRole.name;
        payload.role_type = matchedRole.role_type ?? matchedRole.type;
      }

      await AdminUsersService.updateUser(userId, payload);
      toast.success(t("users.messages.updateSuccess"));
      // Refetch every cached users page once (active and inactive), as the previous
      // invalidate + refetchQueries pair did, without fetching the active page twice.
      await queryClient.invalidateQueries({ queryKey: ["users"], refetchType: "all" });
      await queryClient.invalidateQueries({ queryKey: ["user-detail", userId] });
      await queryClient.invalidateQueries({ queryKey: ["userDetails", userId] });
      setIsSubmitting(false);
      reset();
      onClose();
      onSuccess?.();
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: EDIT_USER_FIELD_MAP,
        fallbackMessage: t("users.messages.updateFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    } finally {
      setIsSubmitting(false);
    }
  };
  const onInvalidForm = () => {
    toast.error(t("validation.fillRequiredFields"));
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("users.editUser")}
      size="md"
      showCloseButton={false}
      footer={
        <div className="flex gap-3 justify-end w-full">
          <Button variant="outline" onClick={handleClose} disabled={isSubmitting}>
            {t("users.cancel")}
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white"
            onClick={handleSubmit(onSubmit, onInvalidForm)}
            disabled={isSubmitting || userLoading}
          >
            {isSubmitting && (
              <div className="h-4 w-4 me-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}
            {isSubmitting
              ? t("users.addModal.updating")
              : t("users.editUser")}
          </Button>
        </div>
      }
    >
      {userLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-e-transparent" />
            <p className="mt-4 text-sm text-gray-600">{t("users.loading")}</p>
          </div>
        </div>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit, onInvalidForm)} className="space-y-5" noValidate>
            <FormErrorAlert message={errors.root?.server?.message} />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="edit-first-name">
                  {t("users.addModal.firstName")} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="edit-first-name"
                  placeholder={t("users.addModal.firstNamePlaceholder")}
                  {...register("first_name")}
                  className="mt-1"
                  error={!!errors.first_name}
                  aria-invalid={!!errors.first_name}
                />
                <FieldError message={errors.first_name?.message as string | undefined} />
              </div>
              <div>
                <Label htmlFor="edit-last-name">
                  {t("users.addModal.lastName")} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="edit-last-name"
                  placeholder={t("users.addModal.lastNamePlaceholder")}
                  {...register("last_name")}
                  className="mt-1"
                  error={!!errors.last_name}
                  aria-invalid={!!errors.last_name}
                />
                <FieldError message={errors.last_name?.message as string | undefined} />
              </div>
            </div>

            <div>
              <Label htmlFor="edit-user-email">
                {t("users.addModal.email")} <span className="text-red-500">*</span>
              </Label>
              <Input
                id="edit-user-email"
                type="email"
                dir="ltr"
                placeholder={t("users.addModal.emailPlaceholder")}
                {...register("email")}
                className="mt-1"
                error={!!errors.email}
                aria-invalid={!!errors.email}
              />
              <FieldError message={errors.email?.message as string | undefined} />
            </div>

            <div>
              <Label htmlFor="edit-user-phone">{t("users.addModal.phoneNumber")}</Label>
              <Input
                id="edit-user-phone"
                type="tel"
                dir="ltr"
                placeholder={t("users.addModal.phoneNumberPlaceholder")}
                {...register("phone_number", {
                  onChange: (e) => {
                    let val = e.target.value;
                    if (!val.startsWith("+")) {
                      val = "+" + val.replace(/\+/g, "");
                    } else {
                      val = "+" + val.slice(1).replace(/\+/g, "");
                    }
                    setValue("phone_number", val, { shouldValidate: !!errors.phone_number });
                  }
                })}
                className="mt-1"
                error={!!errors.phone_number}
                aria-invalid={!!errors.phone_number}
              />
              <FieldError message={errors.phone_number?.message as string | undefined} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="edit-user-type">{t("users.addModal.userType")}</Label>
                <Controller
                  name="user_type"
                  control={control}
                  render={({ field }) => (
                    <Select
                      key={`type-${field.value || "empty"}`}
                      value={field.value || ""}
                      onValueChange={(val) => field.onChange(val)}
                    >
                      <SelectTrigger className="mt-1" error={!!errors.user_type} aria-invalid={!!errors.user_type}>
                        <SelectValue placeholder={t("users.addModal.selectUserType")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">{t("users.filters.types.admin")}</SelectItem>
                        <SelectItem value="developer">{t("users.filters.types.developer")}</SelectItem>
                        <SelectItem value="expert">{t("users.filters.types.expert")}</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                <FieldError message={errors.user_type?.message as string | undefined} />
              </div>
              <div>
                <Label htmlFor="edit-user-role">{t("users.addModal.role")}</Label>
                <Controller
                  name="role_name"
                  control={control}
                  render={({ field }) => (
                    <Select
                      key={`role-${field.value || "empty"}`}
                      value={field.value || ""}
                      onValueChange={(val) => field.onChange(val)}
                    >
                      <SelectTrigger className="mt-1" error={!!errors.role_name} aria-invalid={!!errors.role_name}>
                        <SelectValue placeholder={t("users.addModal.selectRole")} />
                      </SelectTrigger>
                      <SelectContent>
                        {(() => {
                          const filteredRoles = roles.filter((role: any) => {
                            const name = String(role.role_name ?? role.name ?? "").toLowerCase();
                            const type = String(role.role_type ?? role.type ?? "").toLowerCase();
                            return (
                              name.includes("admin") ||
                              name.includes("developer") ||
                              name.includes("expert") ||
                              type.includes("admin") ||
                              type.includes("developer") ||
                              type.includes("expert")
                            );
                          });

                          const hasExpertName = filteredRoles.some((role: any) => {
                            const name = String(role.role_name ?? role.name ?? "").toLowerCase();
                            return name.includes("expert");
                          });

                          const roleItems = filteredRoles.map((role: any) => {
                            const rName = role.role_name ?? role.name;
                            return (
                              <SelectItem key={rName} value={rName}>
                                {rName}
                              </SelectItem>
                            );
                          });

                          if (!hasExpertName) {
                            roleItems.push(
                              <SelectItem key="fallback-expert" value="Expert">
                                {t("users.filters.types.expert")}
                              </SelectItem>
                            );
                          }

                          return roleItems;
                        })()}
                      </SelectContent>
                    </Select>
                  )}
                />
                <FieldError message={errors.role_name?.message as string | undefined} />
              </div>
            </div>

            <div>
              <Label htmlFor="edit-user-status">{t("users.columns.status")}</Label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select key={`status-${field.value || "empty"}`} value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="mt-1" error={!!errors.status}>
                      <SelectValue placeholder={t("users.addModal.selectStatus")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">{t("common.active")}</SelectItem>
                      <SelectItem value="inactive">{t("common.inactive")}</SelectItem>
                      <SelectItem value="banned">{t("users.filters.suspended")}</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              <FieldError message={errors.status?.message as string | undefined} />
            </div>


            {watch("user_type") === "developer" && (
              <DeveloperFields
                selectedCountryId={selectedCountryId}
                setSelectedCountryId={setSelectedCountryId}
                developers={developers}
                developersLoading={developersLoading}
                developerRoleOptions={[
                  { label: t("users.addModal.developerRoleAdmin"), value: "developer_admin" },
                  { label: t("users.addModal.developerRoleAgent"), value: "developer_agent" },
                ]}
              />
            )}

          </form>
        </FormProvider>
      )}
    </Modal>
  );
}