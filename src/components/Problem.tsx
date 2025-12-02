import { TrendingDown, DollarSign, Droplet, Cloud } from 'lucide-react';

export default function Problem() {
  const stats = [
    {
      icon: DollarSign,
      number: '2.5B',
      label: 'Farmers earning <$200/month',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      icon: TrendingDown,
      number: '$500+',
      label: 'Cost of existing precision ag devices',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: Droplet,
      number: '70%',
      label: 'Of global freshwater used in agriculture',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Cloud,
      number: 'Rising',
      label: 'Climate change making traditional methods obsolete',
      color: 'text-gray-600',
      bgColor: 'bg-gray-100',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Challenge We're Solving
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Smallholder farmers feed one-third of the world, yet they're locked out of the
            agricultural technology revolution. Existing precision agriculture platforms are too
            expensive, require constant internet connectivity, need smartphones, and break easily
            in harsh conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${stat.bgColor} ${stat.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
