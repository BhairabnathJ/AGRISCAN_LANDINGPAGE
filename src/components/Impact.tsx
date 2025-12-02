import { Droplet, Wheat, Globe, TrendingUp, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, CounterNumber, StaggerContainer } from './ui';

export default function Impact() {
  const impacts = [
    {
      icon: Droplet,
      title: 'Water Conservation',
      stat: '20-30%',
      description: 'Reduction in water usage',
    },
    {
      icon: Wheat,
      title: 'Increased Yields',
      stat: '10-20%',
      description: 'Improvement in crop output',
    },
    {
      icon: Globe,
      title: 'Climate Resilience',
      stat: 'Enhanced',
      description: 'Adaptation to changing conditions',
    },
    {
      icon: TrendingUp,
      title: 'Economic Empowerment',
      stat: 'Growing',
      description: 'Income stability and growth',
    },
    {
      icon: Wrench,
      title: 'Technology Equity',
      stat: 'Accessible',
      description: 'Precision ag for all farmers',
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white overflow-hidden">
      {/* Gradient overlay pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Parallax floating orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-sage-300 rounded-full blur-3xl opacity-10"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <h2 className="text-headline lg:text-display font-bold mb-6">
            Our Mission & Impact
          </h2>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto font-light leading-relaxed">
            Tackling food insecurity from the roots—by bringing precision agriculture
            to the farmers who need it most
          </p>
        </FadeIn>

        {/* Impact cards with glow */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20"
        >
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            const isNumeric = impact.stat.match(/\d+/);

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative group"
              >
                {/* Glowing background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2
                  }}
                />

                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 lg:p-8 h-full">
                  {/* Animated icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3
                    }}
                  >
                    <Icon className="w-12 h-12 lg:w-14 lg:h-14 mb-4 text-white" strokeWidth={2} />
                  </motion.div>

                  {/* Stat with counter animation */}
                  <div className="text-4xl lg:text-5xl font-extrabold mb-2">
                    {isNumeric ? (
                      <>
                        <CounterNumber
                          end={parseInt(impact.stat)}
                          duration={2500}
                          delay={index * 200}
                        />
                        {impact.stat.replace(/\d+/g, '')}
                      </>
                    ) : (
                      impact.stat
                    )}
                  </div>

                  <h3 className="text-lg font-bold mb-2">{impact.title}</h3>
                  <p className="text-sm text-primary-100 leading-relaxed">{impact.description}</p>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Vision statement callout */}
        <FadeIn delay={0.6}>
          <motion.div
            className="relative bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-3xl p-10 lg:p-12 text-center shadow-glow"
            whileHover={{ scale: 1.02 }}
          >
            {/* Soft glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-2xl" />

            <div className="relative">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
                Our Vision
              </h3>
              <p className="text-lg lg:text-xl text-primary-50 max-w-4xl mx-auto leading-relaxed font-light">
                Over the next 5-7 years, we're expanding globally through partnerships with NGOs
                and government programs, bringing precision agriculture to millions of smallholder
                farmers and building a more sustainable, equitable food system.
              </p>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
