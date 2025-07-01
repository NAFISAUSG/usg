import React, { useEffect, useRef, useState } from 'react';
import { Mail, Target, Calculator } from 'lucide-react';

interface ServicesSectionProps {
  onBookCall: () => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookCall }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const services = [
    {
      icon: Mail,
      title: 'Email Marketing',
      description:
        'Comprehensive email marketing automation that nurtures leads and converts subscribers into loyal customers.',
      features: [
        'Automated welcome sequences',
        'Behavioral trigger campaigns',
        'Segmentation and personalization',
        'A/B testing optimization',
        'Performance analytics and reporting'
      ]
    },
    {
      icon: Target,
      title: 'Paid Ads',
      description:
        'Strategic paid advertising campaigns that maximize your ROI and drive qualified traffic to your offers.',
      features: [
        'Facebook and Instagram advertising',
        'Google Ads management',
        'Retargeting campaigns',
        'Creative development and testing',
        'Campaign optimization and scaling'
      ]
    },
    {
      icon: Calculator,
      title: 'Unit Economics',
      description:
        'Deep analysis of your business metrics to optimize profitability and scale your operations effectively.',
      features: [
        'Customer lifetime value analysis',
        'Cost per acquisition optimization',
        'Revenue forecasting models',
        'Profit margin optimization',
        'Growth strategy development'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-black relative" ref={sectionRef}>
      <style>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        .fade-in-up.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'show' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive marketing solutions designed to transform your business and drive sustainable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105 fade-in-up ${isVisible ? 'show' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mb-6 border border-gray-600 group-hover:bg-purple-600/20 transition-colors group-hover:border-purple-500/30">
                <service.icon className="text-purple-400 group-hover:text-purple-300" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Book a Call Button */}
        <div className={`text-center fade-in-up ${isVisible ? 'show' : ''}`}>
          <button
            onClick={onBookCall}
            className="inline-block px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all duration-300"
          >
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
