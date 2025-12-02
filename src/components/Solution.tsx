import { DollarSign, Globe, Wrench, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, GlassCard } from './ui';
import { useInView } from '../hooks';

export default function Solution() {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const pillars = [
    {
      icon: DollarSign,
      title: 'Ultra-Affordable',
      features: [
        'Under $40 cost',
        'Subsidized to $50-100 for farmers',
        'Accessible via grants, microfinance, co-op buying',
      ],
      gradient: 'from-primary-500 to-primary-600',
      glowColor: 'rgba(26, 77, 46, 0.6)',
      delay: 0.2,
      elevated: false,
    },
    {
      icon: Globe,
      title: 'Works Anywhere',
      features: [
        'Offline-first: works without internet',
        'Simple LED feedback',
        'Red/yellow/green dashboard anyone can understand',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      glowColor: 'rgba(59, 130, 246, 0.6)',
      delay: 0.4,
      elevated: true, // Center card is elevated
    },
    {
      icon: Wrench,
      title: 'Built to Last',
      features: [
        'Modular design: repair individual parts',
        'Weatherproof enclosure',
        'Designed for harsh conditions',
      ],
      gradient: 'from-amber-500 to-orange-500',
      glowColor: 'rgba(245, 158, 11, 0.6)',
      delay: 0.6,
      elevated: false,
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-100 via-white to-primary-50" />

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(26, 77, 46, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(26, 77, 46, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(26, 77, 46, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <h2 className="text-headline lg:text-display font-bold text-gray-900 mb-6">
            AgriScan: A Different Approach
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            We've redesigned precision agriculture from the ground up to serve the farmers
            who need it most
          </p>
        </FadeIn>

        {/* Asymmetric grid layout */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8 items-center">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isCenter = pillar.elevated;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? {
                  opacity: 1,
                  y: 0,
                  scale: 1
                } : {
                  opacity: 0,
                  y: 50,
                  scale: 0.9
                }}
                transition={{
                  duration: 0.6,
                  delay: pillar.delay,
                  ease: [0.4, 0.0, 0.2, 1]
                }}
                className={`relative ${isCenter ? 'md:-mt-8 md:mb-8' : ''}`}
              >
                <GlassCard
                  className={`relative p-10 ${isCenter ? 'lg:p-12 shadow-glow-lg' : 'shadow-soft-lg'} h-full`}
                  enableHover={true}
                  intensity="medium"
                >
                  {/* Icon with pulsing glow */}
                  <div className="relative mb-8">
                    {/* Pulsing glow effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.gradient} blur-2xl opacity-40`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.6, 0.4]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />

                    {/* Icon container */}
                    <motion.div
                      className={`relative w-20 h-20 ${isCenter ? 'lg:w-24 lg:h-24' : ''} rounded-3xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-xl`}
                      whileHover={{
                        rotate: [0, -5, 5, -5, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`${isCenter ? 'w-12 h-12' : 'w-10 h-10'} text-white`} strokeWidth={2.5} />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className={`${isCenter ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-3xl'} font-bold bg-gradient-to-br ${pillar.gradient} bg-clip-text text-transparent mb-6`}>
                    {pillar.title}
                  </h3>

                  {/* Features list */}
                  <ul className="space-y-4">
                    {pillar.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? {
                          opacity: 1,
                          x: 0
                        } : {
                          opacity: 0,
                          x: -20
                        }}
                        transition={{
                          duration: 0.4,
                          delay: pillar.delay + 0.2 + (idx * 0.1)
                        }}
                        className="flex items-start gap-3"
                      >
                        <div className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${pillar.gradient} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className={`text-gray-700 ${isCenter ? 'text-lg' : 'text-base'} font-medium leading-relaxed`}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Decorative gradient on elevated card */}
                  {isCenter && (
                    <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary-100/50 to-blue-100/50 rounded-2xl blur-3xl" />
                  )}
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
