import { useState, useCallback } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { explanationLanguagesApi } from '@/shared/services/api/explanationLanguagesApi';
import { showDeleteConfirm } from '@/shared/utils/sweetAlert';
import { QUERY_KEY } from '../constants';

/**
 * Manages all form state and CRUD mutations for explanation languages.
 */
export function useExplanationLanguagesMutations() {
    const { i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const queryClient = useQueryClient();

    const [showForm, setShowForm] = useState(false);
    const [editingLanguageId, setEditingLanguageId] = useState(null);
    const [selectedLanguageId, setSelectedLanguageId] = useState('');
    const [langNameAr, setLangNameAr] = useState('');
    const [langNameEn, setLangNameEn] = useState('');

    const resetForm = useCallback(() => {
        setSelectedLanguageId('');
        setLangNameAr('');
        setLangNameEn('');
        setEditingLanguageId(null);
    }, []);

    const closeForm = useCallback(() => {
        setShowForm(false);
        resetForm();
    }, [resetForm]);

    const createMutation = useMutation({
        mutationFn: explanationLanguagesApi.createLanguage,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
            closeForm();
            toast.success(isRtl ? 'تم إضافة لغة الشرح بنجاح!' : 'Explanation language added successfully!');
        },
        onError: () => {
            toast.error(isRtl ? 'حدث خطأ أثناء إضافة اللغة' : 'Failed to add language');
        },
    });

    const updateMutation = useMutation({
        mutationFn: ({ id, payload }) => explanationLanguagesApi.updateLanguage(id, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
            closeForm();
            toast.success(isRtl ? 'تم تحديث لغة الشرح بنجاح!' : 'Explanation language updated successfully!');
        },
        onError: () => {
            toast.error(isRtl ? 'حدث خطأ أثناء تعديل اللغة' : 'Failed to update language');
        },
    });

    const deleteMutation = useMutation({
        mutationFn: (id) => explanationLanguagesApi.deleteLanguage(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
            toast.success(isRtl ? 'تم حذف لغة الشرح بنجاح!' : 'Explanation language deleted successfully!');
        },
        onError: () => {
            toast.error(isRtl ? 'حدث خطأ أثناء حذف اللغة' : 'Failed to delete language');
        },
    });

    const handleOpenAddForm = useCallback(() => {
        resetForm();
        setShowForm(true);
    }, [resetForm]);

    const handleSave = useCallback(async (e) => {
        e.preventDefault();
        if (!langNameAr.trim() && !langNameEn.trim()) {
            toast.error(isRtl ? 'الرجاء اختيار لغة!' : 'Please select a language!');
            return;
        }
        const payload = { name: { ar: langNameAr.trim(), en: langNameEn.trim() } };
        if (editingLanguageId) {
            await updateMutation.mutateAsync({ id: editingLanguageId, payload });
        } else {
            await createMutation.mutateAsync(payload);
        }
    }, [langNameAr, langNameEn, editingLanguageId, isRtl, createMutation, updateMutation]);

    const handleEdit = useCallback(async (langItem) => {
        const id = langItem.id || langItem._id;
        try {
            const res = await explanationLanguagesApi.fetchLanguageById(id);
            const langData = res?.data || res;
            const arName = typeof langData.name === 'object' ? (langData.name?.ar || '') : (langData.name || '');
            const enName = typeof langData.name === 'object' ? (langData.name?.en || '') : (langData.nameEn || langData.name || '');
            setLangNameAr(arName);
            setLangNameEn(enName);
            setSelectedLanguageId(id);
            setEditingLanguageId(id);
            setShowForm(true);
        } catch {
            toast.error(isRtl ? 'حدث خطأ أثناء تحميل بيانات اللغة' : 'Failed to load language details');
        }
    }, [isRtl]);

    const handleDelete = useCallback(async (langItem) => {
        const displayName = typeof langItem.name === 'object'
            ? (isRtl ? langItem.name.ar : langItem.name.en)
            : langItem.name;
        const isConfirmed = await showDeleteConfirm(isRtl, displayName);
        if (!isConfirmed) return;
        await deleteMutation.mutateAsync(langItem.id || langItem._id);
    }, [isRtl, deleteMutation]);

    return {
        showForm,
        editingLanguageId,
        selectedLanguageId,
        setSelectedLanguageId,
        langNameAr,
        setLangNameAr,
        langNameEn,
        setLangNameEn,
        isSaving: createMutation.isPending || updateMutation.isPending,
        handleOpenAddForm,
        handleSave,
        handleEdit,
        handleDelete,
        closeForm,
    };
}
