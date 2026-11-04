
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DashboardAdminService } from "@/data/api-client";


export function useChangePassword() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: {
            current_password: string;
            new_password: string;
            new_password_confirmation: string;
        }) => {
            return DashboardAdminService.changePassword(data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["adminProfile"] });
        },
    });
}
