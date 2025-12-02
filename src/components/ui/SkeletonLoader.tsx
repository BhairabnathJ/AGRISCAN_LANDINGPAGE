import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

/**
 * Skeleton loader component for loading states
 */
export function SkeletonLoader({
  width = 'w-full',
  height = 'h-4',
  className = '',
  variant = 'rectangular'
}: SkeletonLoaderProps) {
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  };

  return (
    <motion.div
      className={`${width} ${height} ${variantClasses[variant]} bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 ${className}`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{
        backgroundSize: '200% 100%'
      }}
      role="status"
      aria-label="Loading..."
    />
  );
}

/**
 * Card skeleton for loading states
 */
export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`p-6 bg-white rounded-2xl shadow-soft ${className}`}>
      <SkeletonLoader variant="circular" width="w-16" height="h-16" className="mb-4" />
      <SkeletonLoader width="w-3/4" height="h-6" className="mb-3" />
      <SkeletonLoader width="w-full" height="h-4" className="mb-2" />
      <SkeletonLoader width="w-5/6" height="h-4" />
    </div>
  );
}
