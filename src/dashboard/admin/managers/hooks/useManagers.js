import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { managersApi } from '@/shared/services/api/managersApi';
import { landingApi } from '@/shared/services/api/landingApi';

export function useManagers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchVal, setSearchVal] = useState('');
  const [committedSearch, setCommittedSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [needsExtraData, setNeedsExtraData] = useState(false);

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
        limit: 10,
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

  // Only fires when user opens add/edit screens
  const { data: permissionsData } = useQuery({
    queryKey: ['permissions'],
    queryFn: () => managersApi.fetchPermissions(),
    staleTime: 10 * 60 * 1000,
    enabled: needsExtraData,
    select: (raw) => {
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

  // Only fires when user opens add/edit screens
  const { data: countriesData } = useQuery({
    queryKey: ['countries'],
    queryFn: () => landingApi.fetchCountries(),
    staleTime: 30 * 60 * 1000,
    enabled: needsExtraData,
  });

  const responseData = supervisorsData || {};
  const dataObj = responseData.data || responseData;

  const supervisorsList = Array.isArray(dataObj)
    ? dataObj
    : Array.isArray(dataObj.admins)
      ? dataObj.admins
      : Array.isArray(dataObj.data)
        ? dataObj.data
        : [];

  const statsObj = responseData.statistics || dataObj.statistics || null;

  const rawPagination = responseData.pagination || dataObj.pagination || responseData.meta || dataObj.meta || null;
  const totalCount = statsObj?.total ?? rawPagination?.total ?? rawPagination?.totalItems ?? supervisorsList.length;
  const totalPagesCount = rawPagination?.numberOfPages
    ?? rawPagination?.pages
    ?? rawPagination?.totalPages
    ?? rawPagination?.pageCount
    ?? rawPagination?.total_pages
    ?? (totalCount > 0 ? Math.ceil(totalCount / 10) : 1);

  const paginationObj = rawPagination
    ? { ...rawPagination, numberOfPages: totalPagesCount, total: totalCount }
    : { numberOfPages: totalPagesCount, total: totalCount };

  return {
    currentPage,
    setCurrentPage,
    searchVal,
    setSearchVal,
    commitSearch,
    statusFilter,
    setStatusFilter,
    enableExtraData: () => setNeedsExtraData(true),
    supervisorsData: {
      ...responseData,
      statistics: statsObj,
      pagination: paginationObj
    },
    supervisors: supervisorsList,
    isLoadingSupervisors,
    permissionsList: permissionsData?.data || [],
    countries: countriesData?.data || []
  };
}
