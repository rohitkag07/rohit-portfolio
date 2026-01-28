import { useEffect, useState } from 'react';

interface UseAnimatedCounterOptions {
    start?: number;
    end: number;
    duration?: number;
    isActive?: boolean;
}

/**
 * Custom hook for animating numbers from start to end value
 * @param options - Configuration for the counter animation
 * @returns Current animated value
 */
export function useAnimatedCounter(options: UseAnimatedCounterOptions) {
    const {
        start = 0,
        end,
        duration = 2000,
        isActive = true
    } = options;

    const [count, setCount] = useState(start);

    useEffect(() => {
        if (!isActive) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation (easeOutQuart)
            const easeOut = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(start + (end - start) * easeOut);

            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [start, end, duration, isActive]);

    return count;
}
