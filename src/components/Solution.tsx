import { DollarSign, Globe, Wrench } from 'lucide-react';

export default function Solution() {
  const pillars = [
    {
      icon: DollarSign,
      title: 'Ultra-Affordable',
      features: [
        'Under $40 cost',
        'Subsidized to $50-100 for farmers',
        'Accessible via grants, microfinance, co-op buying',
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      icon: Globe,
      title: 'Works Anywhere',
      features: [
        'Offline-first: works without internet',
        'Simple LED feedback',
        'Red/yellow/green dashboard anyone can understand',
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Wrench,
      title: 'Built to Last',
      features: [
        'Modular design: repair individual parts',
        'Weatherproof enclosure',
        'Designed for harsh conditions',
      ],
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AgriScan: A Different Approach
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We've redesigned precision agriculture from the ground up to serve the farmers
            who need it most
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`${pillar.bgColor} border-2 ${pillar.borderColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className={`${pillar.color} mb-6`}>
                  <Icon className="w-12 h-12" strokeWidth={2} />
                </div>
                <h3 className={`text-2xl font-bold ${pillar.color} mb-6`}>
                  {pillar.title}
                </h3>
                <ul className="space-y-3">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`${pillar.color} mt-1`}>
                        <div className="w-2 h-2 rounded-full bg-current"></div>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
