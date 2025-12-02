import { Variants } from 'framer-motion';

// Animation variants for common use cases
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

export const slideUpVariants: Variants = {
  hidden: {
    y: '100%'
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

// Stagger children animation
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Custom stagger with delay control
export const createStaggerVariants = (staggerDelay: number = 0.1, delayChildren: number = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren
    }
  }
});

// Blur to focus animation
export const blurToFocusVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

// Gradient animation for backgrounds
export const gradientVariants: Variants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 8,
      ease: 'linear',
      repeat: Infinity
    }
  }
};

// Counter animation helper
export const counterVariants = (delay: number = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay,
      duration: 0.5
    }
  }
});

// Premium hover lift effect
export const hoverLiftVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)'
  },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
    transition: {
      duration: 0.3,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

// Glow pulse animation
export const glowPulseVariants: Variants = {
  animate: {
    boxShadow: [
      '0 0 24px rgba(26, 77, 46, 0.15)',
      '0 0 48px rgba(26, 77, 46, 0.3)',
      '0 0 24px rgba(26, 77, 46, 0.15)'
    ],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity
    }
  }
};

// Rotate animation for icons
export const rotateVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

// Draw line animation
export const drawLineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: [0.4, 0.0, 0.2, 1] },
      opacity: { duration: 0.3 }
    }
  }
};
