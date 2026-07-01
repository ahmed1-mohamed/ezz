import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { adminAssignmentsApi } from '@/shared/services/api/adminAssignmentsApi';
import { showDeleteConfirm } from '@/shared/utils/sweetAlert';

export function useAssignments() {
    const { i18n } = useTranslation();

    const [stats, setStats] = useState(null);
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('assignments');
    const [searchValue, setSearchValue] = useState('');

    const loadData = useCallback(async () => {
        setLoading(true);
        const [statsRes, assignmentsRes] = await Promise.all([
            adminAssignmentsApi.fetchStats(),
            adminAssignmentsApi.fetchAssignments(searchValue),
        ]);
        if (statsRes?.success) setStats(statsRes.data);
        if (assignmentsRes?.success) setAssignments(assignmentsRes.data);
        setLoading(false);
    }, [searchValue]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const handleDelete = useCallback(async (assignment) => {
        const isRtl = i18n.language.startsWith('ar');
        const isConfirmed = await showDeleteConfirm(isRtl, assignment.title);
        if (!isConfirmed) return;

        const res = await adminAssignmentsApi.deleteAssignment(assignment.id);
        if (res?.success) {
            setAssignments((prev) => prev.filter((item) => item.id !== assignment.id));
            const statsRes = await adminAssignmentsApi.fetchStats();
            if (statsRes?.success) setStats(statsRes.data);
        }
    }, [i18n.language]);

    const filteredAssignments = useMemo(() => {
        if (activeTab === 'assignments') return assignments;
        return assignments.filter((a) => a.status === 'completed' || a.submittedCount === a.totalCount);
    }, [assignments, activeTab]);

    return {
        stats,
        loading,
        filteredAssignments,
        activeTab,
        setActiveTab,
        searchValue,
        setSearchValue,
        handleDelete,
    };
}
