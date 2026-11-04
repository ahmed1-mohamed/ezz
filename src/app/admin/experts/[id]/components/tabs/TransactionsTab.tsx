"use client";

import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

interface TransactionsTabProps {
  loadingTransactions: boolean;
  transactionsData: any;
  expert: any;
  t: (key: string) => string;
  formatDate: (date: string) => string;
}

export function TransactionsTab({
  loadingTransactions,
  transactionsData,
  expert,
  t,
  formatDate,
}: TransactionsTabProps) {
  return (
    <div className="space-y-4">
      {loadingTransactions ? (
        <div className="flex items-center justify-center py-12">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-e-transparent"></div>
        </div>
      ) : transactionsData?.data && transactionsData.data.length > 0 ? (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-gray-900">
                {expert?.consultions || 0}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("experts.details.totalConsultations")}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-gray-900">
                ${((expert?.rate_per_30min_cents || 0) / 100).toFixed(2)}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("experts.details.ratePer30Min")}
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    {t("experts.details.transactionId")}
                  </th>
                  <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    {t("experts.details.name")}
                  </th>
                  <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    {t("experts.details.package")}
                  </th>
                  <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    {t("experts.columns.actions")}
                  </th>
                  <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    {t("experts.details.amount")}
                  </th>
                  <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    {t("experts.columns.status")}
                  </th>
                  <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    {t("experts.details.date")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {transactionsData.data.map((transaction: any, index: number) => (
                  <tr key={index}>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      #{transaction.tx_id}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {transaction.client_name || t("experts.table.na")}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {transaction.package_name || t("experts.table.na")}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {transaction.action?.replace(/_/g, " ") || t("experts.table.na")}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {transaction.amount_cents
                        ? `$${(transaction.amount_cents / 100).toFixed(2)}`
                        : transaction.minutes
                        ? `${transaction.minutes} ${t("experts.details.minAbbr")}`
                        : "-"}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        className={
                          transaction.status === "confirmed" ||
                          transaction.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : transaction.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : transaction.status === "ongoing"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {transaction.transaction_date
                        ? formatDate(transaction.transaction_date)
                        : t("experts.table.na")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <FileText className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t("experts.details.transactions")}
          </h3>
          <p className="text-sm text-gray-500 mb-6 text-center max-w-sm">
            {t("experts.details.noTransactions")}
          </p>
        </div>
      )}
    </div>
  );
}
