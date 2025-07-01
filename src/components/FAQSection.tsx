import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What happens during the free strategy session?',
      answer: 'During your free strategy session, we\'ll conduct a comprehensive review of your current email marketing setup, analyze your customer data, identify growth opportunities, and create a customized roadmap for your business. This typically takes 45-60 minutes and includes actionable insights you can implement immediately.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Most clients see initial improvements within the first 30 days, with significant revenue increases typically occurring within 60-90 days. However, email marketing is a long-term strategy that compounds over time, with the best results coming after 6-12 months of consistent optimization.'
    },
    {
      question: 'Do you work with small businesses or only large companies?',
      answer: 'We work with businesses of all sizes, from startups to established enterprises. Our strategies are scalable and can be adapted to your current business size and growth goals. We have experience working with companies ranging from $10K to $10M+ in annual revenue.'
    },
    {
      question: 'What if I don\'t have an email list yet?',
      answer: 'No problem! We can help you build your email list from scratch using proven lead generation strategies, opt-in forms, and content marketing. We\'ll create a comprehensive plan to grow your list with high-quality subscribers who are genuinely interested in your products.'
    },
    {
      question: 'How much does your service cost?',
      answer: 'Our pricing is customized based on your specific needs, business size, and goals. During your free strategy session, we\'ll discuss your requirements and provide a detailed proposal. We offer flexible packages ranging from basic automation setup to full-service marketing management.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about our strategy sessions and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-purple-400 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-purple-400 flex-shrink-0" size={20} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;