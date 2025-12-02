import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from '../../hooks';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  threshold?: number;
  duration?: number;
}

/**
 * Generic fade-in animation component with directional options
 */
export function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.1,
  duration = 0.6
}: FadeInProps) {
  const { ref, isInView } = useInView({ threshold, triggerOnce: true });

  const directionOffset = 30;
  const directions = {
    up: { y: directionOffset },
    down: { y: -directionOffset },
    left: { x: directionOffset },
    right: { x: -directionOffset },
    none: {}
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0
            }
          : {
              opacity: 0,
              ...directions[direction]
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.4, 0.0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
