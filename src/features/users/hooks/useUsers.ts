"use client";

import { useQuery, useMutation, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { AdminUsersService } from "../services/AdminUsersService";
import { CreateNewUserInput } from "@/validators/create-new-user.schema";
import { unpackUsersResponse, mapUser } from "../utils/map-user";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function useUsers(
  page: number = 1,
  perPage: number = 15,
  search?: string,
  status: string = "all",
  user_type: string = "all",
  enabled: boolean = true,
) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const usersData = useQuery({
    queryKey: ["users", page, perPage, search, status, user_type],
    queryFn: () => AdminUsersService.getUsers(page, perPage, search, status, user_type),
    retry: false,
    enabled: !!token && enabled,
    staleTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
  });

  const deleteUserMutation = useMutation({
    mutationFn: (id: number) => AdminUsersService.deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const addUserMutation = useMutation({
    mutationFn: (userData: CreateNewUserInput) => AdminUsersService.createUser(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const { itemsArray, totalItems } = useMemo(() => {
    return unpackUsersResponse(usersData.data);
  }, [usersData.data]);

  const na = t("common.na");
  const recently = t("users.recently");
  const users = useMemo(
    () => itemsArray.map((user) => mapUser(user, { na, recently })),
    [itemsArray, na, recently],
  );

  return {
    usersData,
    users,
    totalUsers: totalItems,
    deleteUserMutation,
    addUserMutation,
  };
}