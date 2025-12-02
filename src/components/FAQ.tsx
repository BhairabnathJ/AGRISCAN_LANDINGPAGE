import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How is AgriScan different from other precision agriculture platforms?',
      answer:
        'AgriScan is designed specifically for smallholder farmers in resource-constrained environments. Unlike platforms that cost $500+, require constant internet, and need smartphones, AgriScan works offline, uses simple LED feedback, costs under $100 for farmers, and has a modular design for easy repairs.',
    },
    {
      question: "What happens if I don't have internet access?",
      answer:
        'AgriScan is offline-first. The device stores data locally on an SD card and provides real-time feedback through red, yellow, and green LED indicators. You can access detailed data via local WiFi when available, but internet is never required for basic operation.',
    },
    {
      question: 'How much does AgriScan cost?',
      answer:
        "The manufacturing cost is under $40. Through subsidies, grants, and co-op buying programs, farmers will pay between $50-100. We're working with NGOs and government programs to make AgriScan accessible to farmers who need it most.",
    },
    {
      question: 'What if the device breaks?',
      answer:
        'AgriScan uses a modular design, so individual components can be repaired or replaced without replacing the entire unit. The device is built with weatherproof IP65-rated housing and designed for harsh conditions. We also provide technical support and spare parts.',
    },
    {
      question: 'When will AgriScan be available?',
      answer:
        "We're currently in Phase 1 (2025) with beta testing in the Northeast US. Phase 2 (2026) will expand to pilot programs in multiple US and international locations. Full-scale manufacturing and global distribution is planned for Phase 3 (2027-28).",
    },
    {
      question: 'How do I get subsidy or grant support?',
      answer:
        "We're partnering with agricultural NGOs, government programs, and microfinance institutions to provide subsidies and financing options. Beta program participants will have early access to these programs. Contact us for more information about funding opportunities in your region.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700">
            Everything you need to know about AgriScan
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
