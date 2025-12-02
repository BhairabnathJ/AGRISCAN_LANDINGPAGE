import { CheckCircle, Circle, Loader } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './ui';
import { useInView } from '../hooks';

export default function Roadmap() {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const phases = [
    {
      title: 'Phase 0-1',
      year: '2025',
      status: 'in-progress',
      items: [
        'Proof of concept',
        'Northeast US validation',
        'Beta farmer partnerships',
        'Technical feasibility',
      ],
    },
    {
      title: 'Phase 2',
      year: '2026',
      status: 'upcoming',
      items: [
        'Pilot programs',
        '3 US + 3 international sites',
        'ROI validation',
        'Subsidy/grant integration',
      ],
    },
    {
      title: 'Phase 3',
      year: '2027-28',
      status: 'future',
      items: [
        'Scale manufacturing',
        'Global distribution',
        'AI/camera features (optional)',
        '10,000+ units',
      ],
    },
  ];

  const getIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'in-progress':
        return <Loader className="w-6 h-6 text-blue-600 animate-spin" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getColorClasses = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-200 bg-green-50';
      case 'in-progress':
        return 'border-blue-200 bg-blue-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-white via-sage-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <h2 className="text-headline lg:text-display font-bold text-gray-900 mb-6">
            Phased Development Roadmap
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            We're following a disciplined, validation-first approach to ensure AgriScan
            truly serves farmer needs
          </p>
        </FadeIn>

        {/* Flowing timeline with progress bar */}
        <div ref={ref} className="relative">
          {/* Animated connection bar */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-2 bg-gray-200 rounded-full mx-24">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 0.33 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => {
              const isActive = phase.status === 'in-progress';
              const isCompleted = phase.status === 'completed';

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative ${isActive ? 'md:-mt-4' : ''}`}
                >
                  <motion.div
                    className={`relative bg-white rounded-3xl p-8 lg:p-10 shadow-soft border-2 ${
                      isActive ? 'border-primary-500 shadow-glow' : 'border-gray-100'
                    }`}
                    whileHover={{ scale: 1.03, y: -4 }}
                    animate={isActive ? { boxShadow: ['0 0 24px rgba(26, 77, 46, 0.15)', '0 0 48px rgba(26, 77, 46, 0.3)', '0 0 24px rgba(26, 77, 46, 0.15)'] } : {}}
                    transition={isActive ? { duration: 3, repeat: Infinity } : { duration: 0.3 }}
                  >
                    {/* Icon */}
                    <motion.div
                      className="flex items-center gap-4 mb-6"
                      animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className={`w-16 h-16 rounded-2xl ${isActive ? 'bg-gradient-to-br from-primary-500 to-primary-600' : 'bg-gray-100'} flex items-center justify-center`}>
                        {getIcon(phase.status)}
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{phase.title}</h3>
                        <div className="text-sm font-semibold text-gray-600">{phase.year}</div>
                      </div>
                    </motion.div>

                    {/* Items */}
                    <ul className="space-y-4">
                      {phase.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`mt-1.5 w-2 h-2 rounded-full ${isActive ? 'bg-primary-500' : 'bg-gray-400'}`} />
                          <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
