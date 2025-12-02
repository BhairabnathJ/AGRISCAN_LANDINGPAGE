import { useState } from 'react';
import { Sprout, CheckCircle } from 'lucide-react';

export default function BetaProgram() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    farmSize: '',
    crops: '',
    currentMethod: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="beta-program" className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white border-2 border-green-200 rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Sprout className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Help Us Validate AgriScan
            </h2>
            <p className="text-xl text-gray-700">
              Join our beta program and get early access to AgriScan
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Beta Program Benefits:</h3>
            <ul className="space-y-2">
              {[
                'Free or heavily subsidized device',
                'Direct input on product development',
                'Priority access to future features',
                'Technical support throughout testing period',
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Farm Location (City, State) *
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Boston, MA"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Farm Size (acres) *
                </label>
                <input
                  type="text"
                  name="farmSize"
                  required
                  value={formData.farmSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="5 acres"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Crops Grown *
                </label>
                <input
                  type="text"
                  name="crops"
                  required
                  value={formData.crops}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Tomatoes, lettuce, peppers"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Irrigation Method *
                </label>
                <textarea
                  name="currentMethod"
                  required
                  value={formData.currentMethod}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors resize-none"
                  placeholder="Describe your current irrigation approach..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Apply for Beta Program
              </button>

              <p className="text-sm text-gray-600 text-center">
                Currently accepting applications from Northeast US farms
              </p>
            </form>
          ) : (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
              <p className="text-gray-700">
                Thank you for your interest. We'll review your application and get back to you soon.
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Not a Farmer?</h3>
            <p className="text-gray-700 mb-4">Support our mission or stay updated</p>
            <button className="px-6 py-2 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">
              Newsletter Signup
            </button>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">NGO or Government?</h3>
            <p className="text-gray-700 mb-4">Partner with us for global impact</p>
            <button className="px-6 py-2 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
