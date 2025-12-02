import { useEffect, useState } from 'react';

interface UseAnimatedCounterOptions {
  start?: number;
  duration?: number;
  delay?: number;
  ease?: (t: number) => number;
}

/**
 * Hook to animate numbers from start to end value
 * Useful for stats and impact numbers
 */
export function useAnimatedCounter(
  end: number,
  shouldStart: boolean = false,
  options: UseAnimatedCounterOptions = {}
) {
  const {
    start = 0,
    duration = 2000,
    delay = 0,
    ease = (t: number) => t * (2 - t) // easeOutQuad
  } = options;

  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp + delay;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = ease(progress);

      const current = start + (end - start) * easedProgress;
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, start, duration, delay, shouldStart, ease]);

  return Math.round(count);
}

/**
 * Format large numbers with suffixes (K, M, B)
 */
export function formatNumber(num: number, decimals: number = 1): string {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(decimals) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(decimals) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(decimals) + 'K';
  }
  return num.toString();
}
