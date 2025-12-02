import { Droplet, Wheat, Globe, TrendingUp, Wrench } from 'lucide-react';

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
    <section className="py-24 bg-gradient-to-br from-green-900 to-emerald-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Mission & Impact
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Tackling food insecurity from the roots—by bringing precision agriculture
            to the farmers who need it most
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <Icon className="w-10 h-10 mb-4" />
                <div className="text-3xl font-bold mb-1">{impact.stat}</div>
                <h3 className="text-lg font-semibold mb-2">{impact.title}</h3>
                <p className="text-sm text-green-100">{impact.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg text-green-100 max-w-4xl mx-auto">
            Over the next 5-7 years, we're expanding globally through partnerships with NGOs
            and government programs, bringing precision agriculture to millions of smallholder
            farmers and building a more sustainable, equitable food system.
          </p>
        </div>
      </div>
    </section>
  );
}
