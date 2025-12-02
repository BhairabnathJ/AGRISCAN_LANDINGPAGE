import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { hoverLiftVariants } from '../../utils';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  enableHover?: boolean;
}

/**
 * Card component with premium hover lift effect
 */
export function AnimatedCard({
  children,
  className = '',
  enableHover = true
}: AnimatedCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover={enableHover ? 'hover' : undefined}
      variants={hoverLiftVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
