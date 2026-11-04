"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { fetchDashboardUsers } from "@/data/api/services/users.service";
import { MultiSelect, MultiSelectOption } from "@/components/ui/multi-select";
import { Loader2 } from "lucide-react";

interface UserMultiSelectProps {
  selectedIds: number[];
  onChange: (ids: number[]) => void;
  hasError?: boolean;
}

export function UserMultiSelect({ selectedIds, onChange, hasError }: UserMultiSelectProps) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboardUsers"],
    queryFn: () => fetchDashboardUsers(token!),
    enabled: !!token,
  });

  const users = data?.data || [];

  const options: MultiSelectOption[] = users.map((user: any) => {
    const id = user.id || user.user_id;
    const name = [user.first_name, user.last_name].filter(Boolean).join(" ") || user.name || user.email || `User ${id}`;
    return {
      value: Number(id),
      label: name,
    };
  });

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 p-3 text-sm text-gray-500 border rounded-lg bg-gray-50 dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
        <Loader2 className="h-4 w-4 animate-spin" />
        Loading users...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-sm text-red-500 p-3 border border-red-200 bg-red-50 rounded-lg">
        Failed to load users.
      </div>
    );
  }

  return (
    <MultiSelect
      options={options}
      selected={selectedIds}
      onChange={onChange}
      placeholder="Search and select users..."
      hasError={hasError}
      className="bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800"
    />
  );
}
