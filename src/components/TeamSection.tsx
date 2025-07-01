import React, { useEffect, useRef, useState } from 'react';
import nafisa from './images/nafisa.jpeg'

const TeamSection: React.FC = () => {
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

  const team = [
    {
      name: 'Nafisa',
      role: 'Founder && CEO',
      description: 'Leads strategy and growth—focused on scaling e-commerce brands with impact',
      image: nafisa,
    },
    {
      name: 'Michael Chen',
      role: 'Paid Ads Specialist',
      description: 'Performance marketing expert who has managed $50M+ in ad spend',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Analytics & Optimization',
      description: 'Data scientist specializing in e-commerce metrics and growth modeling',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-black relative">
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 fade-up ${isVisible ? 'show' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experienced professionals dedicated to growing your business through strategic marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className={`text-center fade-up ${isVisible ? 'show' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-6 object-cover"
              />

              <h3 className="text-xl font-bold text-white mb-2">
                {member.name}
              </h3>

              <p className="text-purple-400 font-medium mb-4">
                {member.role}
              </p>

              <p className="text-gray-300 leading-relaxed max-w-sm mx-auto">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
