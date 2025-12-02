import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from '../../hooks';
import { createStaggerVariants } from '../../utils';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  threshold?: number;
}

/**
 * Container that staggers the animation of its children
 */
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  delayChildren = 0,
  threshold = 0.1
}: StaggerContainerProps) {
  const { ref, isInView } = useInView({ threshold, triggerOnce: true });
  const variants = createStaggerVariants(staggerDelay, delayChildren);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
