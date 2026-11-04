"use client";

import { useEffect } from "react";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Loader2 } from "lucide-react";
import { AdminRolesService } from "@/data/api-client";
import { toast } from "sonner";
import { editRoleSchema } from "@/validators/role.schema";
import type { EditRoleFormInput } from "@/validators/role.schema";
import { useLanguage } from "@/contexts/LanguageContext";
import { parsePermissionsToMatrix, SECTIONS, ACTIONS } from "@/app/admin/roles/utils/map-role";
import { useDashboardPermissions } from "@/hooks/use-dashboard-permissions";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { normalizeRoleApiError } from "@/app/admin/roles/utils/role-api-error";

const ROLE_FIELD_MAP: Record<string, keyof EditRoleFormInput> = {
  name: "role_name",
  name_en: "role_name",
};

interface EditRoleModalProps {
  roleId: number;
  roleName: string;
  description: string[] | string | null;
  permissions?: Record<string, Record<string, boolean>> | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function EditRoleModal({
  roleId,
  roleName,
  description,
  permissions: initialPermissions,
  isOpen,
  onClose,
  onSuccess,
}: EditRoleModalProps) {
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const defaultDesc = Array.isArray(description)
    ? description[0]
    : typeof description === 'string' ? description : "";

  const safePermissions = (perms: any, rName = roleName, rType?: string) => {
    return parsePermissionsToMatrix(perms, rName, rType);
  };

  const { data: apiPermissions } = useDashboardPermissions(undefined, isOpen);

  const { data: roleDetails } = useQuery({
    queryKey: ["roleDetails", roleId],
    queryFn: async () => {
      const response = await AdminRolesService.getRole(roleId);
      return (response as any).data?.data || (response as any).data || response;
    },
    enabled: isOpen && roleId != null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    setError,
    getValues,
    watch,
  } = useForm<EditRoleFormInput>({
    resolver: zodResolver(editRoleSchema),
    defaultValues: {
      role_name: roleName,
      description: defaultDesc,
      permissions: safePermissions(initialPermissions),
    },
  });

  useEffect(() => {
    if (isOpen) {
      let rawPerms = roleDetails?.permissions || initialPermissions || {};
      if (typeof rawPerms === "string") {
        try { rawPerms = JSON.parse(rawPerms); } catch (e) { rawPerms = {}; }
      }

      reset({
        role_name: roleDetails?.role_name || roleName,
        description: roleDetails?.description || defaultDesc,
        permissions: safePermissions(
          rawPerms,
          roleDetails?.role_name || roleName,
          roleDetails?.role_type || roleDetails?.user_type
        ),
      });
    }
  }, [isOpen, roleName, defaultDesc, initialPermissions, roleDetails, reset]);

  const currentPermissions = watch("permissions") || {};

  const mutation = useMutation({
    mutationFn: async (payload: Record<string, unknown>) => {
      // PUT /api/dashboard/roles/:id
      const res = await AdminRolesService.updateRole(roleId, payload);
      // POST /api/dashboard/roles/permissions
      if (Array.isArray(payload.permission_ids) && payload.permission_ids.length > 0) {
        try {
          await AdminRolesService.addPermissions({
            role_id: roleId,
            permission_ids: payload.permission_ids as number[],
          });
        } catch {
          // Ignore if already synced by PUT
        }
      }
      return res;
    },
    onSuccess: () => {
      toast.success(t("roles.messages.updateSuccess"));
      queryClient.invalidateQueries({ queryKey: ["roles"] });
      queryClient.invalidateQueries({ queryKey: ["roles_admin"] });
      queryClient.invalidateQueries({ queryKey: ["roleDetails", roleId] });
      onSuccess();
      onClose();
    },
    onError: (error) => {
      const { summary } = applyApiFormErrors(normalizeRoleApiError(error), {
        setError,
        getValues,
        t,
        fieldMap: ROLE_FIELD_MAP,
        fallbackMessage: t("roles.messages.updateFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    },
  });

  const handleClose = () => {
    if (mutation.isPending) return;
    onClose();
  };

  const handleFormSubmit = (data: EditRoleFormInput) => {
    const permissionIds: number[] = [];

    // Map current selected matrix to permission IDs
    if (apiPermissions && apiPermissions.length > 0) {
      apiPermissions.forEach((perm) => {
        const grp = (perm.group || "").toLowerCase();
        const act = (perm.permission_name || "").toLowerCase();

        let sec = "";
        if (grp.includes("developer")) sec = "Developers";
        else if (grp.includes("project")) sec = "Projects";
        else if (grp.includes("propert")) sec = "Properties";
        else if (grp.includes("ad")) sec = "Ads";
        else if (grp.includes("role")) sec = "Roles";
        else if (grp.includes("user")) sec = "Users";
        else if (grp.includes("expert")) sec = "Experts";

        if (sec && currentPermissions[sec]) {
          let matchedAction: string | null = null;
          if (act.includes("view") || act.includes("read") || act.includes("show") || act.includes("index")) matchedAction = "view";
          else if (act.includes("edit") || act.includes("update") || act.includes("put")) matchedAction = "edit";
          else if (act.includes("delete") || act.includes("destroy") || act.includes("remove")) matchedAction = "delete";
          else if (act.includes("create") || act.includes("add") || act.includes("store")) matchedAction = "create";

          if (matchedAction && currentPermissions[sec]?.[matchedAction]) {
            if (perm.permission_id && !permissionIds.includes(perm.permission_id)) {
              permissionIds.push(perm.permission_id);
            }
          }
        }
      });
    }

    // Fallback: Also include any existing permission_id from roleDetails that should stay
    if (Array.isArray(roleDetails?.permissions)) {
      roleDetails.permissions.forEach((p: any) => {
        const pId = Number(p.permission_id ?? p.id);
        if (pId > 0 && !permissionIds.includes(pId)) {
          permissionIds.push(pId);
        }
      });
    }

    const payload: Record<string, unknown> = {
      role_name: data.role_name,
      role_type: roleDetails?.role_type || roleDetails?.user_type || "admin",
      permission_ids: permissionIds,
    };
    if (data.description) {
      payload.description = data.description;
    }

    mutation.mutate(payload);
  };

  const toggleAction = (section: string, action: typeof ACTIONS[number]) => {
    const currentVal = currentPermissions[section]?.[action] || false;
    setValue(`permissions.${section}.${action}`, !currentVal);
  };

  const toggleSectionAll = (section: string) => {
    const allTrue = ACTIONS.every(a => currentPermissions[section]?.[a]);
    ACTIONS.forEach(a => {
      setValue(`permissions.${section}.${a}`, !allTrue);
    });
  };

  const toggleGlobalAll = () => {
    const allTrue = SECTIONS.every(s => ACTIONS.every(a => currentPermissions[s]?.[a]));
    SECTIONS.forEach(s => {
      ACTIONS.forEach(a => {
        setValue(`permissions.${s}.${a}`, !allTrue);
      });
    });
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-w-2xl bg-white p-0 overflow-hidden border-none rounded-xl">
        <DialogHeader className="p-6 pb-4 border-b border-gray-100 flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-xl font-semibold text-[#15042B]">{t("roles.editRole")}</DialogTitle>
        </DialogHeader>

        <form noValidate onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col max-h-[80vh]">
          <div className="p-6 overflow-y-auto space-y-6">
            <FormErrorAlert message={errors.root?.server?.message} />
            <div className="space-y-2">
              <label htmlFor="edit-role-name" className="text-sm font-medium text-gray-700 flex items-center gap-1">
                {t("roles.roleNameEnLabel")} <span className="text-red-500">*</span>
              </label>
              <Input
                id="edit-role-name"
                {...register("role_name")}
                error={!!errors.role_name}
                aria-invalid={!!errors.role_name}
                className="bg-gray-50/50"
              />
              <FieldError message={errors.role_name?.message ? t(errors.role_name.message) : undefined} />
            </div>

            <div className="space-y-2">
              <label htmlFor="edit-role-description" className="text-sm font-medium text-gray-700">{t("roles.description")}</label>
              <Textarea
                id="edit-role-description"
                {...register("description")}
                rows={3}
                error={!!errors.description}
                aria-invalid={!!errors.description}
                className="bg-gray-50/50 resize-none"
              />
              <FieldError message={errors.description?.message ? t(errors.description.message) : undefined} />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#15042B]">{t("roles.permissions")}</h3>
                <button
                  type="button"
                  onClick={toggleGlobalAll}
                  className="text-sm font-medium text-teal-600 hover:text-teal-700"
                >
                  {t("roles.toggleAll")}
                </button>
              </div>

              <div className="bg-gray-50/50 rounded-lg p-4">
                <div className="grid grid-cols-5 gap-4 mb-4 px-4 text-sm font-medium text-[#15042B]">
                  <div className="col-span-1">{t("roles.section")}</div>
                  <div className="text-center">{t("roles.view")}</div>
                  <div className="text-center">{t("roles.edit")}</div>
                  <div className="text-center">{t("roles.delete")}</div>
                  <div className="text-center">{t("roles.create")}</div>
                </div>

                <div className="space-y-2">
                  {SECTIONS.map((section) => (
                    <div key={section} className="grid grid-cols-5 gap-4 items-center bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <div className="col-span-1 flex flex-col gap-1">
                        <span className="font-semibold text-[#15042B] text-sm">{t(`roles.sections.${section.toLowerCase()}`)}</span>
                        <button
                          type="button"
                          onClick={() => toggleSectionAll(section)}
                          className="text-xs text-teal-600 text-start hover:underline"
                        >
                          {t("roles.toggleAll")}
                        </button>
                      </div>
                      {ACTIONS.map(action => (
                        <div key={action} className="flex justify-center">
                          <Switch
                            checked={currentPermissions[section]?.[action] || false}
                            onCheckedChange={() => toggleAction(section, action)}
                            className="data-[state=checked]:bg-[#A855F7]"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-white">
            <Button type="button" variant="outline" onClick={handleClose} disabled={mutation.isPending} className="text-gray-600 hover:text-gray-700 hover:bg-gray-50 bg-white">
              {t("roles.cancelBtn")}
            </Button>
            <Button
              type="submit"
              className="bg-[#007A55] hover:bg-[#007a55e0] text-white px-6 font-medium"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 me-2 animate-spin" />
                  {t("roles.saving")}
                </>
              ) : (
                t("roles.saveChanges")
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
