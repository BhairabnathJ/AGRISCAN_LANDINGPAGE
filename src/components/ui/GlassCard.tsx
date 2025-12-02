import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { hoverLiftVariants } from '../../utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  enableHover?: boolean;
  intensity?: 'light' | 'medium' | 'strong';
}

/**
 * Glassmorphism card component with backdrop blur
 */
export function GlassCard({
  children,
  className = '',
  enableHover = true,
  intensity = 'medium'
}: GlassCardProps) {
  const intensityClasses = {
    light: 'bg-white/40 backdrop-blur-sm',
    medium: 'bg-white/60 backdrop-blur-md',
    strong: 'bg-white/80 backdrop-blur-lg'
  };

  return (
    <motion.div
      initial="rest"
      whileHover={enableHover ? 'hover' : undefined}
      variants={hoverLiftVariants}
      className={`${intensityClasses[intensity]} rounded-2xl border border-white/20 ${className}`}
    >
      {children}
    </motion.div>
  );
}
