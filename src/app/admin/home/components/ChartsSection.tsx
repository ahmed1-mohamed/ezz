"use client";

import { useLanguage } from "@/contexts/LanguageContext";

interface ChartsSectionProps {
  statusData?: any;
  chartData?: any;
  onPeriodChange?: (period: string) => void;
  currentPeriod?: string;
  countsData?: any;
}

// Pure SVG donut chart - no external deps
function DonutChart({
  segments,
  total,
  totalLabel,
}: {
  segments: { value: number; color: string; label: string }[];
  total: number;
  totalLabel?: string;
}) {
  const size = 180;
  const strokeWidth = 28;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let cumulativePercent = 0;
  const totalVal = segments.reduce((s, seg) => s + seg.value, 0) || 1;

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        {/* background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth={strokeWidth}
        />
        {segments.map((seg, i) => {
          const pct = seg.value / totalVal;
          const dash = pct * circumference;
          const offset = circumference - cumulativePercent * circumference;
          cumulativePercent += pct;
          if (seg.value === 0) return null;
          return (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={offset}
              strokeLinecap="butt"
              className="transition-all duration-700"
            />
          );
        })}
      </svg>
      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        {totalLabel && (
          <span className="text-xs text-gray-500 font-medium">{totalLabel}</span>
        )}
        <span className="text-2xl font-bold text-gray-800">{total.toLocaleString()}</span>
      </div>
    </div>
  );
}

// Period toggle pill buttons
function PeriodFilter({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <div className="flex items-center rounded-lg border border-gray-200 overflow-hidden bg-gray-50 p-0.5 gap-0.5">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`text-xs px-2.5 py-1 rounded-md transition-all font-medium ${
            value === opt.value
              ? "bg-white text-gray-800 shadow-sm border border-gray-200"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export function BookingsStatusChart({
  statusData,
  countsData,
  onPeriodChange,
  currentPeriod = "all",
  className = "",
}: ChartsSectionProps & { className?: string }) {
  const { t } = useLanguage();

  const periodOptions = [
    { label: t("dashboardHome.dateRanges.allTime"), value: "all" },
    { label: t("dashboardHome.dateRanges.last30Days"), value: "last30" },
    { label: t("dashboardHome.dateRanges.last7Days"), value: "last7" },
  ];

  // ── Bookings by Status donut ──────────────────────────────────────────────
  // Total always = total_bookings.value from API
  const bookingTotal = countsData?.total_bookings?.value ?? 0;

  // Status breakdown from statusData, fallback to proportional splits
  const openCount = statusData?.data?.pending ?? statusData?.data?.open ?? 0;
  const completedCount = statusData?.data?.completed ?? 0;
  const cancelledCount = statusData?.data?.cancelled ?? 0;
  const inProgressCount = statusData?.data?.in_progress ?? 0;

  // If no statusData breakdown, show the full total as a single "Open" segment
  const hasStatusBreakdown = openCount + completedCount + cancelledCount + inProgressCount > 0;

  const bookingSegments = hasStatusBreakdown
    ? [
        { value: openCount, color: "#E8922A", label: t("dashboardHome.charts.open") },
        { value: completedCount, color: "#14b8a6", label: t("dashboardHome.charts.completed") },
        { value: inProgressCount, color: "#60a5fa", label: t("dashboardHome.charts.inProgress") },
        { value: cancelledCount, color: "#f87171", label: t("dashboardHome.charts.rejected") },
      ].filter((s) => s.value > 0)
    : [{ value: bookingTotal, color: "#E8922A", label: t("dashboardHome.charts.open") }];

  const bookingDisplay = bookingSegments.length > 0
    ? bookingSegments
    : [{ value: 1, color: "#E8922A", label: t("dashboardHome.charts.open") }];

  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-5 h-full flex flex-col justify-between ${className}`}>
      <div className="flex items-start justify-between gap-2 mb-4">
        <h3 className="text-sm font-semibold text-gray-800">
          {t("dashboardHome.charts.bookingsByStatus")}
        </h3>
        <PeriodFilter
          value={currentPeriod}
          onChange={onPeriodChange ?? (() => {})}
          options={periodOptions}
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-4 py-2">
        <DonutChart
          segments={bookingDisplay}
          total={bookingTotal}
          totalLabel={t("dashboardHome.charts.total")}
        />
        <div className="flex flex-wrap items-center justify-center gap-3">
          {bookingDisplay.map((seg, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span
                className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: seg.color }}
              />
              <span className="text-xs text-gray-600">{seg.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PropertiesStatusChart({
  statusData,
  countsData,
  onPeriodChange,
  currentPeriod = "all",
  className = "",
}: ChartsSectionProps & { className?: string }) {
  const { t } = useLanguage();

  const periodOptions = [
    { label: t("dashboardHome.dateRanges.allTime"), value: "all" },
    { label: t("dashboardHome.dateRanges.last30Days"), value: "last30" },
    { label: t("dashboardHome.dateRanges.last7Days"), value: "last7" },
  ];

  // ── Properties by Status donut ────────────────────────────────────────────
  // Total always = total_properties.value from API
  const propTotal = countsData?.total_properties?.value ?? 0;

  // Status breakdown from statusData only
  const availableCount = statusData?.data?.available ?? 0;
  const reservedCount = statusData?.data?.reserved ?? 0;
  const soldCount = statusData?.data?.sold ?? 0;

  const hasPropBreakdown = availableCount + reservedCount + soldCount > 0;

  const propSegments = hasPropBreakdown
    ? [
        { value: availableCount, color: "#14b8a6", label: t("dashboardHome.charts.available") },
        { value: reservedCount, color: "#E8922A", label: t("dashboardHome.charts.reserved") },
        { value: soldCount, color: "#1e3a5f", label: t("dashboardHome.charts.sold") },
      ].filter((s) => s.value > 0)
    : [{ value: propTotal, color: "#14b8a6", label: t("dashboardHome.charts.available") }];

  const propDisplay = propSegments.length > 0
    ? propSegments
    : [{ value: 1, color: "#14b8a6", label: t("dashboardHome.charts.available") }];

  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-5 h-full flex flex-col justify-between ${className}`}>
      <div className="flex items-start justify-between gap-2 mb-4">
        <h3 className="text-sm font-semibold text-gray-800">
          {t("dashboardHome.charts.propertiesByStatus")}
        </h3>
        <PeriodFilter
          value={currentPeriod}
          onChange={onPeriodChange ?? (() => {})}
          options={periodOptions}
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-4 py-2">
        <DonutChart
          segments={propDisplay}
          total={propTotal}
          totalLabel={t("dashboardHome.charts.total")}
        />
        <div className="flex flex-wrap items-center justify-center gap-3">
          {propDisplay.map((seg, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span
                className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: seg.color }}
              />
              <span className="text-xs text-gray-600">{seg.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ChartsSection({
  statusData,
  countsData,
  onPeriodChange,
  currentPeriod = "all",
}: ChartsSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <BookingsStatusChart
        statusData={statusData}
        countsData={countsData}
        onPeriodChange={onPeriodChange}
        currentPeriod={currentPeriod}
      />
      <PropertiesStatusChart
        statusData={statusData}
        countsData={countsData}
        onPeriodChange={onPeriodChange}
        currentPeriod={currentPeriod}
      />
    </div>
  );
}