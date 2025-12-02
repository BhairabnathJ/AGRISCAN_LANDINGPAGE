import { Download, Activity, Droplet, TrendingUp, ChevronDown, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FadeIn } from './ui';
import { useInView } from '../hooks';

export default function HowItWorks() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [specsExpanded, setSpecsExpanded] = useState(false);
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const steps = [
    {
      icon: Download,
      title: 'Install',
      description: 'Push sensor into soil, power on device',
      detail: 'Simply insert the probe 6 inches into the soil near your crops and press the power button. No tools or technical knowledge required.',
      gradient: 'from-primary-500 to-primary-600',
      color: 'primary',
    },
    {
      icon: Activity,
      title: 'Monitor',
      description: 'Red/yellow/green LEDs show soil moisture status',
      detail: 'Three bright LEDs provide instant feedback: Green (optimal moisture), Yellow (needs water soon), Red (critical - water now).',
      gradient: 'from-yellow-500 to-amber-500',
      color: 'yellow',
    },
    {
      icon: Droplet,
      title: 'Act',
      description: 'Water when yellow/red, save water when green',
      detail: 'Make informed irrigation decisions based on real soil data, not guesswork. Save water and increase yields simultaneously.',
      gradient: 'from-blue-500 to-cyan-500',
      color: 'blue',
    },
    {
      icon: TrendingUp,
      title: 'Improve',
      description: 'Track data over time, optimize irrigation',
      detail: 'Data is stored locally and can be viewed via WiFi dashboard. Learn patterns and continuously improve your farming practices.',
      gradient: 'from-purple-500 to-pink-500',
      color: 'purple',
    },
  ];

  const specs = [
    { label: 'ESP32-based monitoring', category: 'Core' },
    { label: 'Capacitive soil moisture sensor', category: 'Sensors' },
    { label: 'Waterproof temperature probe', category: 'Sensors' },
    { label: 'Local WiFi interface', category: 'Connectivity' },
    { label: 'SD card data logging', category: 'Storage' },
    { label: 'IP65-rated weatherproof housing', category: 'Build' },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-gradient-to-br from-white via-sage-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <h2 className="text-headline lg:text-display font-bold text-gray-900 mb-6">
            How AgriScan Works
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            Simple to install, easy to understand, powerful results
          </p>
        </FadeIn>

        {/* Interactive steps */}
        <div ref={ref} className="relative mb-20">
          {/* Animated connection line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 mx-auto" style={{ width: 'calc(100% - 200px)', marginLeft: '100px' }}>
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 via-yellow-500 via-blue-500 to-purple-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isExpanded = expandedStep === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                  onMouseEnter={() => setExpandedStep(index)}
                  onMouseLeave={() => setExpandedStep(null)}
                >
                  <motion.div
                    className="relative bg-white rounded-3xl p-8 shadow-soft cursor-pointer"
                    whileHover={{ scale: 1.05, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step number with animated fill */}
                    <div className="relative w-16 h-16 mb-6 mx-auto">
                      <svg className="w-16 h-16 -rotate-90">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="#e5e7eb"
                          strokeWidth="4"
                          fill="none"
                        />
                        <motion.circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="url(#gradient-${index})"
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                        />
                        <defs>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" className={`text-${step.color}-500`} stopColor="currentColor" />
                            <stop offset="100%" className={`text-${step.color}-600`} stopColor="currentColor" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900">{index + 1}</span>
                      </div>
                    </div>

                    {/* Icon with gradient */}
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </motion.div>

                    {/* Content */}
                    <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent text-center`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-700 text-center mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Expandable detail */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className={`mt-4 pt-4 border-t-2 border-${step.color}-100`}>
                            <p className="text-sm text-gray-600 leading-relaxed text-center">
                              {step.detail}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Device mockup placeholder */}
                    <motion.div
                      className="mt-6 mx-auto w-20 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-inner"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Smartphone className="w-10 h-10 text-gray-400" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technical Specifications - Expandable Accordion */}
        <FadeIn>
          <motion.div
            className="bg-white rounded-3xl shadow-soft-lg overflow-hidden border-2 border-gray-100"
            initial={false}
          >
            <motion.button
              onClick={() => setSpecsExpanded(!specsExpanded)}
              className="w-full px-10 py-8 flex items-center justify-between hover:bg-sage-50 transition-colors duration-300"
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Technical Specifications
              </h3>
              <motion.div
                animate={{ rotate: specsExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-8 h-8 text-primary-600" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {specsExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-10 pb-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {specs.map((spec, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-sage-50 transition-colors duration-300"
                        >
                          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 mt-1.5 flex-shrink-0" />
                          <div>
                            <div className="text-xs font-semibold text-primary-600 mb-1">{spec.category}</div>
                            <div className="text-gray-700 font-medium">{spec.label}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
