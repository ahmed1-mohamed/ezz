import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Spinner from '@/shared/components/Spinner';
import { useAssignments } from './hooks/useAssignments';
import AssignmentsStats from './components/AssignmentsStats';
import AssignmentsFilters from './components/AssignmentsFilters';
import AssignmentsTable from './components/AssignmentsTable';

function AdminAssignments() {
    const { i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');

    const {
        stats,
        loading,
        filteredAssignments,
        activeTab,
        setActiveTab,
        searchValue,
        setSearchValue,
        handleDelete,
    } = useAssignments();

    if (loading && !stats) {
        return (
            <div className="flex items-center justify-center h-60">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="space-y-6" dir={isRtl ? 'rtl' : 'ltr'}>
            {stats && <AssignmentsStats stats={stats} />}

            <AssignmentsFilters
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            {loading ? (
                <div className="flex items-center justify-center h-40">
                    <Spinner />
                </div>
            ) : (
                <AssignmentsTable
                    assignments={filteredAssignments}
                    onDelete={handleDelete}
                />
            )}
        </div>
    );
}

export default memo(AdminAssignments);
