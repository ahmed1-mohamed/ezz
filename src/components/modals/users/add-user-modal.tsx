"use client";

import { FormProvider } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { useRolesSelect } from "@/hooks/use-roles-select";
import { getCreateNewUserSchema, type CreateNewUserInput } from "@/validators/create-new-user.schema";
import { useDevelopersSelect } from "@/hooks/use-developers-select";
import { BasicInfoFields } from "./components/BasicInfoFields";
import { DeveloperFields } from "./components/DeveloperFields";
import { PasswordFields } from "./components/PasswordFields";
import { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { FormErrorAlert } from "@/components/ui/form-message";
import { toast } from "sonner";

/** Backend field names that differ from the form's. */
const USER_FIELD_MAP: Record<string, keyof CreateNewUserInput> = {
  phone: "phone_number",
  role: "role_id",
  role_name: "role_id",
  image: "profile_picture",
  avatar: "profile_picture",
};

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateNewUserInput) => void | Promise<any>;
  isPending?: boolean;
}

export function AddUserModal({ isOpen, onClose, onSubmit, isPending = false }: AddUserModalProps) {
  const { roles, isLoading: rolesLoading } = useRolesSelect();
  const [selectedCountryId, setSelectedCountryId] = useState<number | undefined>();
  const { developers, isLoading: developersLoading } = useDevelopersSelect(selectedCountryId);
  const { t } = useLanguage();
  const [isDeveloper, setIsDeveloper] = useState<boolean>(false);
  const developerRoleOptions = [
    { label: t("users.addModal.developerRoleAdmin"), value: "developer_admin" },
    { label: t("users.addModal.developerRoleAgent"), value: "developer_agent" },
  ];
  const schema = useMemo(() => getCreateNewUserSchema(t), [t]);
  const methods = useForm<CreateNewUserInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "+",
      password: "",
      password_confirmation: "",
      role_id: undefined as unknown as number,
      user_type: "",
      status: "active",
      description: "",
      profile_picture: "",
      developer_id: undefined,
      developer_role: "",
    },
  });
  const handleUserTypeChange = (selectedUserType: string) => {
    methods.setValue("user_type", selectedUserType);
    const isDev = selectedUserType?.toLowerCase() === "developer";
    setIsDeveloper(isDev);
    if (!isDev) {
      methods.setValue("developer_id", undefined);
      methods.setValue("developer_role", "");
    }
    if (selectedUserType?.toLowerCase() === "expert") {
      const expertRole = (roles as any[]).find(
        (r: any) =>
          (r.role_name ?? r.name)?.toLowerCase?.() === "expert"
      );
      if (expertRole) {
        methods.setValue("role_id", Number(expertRole.role_id ?? expertRole.id));
      }
    }
  };
  const handleRoleChange = (selectedRoleId: number) => {
    methods.setValue("role_id", selectedRoleId, { shouldValidate: methods.formState.isSubmitted });
    const selectedRole = (roles as any[]).find((r: any) => (r.role_id ?? r.id) === selectedRoleId);
    const roleName = (selectedRole?.role_name ?? selectedRole?.name)?.toLowerCase();
    if (roleName === "expert") {
      methods.setValue("user_type", "expert");
      setIsDeveloper(false);
      methods.setValue("developer_id", undefined);
      methods.setValue("developer_role", "");
    } else if (roleName === "developer") {
      handleUserTypeChange("developer");
    } else if (roleName === "admin") {
      const current = methods.getValues("user_type");
      if (!current || current === "developer") {
        methods.setValue("user_type", "admin");
        setIsDeveloper(false);
        methods.setValue("developer_id", undefined);
        methods.setValue("developer_role", "");
      }
    }
  };
  const isBusy = isPending || methods.formState.isSubmitting;
  const handleClose = () => {
    if (isBusy) return;
    methods.reset();
    setIsDeveloper(false);
    setSelectedCountryId(undefined);
    onClose();
  };
  const onSubmitForm = async (data: CreateNewUserInput) => {
    try {
      await onSubmit(data);
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError: methods.setError,
        getValues: methods.getValues,
        t,
        fieldMap: USER_FIELD_MAP,
        fallbackMessage: t("users.messages.addFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };
  const onInvalidForm = () => {
    toast.error(t("validation.fillRequiredFields"));
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("users.addModal.title")}
      size="md"
      scrollable={true}
      showCloseButton={false}
      footer={
        <div className="flex gap-3 justify-end w-full">
          <Button variant="outline" onClick={handleClose} disabled={isBusy}>
            {t("users.addModal.close")}
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2"
            onClick={methods.handleSubmit(onSubmitForm, onInvalidForm)}
            disabled={isBusy}
          >
            {isBusy && <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
            {isBusy ? t("users.addModal.adding") : t("users.addModal.addUser")}
          </Button>
        </div>
      }
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitForm, onInvalidForm)} className="space-y-5" noValidate>
          <FormErrorAlert message={methods.formState.errors.root?.server?.message} />
          <BasicInfoFields
            roles={roles}
            rolesLoading={rolesLoading}
            onRoleChange={handleRoleChange}
            onUserTypeChange={handleUserTypeChange}
          />

          {isDeveloper && (
            <DeveloperFields
              selectedCountryId={selectedCountryId}
              setSelectedCountryId={setSelectedCountryId}
              developers={developers}
              developersLoading={developersLoading}
              developerRoleOptions={developerRoleOptions}
            />
          )}

          <PasswordFields />

        </form>
      </FormProvider>
    </Modal>
  );
}