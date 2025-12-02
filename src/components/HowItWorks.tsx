import { Download, Activity, Droplet, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: 'Install',
      description: 'Push sensor into soil, power on device',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Activity,
      title: 'Monitor',
      description: 'Red/yellow/green LEDs show soil moisture status',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: Droplet,
      title: 'Act',
      description: 'Water when yellow/red, save water when green',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: TrendingUp,
      title: 'Improve',
      description: 'Track data over time, optimize irrigation',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  const specs = [
    'ESP32-based monitoring',
    'Capacitive soil moisture sensor',
    'Waterproof temperature probe',
    'Local WiFi interface',
    'SD card data logging',
    'IP65-rated weatherproof housing',
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How AgriScan Works
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Simple to install, easy to understand, powerful results
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2 z-0"></div>
                )}
                <div className="relative z-10 text-center">
                  <div className={`${step.bgColor} ${step.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Icon className="w-12 h-12" strokeWidth={2} />
                  </div>
                  <div className="text-sm font-bold text-gray-400 mb-2">STEP {index + 1}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Specifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                <span className="text-gray-700 font-medium">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
