"use client";

import React from "react";
import { MessageSquare, Star, Briefcase, User, Package, Clock, Tag, CheckCircle2, Wallet, CalendarDays, AlertTriangle } from "lucide-react";

interface OverviewTabProps {
  expert: any;
  t: (key: string, values?: Record<string, any>) => string;
  formatDate: (date: string) => string;
  getStatusBadge: (status: string) => React.ReactNode;
}

export function OverviewTab({
  expert,
  t,
  formatDate,
  getStatusBadge,
}: OverviewTabProps) {
  const ratingAvg = typeof expert.rating_avg === "number" ? expert.rating_avg : parseFloat(expert.rating_avg || "0");
  const totalBookings = expert.total_bookings ?? expert.consultions ?? 0;
  const respondedBookings = expert.responded_bookings ?? 0;
  const yearsExp = expert.years_experience ?? 0;
  const currency = expert.currency || "AED";
  const startingPrice = expert.starting_from ?? 0;

  const starDistList: { star: number; count: number }[] =
    Array.isArray(expert.stars_distribution) && expert.stars_distribution.length > 0
      ? expert.stars_distribution
      : [5, 4, 3, 2, 1].map((s) => ({ star: s, count: 0 }));

  const totalReviewsInDist = starDistList.reduce(
    (sum, item) => sum + (Number(item.count) || 0),
    0,
  );

  return (
    <div className="space-y-6">
      {/* Cover Photo */}
      {expert.cover_photo && (
        <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden relative border border-gray-200">
          <img 
            src={expert.cover_photo} 
            alt={t("experts.details.coverAlt")}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Bio / About Section */}
      {expert.bio && (
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-5">
          <div className="flex items-center gap-2 mb-2">
            <User className="h-4 w-4 text-teal-600" />
            <h4 className="text-sm font-semibold text-gray-900">
              {t("experts.details.bio")}
            </h4>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {expert.bio}
          </p>
        </div>
      )}

      {/* Profile Key Stats */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-3">
          {t("experts.details.profileSummary")}
        </h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="h-4 w-4 text-teal-600" />
              <span className="text-xs text-gray-600 font-medium">
                {t("experts.details.totalConsultations")}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {totalBookings}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {respondedBookings} {t("experts.details.responded")}
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-4 w-4 text-teal-600" />
              <span className="text-xs text-gray-600 font-medium">
                {t("experts.details.avgRating")}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {ratingAvg.toFixed(1)}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {expert.rating_count || 0} {t("experts.details.reviews")}
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="h-4 w-4 text-teal-600" />
              <span className="text-xs text-gray-600 font-medium">
                {t("experts.details.experience")}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {yearsExp} <span className="text-sm font-normal text-gray-600">{t("experts.details.years")}</span>
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {expert.categories?.length || 0} {t("experts.details.specializationsCount")}
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Tag className="h-4 w-4 text-teal-600" />
              <span className="text-xs text-gray-600 font-medium">
                {t("experts.details.startingFrom")}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {startingPrice} <span className="text-sm font-normal text-gray-600">{currency}</span>
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {expert.packages?.length || 0} {t("experts.details.packages")}
            </p>
          </div>
        </div>
      </div>

      {/* Consultation Packages Section */}
      {Array.isArray(expert.packages) && expert.packages.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              <Package className="h-4 w-4 text-teal-600" />
              {t("experts.details.packages")} ({expert.packages.length})
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {expert.packages.map((pkg: any, idx: number) => {
              const pkgName = pkg.package_name || pkg.name || t("experts.details.packageNumber", { number: idx + 1 });
              const pkgMinutes = pkg.minutes || 30;
              const pkgPrice = pkg.price_cents ?? pkg.price ?? 0;
              const pkgCurrency = pkg.currency || currency;

              return (
                <div
                  key={pkg.package_id || idx}
                  className="p-4 bg-white border border-gray-200 rounded-lg hover:border-teal-400 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                        <h5 className="font-semibold text-gray-900 text-sm truncate">
                          {pkgName}
                        </h5>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                        <Clock className="h-3.5 w-3.5 text-gray-400" />
                        <span>{pkgMinutes} {t("common.minutes")}</span>
                      </div>
                    </div>
                    <div className="text-end flex-shrink-0">
                      <span className="text-sm font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-md inline-block">
                        {pkgPrice} {pkgCurrency}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Availability Section */}
      {(expert.availability_rules?.length > 0 || expert.availability_exceptions?.length > 0) && (
        <div>
          <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-2 mb-3">
            <CalendarDays className="h-4 w-4 text-teal-600" />
            {t("experts.details.availability")}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expert.availability_rules?.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {t("experts.details.regularRules")}
                </h5>
                <div className="space-y-2">
                  {expert.availability_rules.map((rule: any) => (
                    <div key={rule.rule_id} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700 font-medium">
                        {t(`common.days.${rule.dow_bitmask}`)}
                      </span>
                      <span className="text-gray-500">
                        {rule.time_start} - {rule.time_end}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {expert.availability_exceptions?.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  {t("experts.details.exceptions")}
                </h5>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {expert.availability_exceptions.map((exc: any) => (
                    <div key={exc.exception_id} className="flex flex-col text-sm border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">
                          {formatDate(exc.start_date)}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${exc.available ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                          {exc.available ? t("experts.details.available") : t("experts.details.unavailable")}
                        </span>
                      </div>
                      <span className="text-gray-500 text-xs">
                        {exc.start_date.split(" ")[1]} - {exc.end_date.split(" ")[1]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Rating Overview with Real Stars Distribution */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-3">
          {t("experts.details.ratingOverview")}
        </h4>
        <div className="flex flex-col sm:flex-row items-center gap-6 p-5 bg-gray-50 rounded-lg border border-gray-100">
          <div className="text-center sm:border-e sm:border-gray-200 sm:pe-6 min-w-[120px]">
            <p className="text-4xl font-bold text-gray-900">
              {ratingAvg.toFixed(1)}
            </p>
            <div className="flex items-center gap-0.5 mt-1 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= Math.round(ratingAvg)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {expert.rating_count === 1
                ? t("experts.details.reviewsCount", { count: 1 })
                : t("experts.details.reviewsCountPlural", { count: expert.rating_count || 0 })}
            </p>
          </div>

          <div className="flex-1 w-full space-y-2">
            {[5, 4, 3, 2, 1].map((starNum) => {
              const distItem = starDistList.find((d) => Number(d.star) === starNum);
              const count = distItem ? Number(distItem.count) || 0 : 0;
              const percentage =
                totalReviewsInDist > 0
                  ? Math.round((count / totalReviewsInDist) * 100)
                  : 0;

              return (
                <div key={starNum} className="flex items-center gap-2">
                  <span className="text-xs text-gray-600 font-medium w-3">
                    {starNum}
                  </span>
                  <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                  <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-10 text-end">
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Account Information */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-3">
          {t("experts.details.accountInfo")}
        </h4>
        <div className="space-y-3 bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">
              {t("experts.details.expertId")}
            </span>
            <span className="text-sm text-gray-900 font-medium">
              #{expert.expert_id}
            </span>
          </div>
          {expert.user_id && (
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">
                {t("experts.details.userId")}
              </span>
              <span className="text-sm text-gray-900 font-medium">
                #{expert.user_id}
              </span>
            </div>
          )}
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">
              {t("experts.details.currency")}
            </span>
            <span className="text-sm text-gray-900 font-medium">
              {currency}
            </span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">
              {t("experts.details.startingFrom")}
            </span>
            <span className="text-sm text-teal-700 font-semibold">
              {startingPrice} {currency}
            </span>
          </div>
          {expert.rate_per_30min_cents ? (
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">
                {t("experts.details.ratePer30Min")}
              </span>
              <span className="text-sm text-gray-900 font-medium">
                {expert.rate_per_30min_cents} {currency}
              </span>
            </div>
          ) : null}
          {expert.created_at && (
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">
                {t("experts.details.memberSince")}
              </span>
              <span className="text-sm text-gray-900 font-medium">
                {formatDate(expert.created_at)}
              </span>
            </div>
          )}
          {expert.wallet && (
            <>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  <Wallet className="h-3.5 w-3.5" /> {t("experts.details.walletBalance")}
                </span>
                <span className="text-sm text-gray-900 font-medium">
                  {(expert.wallet.balance_cents / 100).toFixed(2)} {currency}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">
                  {t("experts.details.pendingBalance")}
                </span>
                <span className="text-sm text-gray-900 font-medium">
                  {(expert.wallet.pending_cents / 100).toFixed(2)} {currency}
                </span>
              </div>
            </>
          )}
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-gray-600">
              {t("experts.columns.status")}
            </span>
            {getStatusBadge(expert.status)}
          </div>
        </div>
      </div>
    </div>
  );
}
