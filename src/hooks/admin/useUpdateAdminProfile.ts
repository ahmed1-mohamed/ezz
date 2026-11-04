import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DashboardAdminService } from "@/data/api-client";
import { UpdateAdminValues } from "@/validators/accountSetting-schema";

export function useUpdateAdminProfile() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (values: UpdateAdminValues) => {
            const formData = new FormData();

            formData.append("first_name", values.first_name);
            formData.append("last_name", values.last_name);
            if (values.email) formData.append("email", values.email);
            if (values.phone_number) formData.append("phone_number", values.phone_number);

            if (values.profile_picture instanceof File) {
                formData.append("profile_picture", values.profile_picture);
            }

            return DashboardAdminService.updateProfileInformation(formData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["adminProfile"] });
        },
    });
}