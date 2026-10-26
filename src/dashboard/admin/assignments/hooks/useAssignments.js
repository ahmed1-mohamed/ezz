import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
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
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const debounceTimerRef = useRef(null);

    // Debounce search input by 350ms to prevent spamming the API on every keystroke
    useEffect(() => {
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }
        debounceTimerRef.current = setTimeout(() => {
            setDebouncedSearch(searchValue.trim());
        }, 350);

        return () => {
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }
        };
    }, [searchValue]);

    // Fetch stats only on mount
    useEffect(() => {
        let isMounted = true;
        const loadStats = async () => {
            const statsRes = await adminAssignmentsApi.fetchStats();
            if (isMounted && statsRes?.success) {
                setStats(statsRes.data);
            }
        };
        loadStats();
        return () => { isMounted = false; };
    }, []);

    // Fetch assignments when debouncedSearch changes
    useEffect(() => {
        let isMounted = true;
        const loadAssignments = async () => {
            setLoading(true);
            const assignmentsRes = await adminAssignmentsApi.fetchAssignments(debouncedSearch);
            if (!isMounted) return;
            if (assignmentsRes?.success) {
                setAssignments(assignmentsRes.data || []);
            }
            setLoading(false);
        };
        loadAssignments();
        return () => { isMounted = false; };
    }, [debouncedSearch]);

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
