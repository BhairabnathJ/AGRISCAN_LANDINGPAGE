import { useState } from 'react';
import { Sprout, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './ui';

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
    <section id="beta-program" className="relative py-32 bg-gradient-to-br from-sage-100 via-white to-primary-50 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(26, 77, 46, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(26, 77, 46, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(26, 77, 46, 0.15) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          className="bg-white/80 backdrop-blur-lg border-2 border-primary-200 rounded-3xl p-8 lg:p-12 shadow-glow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FadeIn className="text-center mb-12">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-6 shadow-glow"
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sprout className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-headline lg:text-display font-bold text-gray-900 mb-4">
              Help Us Validate AgriScan
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 font-light">
              Join our beta program and get early access to AgriScan
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-br from-primary-50 to-sage-50 border-2 border-primary-200 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Beta Program Benefits:</h3>
              <ul className="space-y-4">
                {[
                  'Free or heavily subsidized device',
                  'Direct input on product development',
                  'Priority access to future features',
                  'Technical support throughout testing period',
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>

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
        </motion.div>

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
