import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToBeta = () => {
    document.getElementById('beta-program')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          Developed by Unity Provisions
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Precision Agriculture for the<br />
          <span className="text-green-600">World's 2.5 Billion</span><br />
          Smallholder Farmers
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
          Affordable soil monitoring that works offline, survives harsh conditions,
          and helps farmers conserve water and increase yields—even in the world's most remote regions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToBeta}
            className="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Join Our Beta Program
          </button>
          <button
            onClick={scrollToHowItWorks}
            className="px-8 py-4 bg-white text-green-600 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 border-2 border-green-600"
          >
            See How It Works
          </button>
        </div>

        <div className="inline-flex items-center gap-2 text-gray-600 animate-bounce">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
