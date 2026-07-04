import { useState, useEffect, useCallback } from 'react';
import { explanationLanguagesApi } from '@/shared/services/api/explanationLanguagesApi';

/**
 * Fetches the full list of available languages for the select dropdown.
 * Keeps its own local state to avoid coupling with the main query cache.
 */
export function useAvailableLanguages() {
    const [languages, setLanguages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const load = useCallback(async () => {
        setIsLoading(true);
        try {
            const res = await explanationLanguagesApi.fetchLanguages();
            const data = res?.data || res || [];
            setLanguages(Array.isArray(data) ? data : []);
        } catch {
            setLanguages([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    return { languages, isLoading };
}
