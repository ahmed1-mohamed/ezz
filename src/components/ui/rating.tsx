import React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

const ratingVariants = {
    default: {
        star: "text-gray-500",
        emptyStar: "text-gray-300",
    },
    yellow: {
        star: "text-yellow-500",
        emptyStar: "text-yellow-400",
    },
    deepyellow: {
        star: "text-yellow-600",
        emptyStar: "text-yellow-400",
    },
}

interface RatingsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    rating: number
    totalStars?: number
    size?: number
    fill?: boolean
    Icon?: React.ComponentType<{ size?: number; className?: string }>
    variant?: keyof typeof ratingVariants
    interactive?: boolean
    onChange?: (rating: number) => void
}

const Ratings = ({
    rating,
    totalStars = 1,
    size = 20,
    fill = true,
    Icon = Star,
    variant = "default",
    interactive = false,
    onChange,
    ...rest
}: RatingsProps) => {
    const fullStars = Math.floor(rating)

    const handleStarClick = (selectedRating: number) => {
        if (interactive && onChange) {
            if (selectedRating === rating) {
                onChange(Math.max(selectedRating, 1))
            } else {
                onChange(selectedRating)
            }
        }
    }

    const handleStarHover = (position: number) => {
        if (!interactive || !onChange) return

        onChange(Math.max(position, 0.5))
    }

    return (
        <div className={cn("flex items-center gap-2")} {...rest}>
            {[...Array(totalStars)].map((_, i) => {
                const starPosition = i + 1
                const isFilled = starPosition <= fullStars
                const isPartiallyFilled = !isFilled && starPosition === fullStars + 1 && rating % 1 > 0

                return (
                    <div
                        key={i}
                        className={cn(
                            "relative",
                            interactive && "cursor-pointer"
                        )}
                        onClick={interactive ? () => handleStarClick(starPosition) : undefined}
                        onMouseMove={interactive ? () => handleStarHover(starPosition) : undefined}
                    >
                        <Icon
                            size={size}
                            className={cn(
                                isFilled && fill ? "fill-current" : "fill-transparent",
                                isFilled ? ratingVariants[variant].star : ratingVariants[variant].emptyStar,
                                interactive && "transition-colors duration-100"
                            )}
                        />
                        {isPartiallyFilled && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    overflow: "hidden",
                                    width: `${(rating % 1) * 100}%`,
                                }}
                            >
                                <Icon
                                    size={size}
                                    className={cn("fill-current", ratingVariants[variant].star)}
                                />
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export { Ratings }