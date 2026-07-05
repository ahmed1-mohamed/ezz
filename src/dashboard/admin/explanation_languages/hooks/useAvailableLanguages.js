import { useState, useEffect, useCallback } from 'react';
import { explanationLanguagesApi } from '@/shared/services/api/explanationLanguagesApi';


export function useAvailableLanguages() {
    const [languages, setLanguages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const load = useCallback(async () => {
        setIsLoading(true);
        try {
            const res = await explanationLanguagesApi.fetchPrivateLanguages();
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
