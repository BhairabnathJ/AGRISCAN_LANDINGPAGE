import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  className?: string;
  variant?: 'primary' | 'sage' | 'earth';
  animated?: boolean;
}

/**
 * Animated gradient background component
 */
export function GradientBackground({
  className = '',
  variant = 'primary',
  animated = true
}: GradientBackgroundProps) {
  const gradients = {
    primary: 'bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700',
    sage: 'bg-gradient-to-br from-sage-200 via-sage-100 to-white',
    earth: 'bg-gradient-to-br from-earth-200 via-earth-100 to-white'
  };

  const gradientClass = gradients[variant];

  if (animated) {
    return (
      <motion.div
        className={`${gradientClass} bg-[length:200%_200%] ${className}`}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 8,
          ease: 'linear',
          repeat: Infinity
        }}
      />
    );
  }

  return <div className={`${gradientClass} ${className}`} />;
}
