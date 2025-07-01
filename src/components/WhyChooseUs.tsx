import React, { useEffect, useRef, useState } from 'react';
import { Shield, Clock, BarChart, Users, Zap, Award } from 'lucide-react';

interface WhyChooseUsProps {
  onBookCall: () => void;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onBookCall }) => {
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

  const reasons = [
    {
      icon: Shield,
      title: 'Proven Results',
      description: 'Track record of generating 30–50% revenue increase for our clients consistently.'
    },
    {
      icon: Clock,
      title: 'Automated Systems',
      description: 'Set-and-forget automation that works 24/7 to nurture and convert your leads.'
    },
    {
      icon: BarChart,
      title: 'Data-Driven Approach',
      description: 'Every decision backed by comprehensive analytics and performance metrics.'
    },
    {
      icon: Users,
      title: 'Personalized Strategy',
      description: 'Custom-tailored campaigns that speak directly to your audience segments.'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Get your campaigns live within 30 days with our streamlined process.'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Certified marketing professionals with years of e-commerce experience.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-black" ref={sectionRef}>
      <style>
        {`
          .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
          }
          .fade-in-up.show {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'show' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Us?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven marketing strategies to deliver exceptional results for your business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-gray-900 border border-gray-700 rounded-2xl p-8 transition-all duration-500 fade-in-up ${
                isVisible ? 'show' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-600">
                <reason.icon className="text-purple-400" size={24} />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 text-center">{reason.title}</h3>

              <p className="text-gray-300 leading-relaxed text-center">{reason.description}</p>
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

export default WhyChooseUs;
