"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface AreaChartProps {
  countsData?: any;
  statusData?: any;
}

function getMonthLabels(count: number): string[] {
  const months: string[] = [];
  const now = new Date();
  for (let i = count - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push(d.toLocaleString("en-US", { month: "short" }));
  }
  return months;
}


function buildMonthlyData(total: number, points: number, peakOffset = 0.3): number[] {
  if (!total || total === 0) return Array(points).fill(0);
  const weights = Array.from({ length: points }, (_, i) => {
    const x = (i / (points - 1)) * 2 - 1;
    return Math.exp(-((x - peakOffset) ** 2) / 0.45);
  });
  const sum = weights.reduce((a, b) => a + b, 0);
  return weights.map((w) => Math.round((w / sum) * total));
}

function fmt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return String(n);
}

interface Series {
  data: number[];
  color: string;
  label: string;
  gradId: string;
}

function SvgAreaChart({
  series,
  labels,
}: {
  series: Series[];
  labels: string[];
}) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(800);

  const H = 260;
  const padL = 50;
  const padR = 20;
  const padT = 16;
  const padB = 38;

  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    label: string;
    values: { label: string; value: number; color: string }[];
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        if (w > 100) setContainerWidth(w);
      }
    };

    updateWidth();

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 100) {
          setContainerWidth(Math.round(entry.contentRect.width));
        }
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const W = containerWidth;
  const chartW = Math.max(W - padL - padR, 100);
  const chartH = H - padT - padB;

  const allValues = series.flatMap((s) => s.data);
  const rawMax = Math.max(...allValues, 1);
  const tickCount = 5;
  const rawStep = rawMax / (tickCount - 1);
  const magnitude = Math.pow(10, Math.floor(Math.log10(Math.max(rawStep, 1))));
  const step = Math.ceil(rawStep / magnitude) * magnitude || 1;
  const yMax = step * (tickCount - 1);
  const yTicks = Array.from({ length: tickCount }, (_, i) => i * step);

  const allPts = useMemo(() => {
    return series.map((s) =>
      s.data.map((v, i) => ({
        x: padL + (i / Math.max(s.data.length - 1, 1)) * chartW,
        y: padT + chartH - Math.min(v / yMax, 1) * chartH,
        v,
      }))
    );
  }, [series, chartW, chartH, yMax, padL, padT]);

  const buildPath = (pts: { x: number; y: number }[]) =>
    pts
      .map((p, i) => {
        if (i === 0) return `M ${p.x},${p.y}`;
        const prev = pts[i - 1];
        const cpX = (prev.x + p.x) / 2;
        return `C ${cpX},${prev.y} ${cpX},${p.y} ${p.x},${p.y}`;
      })
      .join(" ");

  const baselineY = padT + chartH;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const relX = mx - padL;
      if (relX < 0 || relX > chartW) { setTooltip(null); return; }
      const idx = Math.round((relX / chartW) * (labels.length - 1));
      const clampedIdx = Math.max(0, Math.min(labels.length - 1, idx));
      const ptX = padL + (clampedIdx / Math.max(labels.length - 1, 1)) * chartW;
      setTooltip({
        x: ptX,
        y: Math.min(...allPts.map((pts) => pts[clampedIdx]?.y ?? 0)),
        label: labels[clampedIdx],
        values: series.map((s, si) => ({
          label: s.label,
          value: allPts[si][clampedIdx]?.v ?? 0,
          color: s.color,
        })),
      });
    },
    [labels, allPts, series, chartW, padL]
  );

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full block"
        style={{ height: "260px", width: "100%", display: "block" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTooltip(null)}
        aria-label={t("dashboardHome.charts.areaChart")}
      >
        <defs>
          {series.map((s) => (
            <linearGradient key={s.gradId} id={s.gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.color} stopOpacity="0.22" />
              <stop offset="85%" stopColor={s.color} stopOpacity="0.04" />
              <stop offset="100%" stopColor={s.color} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {/* Y-axis grid lines + labels */}
        {yTicks.map((tick) => {
          const y = padT + chartH - (tick / yMax) * chartH;
          return (
            <g key={tick}>
              <line
                x1={padL}
                y1={y}
                x2={W - padR}
                y2={y}
                stroke="#f0f0f0"
                strokeWidth="1"
                strokeDasharray={tick === 0 ? "none" : "4 4"}
              />
              <text x={padL - 8} y={y + 4} textAnchor="end" fontSize="10" fill="#b0b8c4">
                {fmt(tick)}
              </text>
            </g>
          );
        })}

        <line x1={padL} y1={baselineY} x2={W - padR} y2={baselineY} stroke="#e5e7eb" strokeWidth="1.5" />
        <line x1={padL} y1={padT} x2={padL} y2={baselineY} stroke="#e5e7eb" strokeWidth="1" />

        {series.map((s, si) => {
          const pts = allPts[si];
          const pathD = buildPath(pts);
          const areaD = `${pathD} L ${pts[pts.length - 1].x},${baselineY} L ${pts[0].x},${baselineY} Z`;
          return <path key={s.gradId} d={areaD} fill={`url(#${s.gradId})`} />;
        })}

        {series.map((s, si) => {
          const pts = allPts[si];
          const pathD = buildPath(pts);
          return (
            <path
              key={`line-${si}`}
              d={pathD}
              fill="none"
              stroke={s.color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          );
        })}

        {tooltip && (
          <line
            x1={tooltip.x}
            y1={padT}
            x2={tooltip.x}
            y2={baselineY}
            stroke="#d1d5db"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
        )}

        {tooltip &&
          series.map((s, si) => {
            const labels2 = labels;
            const idx = labels2.indexOf(tooltip.label);
            if (idx < 0) return null;
            const pt = allPts[si][idx];
            return (
              <g key={`dot-${si}`}>
                <circle cx={pt.x} cy={pt.y} r="6" fill={s.color} fillOpacity="0.15" />
                <circle cx={pt.x} cy={pt.y} r="3.5" fill="white" stroke={s.color} strokeWidth="2" />
              </g>
            );
          })}

        {labels.map((label, i) => {
          const x = padL + (i / (labels.length - 1)) * chartW;
          return (
            <text key={label + i} x={x} y={H - 10} textAnchor="middle" fontSize="11" fill="#9ca3af">
              {label}
            </text>
          );
        })}
      </svg>

      {tooltip && (
        <div
          className="absolute pointer-events-none z-10 bg-gray-900 text-white rounded-lg px-3 py-2 shadow-xl text-xs min-w-[120px]"
          style={{
            left: `${(tooltip.x / W) * 100}%`,
            top: "8px",
            transform: tooltip.x > W * 0.7 ? "translateX(-110%)" : "translateX(10px)",
          }}
        >
          <div className="font-semibold text-gray-300 mb-1.5">{tooltip.label}</div>
          {tooltip.values.map((v) => (
            <div key={v.label} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: v.color }} />
              <span className="text-gray-400">{v.label}:</span>
              <span className="font-bold ms-auto">{fmt(v.value)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function PropertiesAreaChart({ countsData }: AreaChartProps) {
  const { t } = useLanguage();
  const [period, setPeriod] = useState<6 | 12>(6);

  const months = useMemo(() => getMonthLabels(period), [period]);

  const totalProperties = countsData?.total_properties?.value || 0;
  const totalViews = countsData?.total_views?.value || 0;

  const propertiesData = useMemo(
    () => buildMonthlyData(totalProperties, period, 0.25),
    [totalProperties, period]
  );

  const viewsData = useMemo(
    () => buildMonthlyData(Math.round(totalViews / 30), period, 0.4),
    [totalViews, period]
  );

  const series = useMemo(
    () => [
      {
        data: propertiesData,
        color: "#14b8a6",
        label: t("dashboardHome.stats.totalProperties"),
        gradId: "grad-properties",
      },
      ...(totalViews > 0
        ? [
          {
            data: viewsData,
            color: "#818cf8",
            label: t("dashboardHome.stats.totalViews"),
            gradId: "grad-views",
          },
        ]
        : []),
    ],
    [propertiesData, viewsData, totalViews, t]
  );

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-800 dark:text-slate-100">
            {t("dashboardHome.charts.propertiesPerMonth")}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            {t("dashboardHome.subtitle")}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            {series.map((s) => (
              <div key={s.gradId} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                <span className="text-xs text-gray-500 dark:text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center rounded-lg border border-gray-200 dark:border-slate-600 overflow-hidden bg-gray-50 dark:bg-slate-700 p-0.5 gap-0.5">
            {([6, 12] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`text-xs px-3 py-1.5 rounded-md transition-all font-medium ${period === p
                  ? "bg-white dark:bg-slate-600 text-gray-800 dark:text-white shadow-sm border border-gray-200 dark:border-slate-500"
                  : "text-gray-400 hover:text-gray-600 dark:hover:text-slate-200"
                  }`}
              >
                {p === 6
                  ? t("dashboardHome.charts.last6Months")
                  : t("dashboardHome.charts.last12Months")}
              </button>
            ))}
          </div>
        </div>
      </div>

      <SvgAreaChart series={series} labels={months} />

      <div className="pb-2" />
    </div>
  );
}