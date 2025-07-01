import React from 'react';
import { Calendar, CheckCircle, Clock, Target, TrendingUp, Users } from 'lucide-react';

const BookingPage: React.FC = () => {
  return (
    <main className="min-h-screen py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Book Your Free <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Strategy Call</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get personalized insights and a custom roadmap to transform your email marketing into a revenue-generating machine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - What You'll Get */}
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                What You'll Get in This Call
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-600">
                    <TrendingUp className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Deep-Dive Analysis</h3>
                    <p className="text-gray-300">Comprehensive review of your current email marketing performance and identification of immediate opportunities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-600">
                    <Target className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Custom Strategy</h3>
                    <p className="text-gray-300">Personalized email marketing strategy tailored specifically to your business model and target audience.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-600">
                    <CheckCircle className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Actionable Insights</h3>
                    <p className="text-gray-300">Immediate action items you can implement to start seeing results within the first 30 days.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-600">
                    <Users className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Expert Guidance</h3>
                    <p className="text-gray-300">Direct access to our team of email marketing experts with years of e-commerce experience.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call Details */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Call Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="text-purple-400" size={20} />
                  <span className="text-gray-300">Duration: 45-60 minutes</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="text-purple-400" size={20} />
                  <span className="text-gray-300">Format: Video call via Zoom</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-purple-400" size={20} />
                  <span className="text-gray-300">Cost: Completely free</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Target className="text-purple-400" size={20} />
                  <span className="text-gray-300">Outcome: Custom growth strategy</span>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-black border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">John Davis</h4>
                  <p className="text-purple-400 text-sm">E-commerce Store Owner</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The strategy call was incredibly valuable. Within 30 days of implementing their recommendations, our email revenue increased by 40%. The team really knows what they're doing."
              </p>
            </div>
          </div>

          {/* Right Column - Calendly Embed */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Schedule Your Call
              </h3>
              
              {/* Calendly Embed Placeholder */}
              <div className="bg-black border border-gray-700 rounded-xl p-8 text-center min-h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="text-purple-400 mb-4 mx-auto" size={48} />
                  <h4 className="text-white text-xl font-semibold mb-2">
                    Calendly Integration
                  </h4>
                  <p className="text-gray-300 mb-6">
                    Your Calendly embed code would go here. Replace this placeholder with your actual Calendly embed script.
                  </p>
                  <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                    <code className="text-purple-400 text-sm">
                      &lt;Calendly Embed Script&gt;
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookingPage;