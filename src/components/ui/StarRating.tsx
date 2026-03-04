import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
    rating: number;
    maxRating?: number;
    className?: string;
}

// ⚡ Bolt: Extracted StarRating component to prevent inline [...Array(n)].map() which creates unnecessary arrays
// Memoized to prevent re-renders when parent components update
export const StarRating = React.memo(({ rating, maxRating = 5, className }: StarRatingProps) => {
    const stars = [];

    // ⚡ Bolt: Using a simple for loop instead of [...Array(n)] to avoid creating empty arrays
    for (let i = 0; i < maxRating; i++) {
        stars.push(
            <Star
                key={i}
                className={`w-4 h-4 ${className ? className : i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`}
            />
        );
    }

    return <>{stars}</>;
});

StarRating.displayName = 'StarRating';
