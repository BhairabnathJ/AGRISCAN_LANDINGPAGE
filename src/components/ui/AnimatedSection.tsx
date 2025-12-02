import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from '../../hooks';
import { fadeUpVariants, scaleInVariants } from '../../utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'fadeUp' | 'scaleIn';
  delay?: number;
  threshold?: number;
}

/**
 * Reusable component for animating sections on scroll
 */
export function AnimatedSection({
  children,
  className = '',
  variant = 'fadeUp',
  delay = 0,
  threshold = 0.1
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold, triggerOnce: true });

  const variants = variant === 'fadeUp' ? fadeUpVariants : scaleInVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
