import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import useDebounce from '@/shared/hooks/useDebounce';
import { managersApi } from '@/shared/services/api/managersApi';
import { landingApi } from '@/shared/services/api/landingApi';

export function useManagers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchVal, setSearchVal] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const debouncedSearch = useDebounce(searchVal, 300);

  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter, debouncedSearch]);

  const { data: supervisorsData, isLoading: isLoadingSupervisors } = useQuery({
    queryKey: ['admins', statusFilter, currentPage, debouncedSearch],
    queryFn: () => {
      const params = {
        page: currentPage,
        limit: 5,
        search: debouncedSearch
      };
      if (statusFilter === 'active') {
        return managersApi.fetchActiveSupervisors(params);
      } else if (statusFilter === 'stopped') {
        return managersApi.fetchStoppedSupervisors(params);
      }
      return managersApi.fetchSupervisors(params);
    },
    staleTime: 5 * 60 * 1000,
  });

  const { data: permissionsData, isLoading: isLoadingPermissions } = useQuery({
    queryKey: ['permissions'],
    queryFn: () => managersApi.fetchPermissions(),
    staleTime: 5 * 60 * 1000,
  });

  const { data: countriesData } = useQuery({
    queryKey: ['countries'],
    queryFn: () => landingApi.fetchCountries(),
    staleTime: 5 * 60 * 1000,
  });

  return {
    currentPage,
    setCurrentPage,
    searchVal,
    setSearchVal,
    statusFilter,
    setStatusFilter,
    debouncedSearch,
    supervisorsData: supervisorsData || {},
    supervisors: supervisorsData?.data || [],
    isLoadingSupervisors,
    permissionsList: permissionsData?.data || [],
    isLoadingPermissions,
    countries: countriesData?.data || []
  };
}
