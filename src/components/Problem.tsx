import { TrendingDown, DollarSign, Droplet, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, CounterNumber, StaggerContainer } from './ui';

export default function Problem() {
  const stats = [
    {
      icon: DollarSign,
      number: 2.5,
      suffix: 'B',
      label: 'Farmers earning <$200/month',
      gradient: 'from-orange-500 to-red-500',
      glowColor: 'rgba(249, 115, 22, 0.4)',
      size: 'large', // Bento grid variation
    },
    {
      icon: TrendingDown,
      number: 500,
      prefix: '$',
      suffix: '+',
      label: 'Cost of existing precision ag devices',
      gradient: 'from-red-500 to-rose-600',
      glowColor: 'rgba(239, 68, 68, 0.4)',
      size: 'medium',
    },
    {
      icon: Droplet,
      number: 70,
      suffix: '%',
      label: 'Of global freshwater used in agriculture',
      gradient: 'from-blue-500 to-cyan-500',
      glowColor: 'rgba(59, 130, 246, 0.4)',
      size: 'medium',
    },
    {
      icon: Cloud,
      number: 100,
      suffix: '%',
      label: 'Climate change making traditional methods obsolete',
      gradient: 'from-gray-600 to-slate-700',
      glowColor: 'rgba(71, 85, 105, 0.4)',
      size: 'small',
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-white via-sage-50 to-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231a4d2e' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <h2 className="text-headline lg:text-display font-bold text-gray-900 mb-6">
            The Challenge We're Solving
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            Smallholder farmers feed one-third of the world, yet they're locked out of the
            agricultural technology revolution. Existing precision agriculture platforms are too
            expensive, require constant internet connectivity, need smartphones, and break easily
            in harsh conditions.
          </p>
        </FadeIn>

        {/* Bento Grid Layout */}
        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            // Different sizes for bento grid
            const sizeClasses = {
              large: 'lg:col-span-2 lg:row-span-2',
              medium: 'lg:col-span-2',
              small: 'lg:col-span-2',
            };

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className={`relative group ${sizeClasses[stat.size as keyof typeof sizeClasses]}`}
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]"
                  style={{
                    background: `linear-gradient(135deg, ${stat.glowColor}, transparent)`
                  }}
                  animate={{
                    background: [
                      `linear-gradient(0deg, ${stat.glowColor}, transparent)`,
                      `linear-gradient(180deg, ${stat.glowColor}, transparent)`,
                      `linear-gradient(360deg, ${stat.glowColor}, transparent)`,
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <div className="w-full h-full bg-white rounded-3xl" />
                </motion.div>

                {/* Card content */}
                <motion.div
                  className="relative bg-white border-2 border-gray-100 rounded-3xl p-8 lg:p-10 h-full flex flex-col justify-between overflow-hidden shadow-soft"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                >
                  {/* Background glow on hover */}
                  <motion.div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${stat.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20`}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Icon with animation */}
                  <motion.div
                    className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </motion.div>

                  <div className="flex-1 flex flex-col justify-end">
                    {/* Large prominent number */}
                    <div className={`text-6xl lg:text-7xl font-extrabold mb-3 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.prefix}
                      <CounterNumber
                        end={stat.number}
                        duration={2000}
                        delay={index * 200}
                      />
                      {stat.suffix}
                    </div>

                    {/* Label below */}
                    <p className="text-gray-700 font-medium text-lg leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
