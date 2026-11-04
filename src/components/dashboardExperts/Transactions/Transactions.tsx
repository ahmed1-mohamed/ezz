"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useTransactions } from "@/hooks/dashboardExpert/useTransactions";
import { Transaction, TransactionsResponse, TransactionStatus } from "@/types/expertDashboard/transctions";
import { useDebounce } from "@/hooks/useDebounce";
import { useLanguage } from "@/contexts/LanguageContext";

function formatDate(iso: string, lang: string) {
    const d = new Date(iso);
    const locale = lang === "ar" ? "ar-EG" : "en-US";
    return {
        date: d.toLocaleDateString(locale, { month: "numeric", day: "numeric", year: "numeric" }),
        time: d.toLocaleTimeString(locale, { hour: "numeric", minute: "2-digit", hour12: true }),
    };
}

function getInitials(name: string) {
    return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function SkeletonRow() {
    return (
        <TableRow>
            {[80, 160, 80, 100, 60, 140, 40].map((w, i) => (
                <TableCell key={i}>
                    <Skeleton className="h-4 rounded" style={{ width: w }} />
                </TableCell>
            ))}
        </TableRow>
    );
}

const PER_PAGE = 10;

export default function Transactions() {
    const { t, language } = useLanguage();
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState<TransactionStatus>("all");
    const [page, setPage] = useState(1);
    const debouncedSearch = useDebounce(search);

    useEffect(() => {
        setPage(1);
    }, [debouncedSearch]);

    const { data, isLoading, isError } = useTransactions({
        page,
        per_page: PER_PAGE,
        status: status === "all" ? undefined : status,
        search: debouncedSearch || undefined,
    });

    const transactions: Transaction[] = (data?.data as TransactionsResponse)?.data ?? [];

    return (
        <div className="space-y-6">
            <h2 className="text-[#15042B] text-xl font-semibold mb-5 flex items-center gap-2">
                {t("experts.transactions.title")}
                {(data?.data as TransactionsResponse)?.total > 0 && (
                    <span className="text-sm bg-purple-500 py-0.5 px-1.5 rounded-full text-white">
                        {(data?.data as TransactionsResponse).total}
                    </span>
                )}
            </h2>
            <div className="flex flex-wrap items-center gap-3">

                <div className="relative flex-1 min-w-[200px] max-w-xs">
                    <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder={t("experts.transactions.searchPlaceholder")}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="ps-9 bg-muted/40"
                    />
                </div>

                <Select
                    value={status}
                    onValueChange={(val) => {
                        setStatus(val as TransactionStatus | "all");
                        setPage(1);
                    }}
                >
                    <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder={t("experts.common.allStatus")} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">{t("experts.common.allStatus")}</SelectItem>
                        <SelectItem value="confirmed">{t("experts.common.status.confirmed")}</SelectItem>
                        <SelectItem value="pending">{t("experts.common.status.pending")}</SelectItem>
                        <SelectItem value="canceled">{t("experts.common.status.canceled")}</SelectItem>
                        <SelectItem value="ongoing">{t("experts.common.status.ongoing")}</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/30 hover:bg-muted/30">
                            <TableHead>{t("experts.transactions.table.txId")}</TableHead>
                            <TableHead>{t("experts.transactions.table.client")}</TableHead>
                            <TableHead>{t("experts.transactions.table.amount")}</TableHead>
                            <TableHead>{t("experts.transactions.table.dateTime")}</TableHead>
                            <TableHead>{t("experts.transactions.table.duration")}</TableHead>
                            <TableHead>{t("experts.transactions.table.sessionType")}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading &&
                            Array.from({ length: PER_PAGE }).map((_, i) => <SkeletonRow key={i} />)}

                        {isError && (
                            <TableRow>
                                <TableCell colSpan={7} className="h-32 text-center text-muted-foreground">
                                    {t("experts.common.failedToLoad")}
                                </TableCell>
                            </TableRow>
                        )}

                        {!isLoading && !isError && transactions.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={7} className="h-32 text-center text-muted-foreground">
                                    {t("experts.transactions.noTransactions")}
                                </TableCell>
                            </TableRow>
                        )}

                        {!isLoading &&
                            transactions.map((txn: Transaction) => {
                                const { date, time } = formatDate(txn.start_time, language);
                                const clientName = txn.client_name ?? "—";

                                return (
                                    <TableRow key={txn.tx_id}>

                                        <TableCell className="font-mono text-xs text-[#4A5565]">
                                            {txn.tx_id}
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex items-center gap-1.5">
                                                <Avatar className="w-6 h-6">
                                                    <AvatarFallback className="text-xs">
                                                        {getInitials(clientName)}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <span className="font-medium text-sm text-[#15042B]">{clientName}</span>
                                            </div>
                                        </TableCell>

                                        <TableCell className="text-sm text-[#4A5565]">
                                            {txn.amount_cents ?? "—"}
                                        </TableCell>

                                        <TableCell>
                                            <div className="text-sm leading-tight text-[#4A5565]">
                                                <p>{date}</p>
                                                <p className="text-xs">{time}</p>
                                            </div>
                                        </TableCell>

                                        <TableCell className="text-sm text-[#4A5565]">
                                            {txn.minutes ? `${txn.minutes} ${t("experts.common.minutes")}` : "—"}
                                        </TableCell>

                                        <TableCell className="text-sm text-[#4A5565] max-w-[180px] truncate">
                                            {txn.action ?? "—"}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
