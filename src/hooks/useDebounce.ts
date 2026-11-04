'use client';

import { useEffect, useState } from "react";

/** Delay before a search input's value is used (to query the API, filter or update the URL). */
export const SEARCH_DEBOUNCE_MS = 300;

export function useDebounce<T>(value: T, delay: number = SEARCH_DEBOUNCE_MS) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}
