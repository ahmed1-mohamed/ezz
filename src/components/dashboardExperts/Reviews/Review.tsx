'use client';

import { useToken } from "@/contexts/SessionProviderWrapper";
import { useReview } from "@/hooks/dashboardExpert/useReview";
import ReviewCard, { SkeletonReview } from "./ReviewCard";
import { useLanguage } from "@/contexts/LanguageContext";

interface ReviewsProps {
    limit?: number;
    cardClassName?: string;
    reviewsData?: any[];
    isLoading?: boolean;
    isError?: boolean;
}

export default function Reviews({ limit, cardClassName, reviewsData, isLoading: externalIsLoading, isError: externalIsError }: ReviewsProps) {
    const { t } = useLanguage();
    const { expertId } = useToken();
    const hasExternalData = reviewsData !== undefined;
    
    const { data, isLoading: queryIsLoading, isError: queryIsError } = useReview(expertId, !hasExternalData);

    const isLoading = externalIsLoading !== undefined ? externalIsLoading : queryIsLoading;
    const isError = externalIsError !== undefined ? externalIsError : queryIsError;

    const sourceData = hasExternalData ? reviewsData : (data?.data?.data ?? []);
    const reviews = sourceData?.slice(0, limit) || [];

    return (
        <div className="flex flex-col gap-4">
            {isLoading && (
                <>
                    <SkeletonReview />
                    <SkeletonReview />
                    <SkeletonReview />
                </>
            )}

            {isError && (
                <p className="text-center text-sm text-red-400 py-6">
                    {t("experts.common.failedToLoad")}
                </p>
            )}

            {!isLoading && !isError && reviews.length === 0 && (
                <p className="text-center text-sm text-gray-400 py-8">
                    {t("experts.reviews.noReviews")}
                </p>
            )}

            {!isLoading && !isError && reviews.map((review: any) => (
                <ReviewCard
                    key={review.review_id}
                    review={review}
                    className={cardClassName}
                />
            ))}
        </div>
    );
}