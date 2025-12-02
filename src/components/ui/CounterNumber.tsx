import { useInView } from '../../hooks/useInView';
import { useAnimatedCounter, formatNumber } from '../../hooks/useAnimatedCounter';

interface CounterNumberProps {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  formatLarge?: boolean;
}

/**
 * Animated counter component for stats and numbers
 */
export function CounterNumber({
  end,
  duration = 2000,
  delay = 0,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
  formatLarge = false
}: CounterNumberProps) {
  const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const count = useAnimatedCounter(end, isInView, { duration, delay });

  const displayValue = formatLarge
    ? formatNumber(count, decimals)
    : count.toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
