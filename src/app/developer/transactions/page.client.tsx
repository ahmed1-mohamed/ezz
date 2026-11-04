"use client";

import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import {
  DollarSign,
  TrendingUp,
  Download,
  Filter,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchTransactions } from "@/data/api-client";
import { EmptyState } from "@/components/ui/empty-state";
import { useLanguage } from "@/contexts/LanguageContext";

interface Transaction {
  id: number;
  date: string;
  property: string;
  tenant: string | null;
  amount: number;
  type: string;
  status: string;
  description?: string;
}

interface ApiTransaction {
  id: number;
  created_at?: string;
  date?: string;
  property?: {
    name: string;
  };
  property_name?: string;
  tenant?: {
    name: string;
  };
  tenant_name?: string;
  amount: number | string;
  type?: string;
  status?: string;
  description?: string;
}

export default function TransactionsPage() {
  const { t } = useLanguage();
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  // Fetched once per token; previously a useEffect refetched on every session identity / language change.
  const { data, isLoading: loading, isError, error } = useQuery({
    queryKey: ["developerTransactions", token],
    queryFn: () => fetchTransactions(token!),
    enabled: !!token,
    retry: false,
  });

  const transactions: Transaction[] = (Array.isArray(data) ? data : []).map((tr: ApiTransaction) => ({
    id: tr.id,
    date: tr.created_at || tr.date || new Date().toISOString(),
    property: tr.property?.name || tr.property_name || t("transactions.unknownProperty"),
    tenant: tr.tenant?.name || tr.tenant_name || null,
    amount: Number(tr.amount) || 0,
    type: tr.type || "transaction",
    status: tr.status || "completed",
    description: tr.description,
  }));

  const totalIncome = transactions
    .filter((tr) => tr.amount > 0 && tr.status === "completed")
    .reduce((sum, tr) => sum + tr.amount, 0);

  const totalExpenses = transactions
    .filter((tr) => tr.amount < 0)
    .reduce((sum, tr) => sum + Math.abs(tr.amount), 0);

  const netIncome = totalIncome - totalExpenses;

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[400px] items-center justify-center flex-col gap-4">
        <EmptyState
          type="error"
          message={error instanceof Error ? error.message : t("transactions.failedToLoad")}
        />
        <Button variant="outline" onClick={() => window.location.reload()}>
          {t("transactions.tryAgain")}
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t("transactions.title")}</h1>
          <p className="text-muted-foreground">
            {t("transactions.subtitle")}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="me-2 h-4 w-4" />
            {t("transactions.filter")}
          </Button>
          <Button>
            <Download className="me-2 h-4 w-4" />
            {t("transactions.export")}
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">{t("transactions.totalIncome")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                ${totalIncome.toLocaleString()}
              </p>
              <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {t("transactions.fromRentPayments")}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              {t("transactions.totalExpenses")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold text-red-600 dark:text-red-400">
                ${totalExpenses.toLocaleString()}
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {t("transactions.maintenanceRepairs")}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">{t("transactions.netIncome")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold text-primary">
                ${netIncome.toLocaleString()}
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{t("transactions.thisMonth")}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("transactions.recentTransactions")}</CardTitle>
          <CardDescription>
            {t("transactions.recentTransactionsDesc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                {t("transactions.noTransactions")}
              </div>
            ) : (
              transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2 rounded-lg ${transaction.amount > 0
                        ? "bg-green-500/10"
                        : "bg-red-500/10"
                        }`}
                    >
                      <DollarSign
                        className={`h-5 w-5 ${transaction.amount > 0
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                          }`}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{transaction.property}</p>
                        <Badge
                          variant={
                            transaction.status === "completed"
                              ? "success"
                              : "warning"
                          }
                        >
                          {transaction.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {transaction.tenant ||
                          transaction.description ||
                          transaction.type}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {(() => {
                          try {
                            const d = new Date(transaction.date);
                            return isNaN(d.getTime()) ? "" : d.toLocaleDateString();
                          } catch {
                            return "";
                          }
                        })()}
                      </p>
                    </div>
                  </div>
                  <div className="text-end">
                    <p
                      className={`text-lg font-semibold ${transaction.amount > 0
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                        }`}
                    >
                      {transaction.amount > 0 ? "+" : ""}$
                      {Math.abs(transaction.amount).toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground capitalize">
                      {transaction.type}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}