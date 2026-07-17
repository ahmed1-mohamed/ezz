import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { managersApi } from '@/shared/services/api/managersApi';
import { landingApi } from '@/shared/services/api/landingApi';

export function useManagers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchVal, setSearchVal] = useState('');
  const [committedSearch, setCommittedSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter, committedSearch]);

  const commitSearch = () => {
    setCommittedSearch(searchVal);
    setCurrentPage(1);
  };

  const { data: supervisorsData, isLoading: isLoadingSupervisors } = useQuery({
    queryKey: ['admins', statusFilter, currentPage, committedSearch],
    queryFn: () => {
      const params = {
        page: currentPage,
        limit: 5,
        search: committedSearch
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
    select: (raw) => {
      // API returns items shaped as: { permission: {_id, name}, actions: [{key, label}] }
      // Normalize to: { id, name, keys[] } which the UI components expect
      const items = raw?.data || raw || [];
      const normalized = Array.isArray(items) ? items.map((item) => {
        const perm = item.permission || item;
        const id = perm._id || perm.id || item._id || item.id;
        const name = perm.name || item.name;
        const actions = item.actions || perm.actions || [];
        const keys = Array.isArray(actions)
          ? actions.map((a) => (typeof a === 'object' ? a.key : a)).filter(Boolean)
          : (Array.isArray(item.keys) ? item.keys : []);
        return { id, name, keys };
      }) : [];
      return { ...raw, data: normalized };
    },
  });

  const { data: countriesData } = useQuery({
    queryKey: ['countries'],
    queryFn: () => landingApi.fetchCountries(),
    staleTime: 5 * 60 * 1000,
  });

  const responseData = supervisorsData || {};
  const dataObj = responseData.data || responseData;
  const supervisorsList = Array.isArray(dataObj) ? dataObj : (Array.isArray(dataObj.admins) ? dataObj.admins : (Array.isArray(dataObj.data) ? dataObj.data : []));
  const statsObj = responseData.statistics || dataObj.statistics || null;
  const paginationObj = responseData.pagination || dataObj.pagination || null;

  return {
    currentPage,
    setCurrentPage,
    searchVal,
    setSearchVal,
    commitSearch,
    statusFilter,
    setStatusFilter,
    supervisorsData: {
      ...responseData,
      statistics: statsObj,
      pagination: paginationObj
    },
    supervisors: supervisorsList,
    isLoadingSupervisors,
    permissionsList: permissionsData?.data || [],
    isLoadingPermissions,
    countries: countriesData?.data || []
  };
}
