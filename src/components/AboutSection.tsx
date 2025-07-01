import React from 'react';
import { Target, Zap, TrendingUp } from 'lucide-react';
import paid from '../components/images/paid.jpg';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-900"
      style={{ animation: 'fadeIn 1s ease forwards', opacity: 0 }}
    >
      <style>
        {`
          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        {/* Centered About Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-purple-500 mb-12 text-center"
          style={{ animation: 'fadeIn 1.2s ease forwards', opacity: 0, animationDelay: '0.2s' }}
        >
          About Us
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className="order-1 lg:order-2"
            style={{ animation: 'fadeIn 1.4s ease forwards', opacity: 0, animationDelay: '0.4s' }}
          >
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-gray-800 to-black rounded-2xl border border-purple-500/20 flex items-center justify-center overflow-hidden">
                <img
                  src={paid}
                  alt="United Sustainable Growth Campaign"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="order-2 lg:order-1"
            style={{ animation: 'fadeIn 1.6s ease forwards', opacity: 0, animationDelay: '0.6s' }}
          >
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                United Sustainable Growth
              </span>
            </h3>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                We are a specialized marketing agency focused on scaling sustainable and ethical women’s fashion brands through highly targeted Pinterest advertising campaigns.
              </p>

              <p>
                Leveraging deep consumer insights and Pinterest’s unique audience, we help brands reach conscious shoppers and drive measurable growth with authentic storytelling and creative ad strategies.
              </p>

              <p>
                Our proven approach has enabled brands to consistently increase engagement and sales by 30-50%, building loyal customer communities while maintaining their ethical values.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{
                icon: <Zap className="text-purple-400" size={24} />,
                number: '200+',
                label: 'Pinterest Campaigns Launched',
              }, {
                icon: <TrendingUp className="text-purple-400" size={24} />,
                number: '40%',
                label: 'Avg Sales Growth',
              }, {
                icon: <Target className="text-purple-400" size={24} />,
                number: '95%',
                label: 'Client Satisfaction',
              }].map(({ icon, number, label }, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 border border-purple-500/20">
                    {icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{number}</div>
                  <div className="text-sm text-purple-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
