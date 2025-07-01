import React, { useState, useEffect, useRef } from 'react';
import { Calendar, CheckCircle, Rocket } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('3-days');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const processData = {
    '3-days': {
      title: '3-Day Quick Start',
      description: 'Get your foundation set up in just 3 days',
      days: [
        {
          day: 'Day 1',
          title: 'Strategy & Setup',
          description: 'Initial consultation, strategy development, and platform setup',
          icon: Calendar
        },
        {
          day: 'Day 2',
          title: 'Campaign Creation',
          description: 'Design and build your first automated email sequences',
          icon: CheckCircle
        },
        {
          day: 'Day 3',
          title: 'Launch & Optimize',
          description: 'Go live with your campaigns and initial optimization',
          icon: Rocket
        }
      ]
    },
    '7-days': {
      title: '7-Day Accelerated Launch',
      description: 'Complete campaign setup with advanced features',
      days: [
        {
          day: 'Day 1-2',
          title: 'Deep Dive Analysis',
          description: 'Comprehensive audit of your current marketing and detailed strategy planning',
          icon: Calendar
        },
        {
          day: 'Day 3-4',
          title: 'Content & Design',
          description: 'Create compelling email content, designs, and landing pages',
          icon: CheckCircle
        },
        {
          day: 'Day 5-6',
          title: 'Automation Setup',
          description: 'Build complex automation workflows and segmentation',
          icon: Rocket
        },
        {
          day: 'Day 7',
          title: 'Launch & Training',
          description: 'Campaign launch with team training and optimization guidelines',
          icon: CheckCircle
        }
      ]
    },
    '30-days': {
      title: '30-Day Complete Transformation',
      description: 'Full marketing ecosystem setup and optimization',
      days: [
        {
          day: 'Week 1',
          title: 'Foundation & Strategy',
          description: 'Complete business analysis, strategy development, and platform setup',
          icon: Calendar
        },
        {
          day: 'Week 2',
          title: 'Content & Automation',
          description: 'Create comprehensive content library and automation workflows',
          icon: CheckCircle
        },
        {
          day: 'Week 3',
          title: 'Advanced Features',
          description: 'Implement advanced segmentation, personalization, and integrations',
          icon: Rocket
        },
        {
          day: 'Week 4',
          title: 'Optimization & Scale',
          description: 'Performance optimization, scaling strategies, and ongoing support setup',
          icon: CheckCircle
        }
      ]
    }
  };

  return (
    <section id="process" className="py-20 px-6 bg-gray-900" ref={sectionRef}>
      <style>
        {`
          .fade-in-up {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease-out;
          }
          .fade-in-up.show {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'show' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the timeline that works best for your business needs and goals.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className={`flex justify-center mb-12 fade-in-up ${isVisible ? 'show' : ''}`}>
          <div className="bg-black border border-gray-700 rounded-full p-2">
            {Object.keys(processData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {tab === '3-days' ? '3 Days' : tab === '7-days' ? '7 Days' : '30 Days'}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Content */}
        <div className={`bg-black border border-gray-700 rounded-2xl p-8 fade-in-up ${isVisible ? 'show' : ''}`}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              {processData[activeTab as keyof typeof processData].title}
            </h3>
            <p className="text-gray-300 text-lg">
              {processData[activeTab as keyof typeof processData].description}
            </p>
          </div>

          <div
            className={`grid gap-6 ${
              activeTab === '3-days'
                ? 'md:grid-cols-3'
                : 'md:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {processData[activeTab as keyof typeof processData].days.map((day, index) => (
              <div
                key={index}
                className={`bg-gray-900 border border-gray-700 rounded-xl p-6 transform transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } hover:bg-gray-800 hover:border-purple-500/30 hover:scale-105`}
              >
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4 border border-gray-600">
                  <day.icon className="text-purple-400" size={20} />
                </div>
                <div className="text-sm text-purple-400 font-medium mb-2">
                  {day.day}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {day.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {day.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
