import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { explanationLanguagesApi } from '@/shared/services/api/explanationLanguagesApi';
import Spinner from '@/shared/components/Spinner';
import { QUERY_KEY, STALE_TIME_MS } from './constants';
import { useExplanationLanguagesMutations } from './hooks/useExplanationLanguagesMutations';
import ExplanationLanguagesHeader from './components/ExplanationLanguagesHeader';
import ExplanationLanguageForm from './components/ExplanationLanguageForm';
import ExplanationLanguagesList from './components/ExplanationLanguagesList';

export default function AdminExplanationLanguages() {
    const { i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');

    const { data: languagesData, isLoading } = useQuery({
        queryKey: [QUERY_KEY],
        queryFn: () => explanationLanguagesApi.fetchLanguages(),
        staleTime: STALE_TIME_MS,
    });

    const languages = languagesData?.data || (Array.isArray(languagesData) ? languagesData : []);

    const {
        showForm,
        editingLanguageId,
        selectedLanguageId,
        setSelectedLanguageId,
        langNameAr,
        setLangNameAr,
        langNameEn,
        setLangNameEn,
        isSaving,
        handleOpenAddForm,
        handleSave,
        handleEdit,
        handleDelete,
        closeForm,
    } = useExplanationLanguagesMutations();

    const handleToggleForm = () => {
        if (showForm) {
            closeForm();
        } else {
            handleOpenAddForm();
        }
    };

    if (isLoading) {
        return (
            <div className="flex h-[60vh] items-center justify-center">
                <Spinner />
            </div>
        );
    }

    return (
        <div
            className="space-y-6 p-4 sm:p-6 md:p-8 max-w-6xl mx-auto animate-fadeIn"
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            <ExplanationLanguagesHeader
                showForm={showForm}
                onToggleForm={handleToggleForm}
            />

            {showForm && (
                <ExplanationLanguageForm
                    selectedLanguageId={selectedLanguageId}
                    setSelectedLanguageId={setSelectedLanguageId}
                    langNameAr={langNameAr}
                    setLangNameAr={setLangNameAr}
                    langNameEn={langNameEn}
                    setLangNameEn={setLangNameEn}
                    onCancel={closeForm}
                    onSubmit={handleSave}
                    isEditing={!!editingLanguageId}
                    isSaving={isSaving}
                />
            )}

            <section aria-label={isRtl ? 'لغات الشرح المتاحة' : 'Available explanation languages'}>
                <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-4 text-start">
                    {isRtl
                        ? `لغات الشرح المتاحة (${languages.length})`
                        : `Available Languages (${languages.length})`}
                </h2>
                <ExplanationLanguagesList
                    languages={languages}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </section>
        </div>
    );
}
