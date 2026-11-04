"use client";

import { Star } from "lucide-react";

interface ReviewsTabProps {
  loadingReviews: boolean;
  reviewsData: any;
  expert: any;
  t: (key: string) => string;
  formatDate: (date: string) => string;
}

export function ReviewsTab({
  loadingReviews,
  reviewsData,
  expert,
  t,
  formatDate,
}: ReviewsTabProps) {
  return (
    <div className="space-y-4">
      {loadingReviews ? (
        <div className="flex items-center justify-center py-12">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-e-transparent"></div>
        </div>
      ) : reviewsData?.data && reviewsData.data.length > 0 ? (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-gray-900">
                {parseFloat(expert?.rating_avg || "0").toFixed(1)}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("experts.details.avgRating")}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-gray-900">
                {reviewsData.data.length}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("experts.details.totalReviews")}
              </p>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {reviewsData.data.map((review: any, index: number) => (
              <div key={index} className="py-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-semibold">
                      {review.customer?.first_name?.charAt(0) || "U"}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {review.customer?.first_name} {review.customer?.last_name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {formatDate(review.created_at)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                {review.comment && (
                  <p className="mt-3 text-sm text-gray-600">{review.comment}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <Star className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t("experts.details.reviews")}
          </h3>
          <p className="text-sm text-gray-500 mb-6 text-center max-w-sm">
            {t("experts.details.noReviews")}
          </p>
        </div>
      )}
    </div>
  );
}
