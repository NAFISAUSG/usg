import React from 'react';
import { Calendar, TrendingUp, Target, Clock } from 'lucide-react';

interface BookCallSectionProps {
  onBookCall: () => void;
}

const BookCallSection: React.FC<BookCallSectionProps> = ({ onBookCall }) => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Deep-Dive Analysis of Your Ad Performance',
      description: 'Comprehensive review of your current marketing efforts'
    },
    {
      icon: Target,
      title: 'Advanced E-Commerce Advertising Strategies',
      description: 'Proven tactics tailored to your business model'
    },
    {
      icon: Calendar,
      title: 'AI & Data-Driven Optimization',
      description: 'Lower CAC & Higher ROI through smart automation'
    },
    {
      icon: Clock,
      title: '15-Minute Call – No Sales, Just Real Value',
      description: 'Quick, actionable insights you can implement today'
    }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Marketing?</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-4">
          Book a free strategy call to discuss how we can help grow your fitness brand.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:bg-gray-800 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600">
                <benefit.icon className="text-purple-400" size={20} />
              </div>
              
              <h3 className="text-white font-semibold mb-2 text-sm">
                {benefit.title}
              </h3>
              
              <p className="text-gray-300 text-xs leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={onBookCall}
          className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-4 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-lg font-semibold inline-flex items-center gap-3"
        >
          <Calendar size={20} />
          Book Your Free Demo Call
        </button>
      </div>
    </section>
  );
};

export default BookCallSection;