import { CheckCircle, Circle, Loader } from 'lucide-react';

export default function Roadmap() {
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Phased Development Roadmap
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're following a disciplined, validation-first approach to ensure AgriScan
            truly serves farmer needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`border-2 ${getColorClasses(phase.status)} rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                {getIcon(phase.status)}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                  <div className="text-sm font-semibold text-gray-600">{phase.year}</div>
                </div>
              </div>
              <ul className="space-y-3">
                {phase.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
