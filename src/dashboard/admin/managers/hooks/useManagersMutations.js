import { useMutation, useQueryClient } from '@tanstack/react-query';
import { managersApi } from '@/shared/services/api/managersApi';
import { showSuccessToast } from '@/shared/utils/sweetAlert';

export function useManagersMutations(isRtl) {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: ({ id, adminData }) => managersApi.updateSupervisor(id, adminData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admins'] });
      showSuccessToast(isRtl ? 'تم تحديث بيانات المشرف بنجاح!' : 'Supervisor updated successfully!', isRtl);
    }
  });

  const createMutation = useMutation({
    mutationFn: (supervisorData) => managersApi.createSupervisor(supervisorData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admins'] });
      showSuccessToast(isRtl ? 'تم إضافة المشرف بنجاح!' : 'Supervisor added successfully!', isRtl);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => managersApi.deleteSupervisor(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admins'] });
      showSuccessToast(isRtl ? 'تم حذف المشرف بنجاح!' : 'Supervisor deleted successfully!', isRtl);
    }
  });

  const toggleStatusMutation = useMutation({
    mutationFn: ({ userId }) => managersApi.toggleActiveUser(userId), // Wait, the original code called managersApi.toggleUserActive(userId), let's check managersApi! Oh, in managersApi it's toggleActiveUser(id).
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['admins'] });
      const statusText = res?.data?.active ? (isRtl ? 'تفعيل' : 'activated') : (isRtl ? 'تعليق' : 'suspended');
      showSuccessToast(isRtl ? `تم ${statusText} حساب المشرف بنجاح!` : `Supervisor account ${statusText} successfully!`, isRtl);
    }
  });

  return {
    updateMutation,
    createMutation,
    deleteMutation,
    toggleStatusMutation
  };
}
