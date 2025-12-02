import { ArrowDown, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, GradientBackground } from './ui';

export default function Hero() {
  const scrollToBeta = () => {
    document.getElementById('beta-program')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sage-50 via-white to-sage-100">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 opacity-40">
        <GradientBackground
          variant="sage"
          animated={true}
          className="absolute inset-0"
        />
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a4d2e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-primary-400 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-sage-400 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            <FadeIn delay={0.1}>
              <div className="inline-block mb-8 px-5 py-2.5 bg-primary-500/10 text-primary-700 rounded-full text-sm font-semibold backdrop-blur-sm border border-primary-500/20">
                Developed by Unity Provisions
              </div>
            </FadeIn>

            {/* Animated headline */}
            <motion.h1
              className="mb-8"
              initial="hidden"
              animate="visible"
              variants={headlineVariants}
            >
              <motion.div variants={lineVariants} className="text-hero-mobile lg:text-hero-desktop font-extrabold text-gray-900 mb-2">
                Precision Agriculture
              </motion.div>
              <motion.div variants={lineVariants} className="text-hero-mobile lg:text-hero-desktop font-extrabold mb-2">
                for the{' '}
                <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  World's
                </span>
              </motion.div>
              <motion.div variants={lineVariants} className="text-hero-mobile lg:text-hero-desktop font-extrabold bg-gradient-to-r from-primary-600 via-primary-500 to-sage-600 bg-clip-text text-transparent">
                2.5 Billion Farmers
              </motion.div>
            </motion.h1>

            <FadeIn delay={0.6}>
              <p className="text-xl lg:text-2xl text-gray-700 mb-12 max-w-2xl leading-relaxed font-light">
                Affordable soil monitoring that works offline, survives harsh conditions,
                and helps farmers conserve water and increase yields—even in the world's most remote regions
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-5 mb-20">
                <motion.button
                  onClick={scrollToBeta}
                  className="group relative px-10 py-5 h-14 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-lg font-semibold rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-shadow duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Join Our Beta Program</span>
                </motion.button>

                <motion.button
                  onClick={scrollToHowItWorks}
                  className="px-10 py-5 h-14 bg-white text-primary-600 text-lg font-semibold rounded-xl border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-soft"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  See How It Works
                </motion.button>
              </div>
            </FadeIn>

            {/* Scroll indicator */}
            <FadeIn delay={1}>
              <motion.div
                className="inline-flex items-center gap-3 text-gray-600"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <span className="text-sm font-medium">Scroll to explore</span>
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </FadeIn>
          </div>

          {/* Right side - Floating device mockup */}
          <FadeIn delay={0.4} className="hidden lg:block">
            <motion.div
              className="relative"
              animate={{
                y: [0, -20, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              {/* Device mockup placeholder */}
              <div className="relative mx-auto w-80 h-[600px]">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-sage-400 rounded-[3rem] blur-3xl opacity-30" />

                {/* Device frame */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-sage-50 rounded-[2.5rem] h-full overflow-hidden">
                    {/* Screen content */}
                    <div className="p-8 h-full flex flex-col items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-br from-primary-100 to-sage-200 rounded-3xl flex items-center justify-center">
                        <Smartphone className="w-32 h-32 text-primary-600 opacity-20" />
                      </div>
                    </div>
                  </div>
                  {/* Notch */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full" />
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
