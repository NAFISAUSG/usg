import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onBookCall: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBookCall }) => {

  // Scroll smoothly to the element with id="process"
  const handleViewProcess = () => {
    const element = document.getElementById('process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[600px] flex items-center justify-center px-6 py-12 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 w-12 h-12 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-36 right-16 w-10 h-10 bg-purple-400/5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-36 left-16 w-16 h-16 bg-purple-400/8 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 right-8 w-12 h-12 bg-purple-300/5 rounded-full animate-bounce"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Amplify Your Sustainable Ethical Women’s Fashion Brand{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              With Pinterest Ads
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
            We help home-office product brands grow sales and reach{' '}
            <span className="text-purple-400 font-semibold">conscious shoppers</span> through targeted Pinterest advertising that works on autopilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={onBookCall}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 text-base font-semibold"
            >
              Book Free Strategy Call
              <ArrowRight size={18} />
            </button>

            <button
              onClick={handleViewProcess}
              className="border-2 border-gray-600 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 text-base font-semibold"
            >
              View Our Process
            </button>
          </div>
        </div>

        {/* Circular Animation */}
        <div className="relative h-[350px] hidden lg:flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-60 h-60 border-2 border-purple-500/20 rounded-full animate-spin-slow"></div>
            <div className="absolute w-44 h-44 border border-purple-400/10 rounded-full animate-pulse"></div>

            {/* Floating Profile Letters */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
              U
            </div>
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-purple-400 font-bold animate-pulse">
              S
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
              G
            </div>

            {/* Center Content */}
            <div className="text-center text-white">
              <div className="text-3xl font-bold mb-1">30-50%</div>
              <div className="text-xs text-purple-400">Growth in Engagement & Sales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
