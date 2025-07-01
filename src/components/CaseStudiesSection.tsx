import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

const CaseStudiesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      title: 'LumiWear Studio',
      category: 'Sustainable Fashion',
      shortDescription: 'Grew Pinterest traffic by 280% and generated 60% more sales in 90 days.',
      longDescription:
        'LumiWear Studio, a conscious women’s fashion brand, struggled with low online visibility and declining ROAS from Instagram and Facebook ads.\n\nWe implemented a Pinterest-first ad strategy that included:\n\n• Keyword-optimized product pins\n• Lifestyle imagery tailored for Pinterest\n• Multi-format creatives (video pins, carousels)\n• Shopping ads targeting conscious fashion shoppers\n• Weekly A/B testing of creatives and CTAs\n\nResults:\n• 280% increase in Pinterest traffic\n• 60% increase in total online sales\n• 42% lower cost-per-click vs Meta ads\n• ROAS increased from 1.7x to 3.6x',
      image: 'https://images.pexels.com/photos/7679874/pexels-photo-7679874.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: {
        traffic: '+280%',
        sales: '+60%',
        roas: '3.6x'
      }
    },
    {
      id: 2,
      title: 'Ethica Threads',
      category: 'Ethical Apparel',
      shortDescription: 'Tripled conversion rates using shoppable Pinterest ads and catalog sync.',
      longDescription:
        'Ethica Threads had amazing products but struggled to scale with paid ads. Their visuals were brand-aligned but didn’t convert well on other platforms.\n\nWe built a creative-first Pinterest ad campaign focused on:\n\n• Catalog integration with Pinterest Shopping\n• Creative storytelling through outfit pins\n• Strategic targeting of ethical fashion seekers\n• Weekly optimization based on scroll-depth and saves\n\nResults:\n• 3x increase in conversion rate\n• 75% decrease in abandoned cart rate\n• Pinterest became #1 paid channel by ROI\n• $870k revenue attributed to Pinterest in 6 months',
      image: 'https://images.pexels.com/photos/18523850/pexels-photo-18523850.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: {
        conversion: '3x',
        cartAbandonment: '-75%',
        revenue: '$870k'
      }
    },
    {
      id: 3,
      title: 'Verde Collective',
      category: 'Slow Fashion Brand',
      shortDescription: 'Generated $1.2M+ in Pinterest-attributed revenue with lifestyle-focused ads.',
      longDescription:
        'Verde Collective is a high-end slow fashion label focused on sustainability. They weren’t using Pinterest at all prior to working with us.\n\nOur team handled a full-funnel strategy:\n\n• Pinterest account setup and pixel tracking\n• Organic + paid synergy (boards + ads)\n• High-converting Pin design using UGC\n• Repinned seasonal campaigns (Spring/Summer)\n• Audience retargeting based on site behaviors\n\nResults:\n• $1.2M revenue attributed to Pinterest\n• 46% increase in repeat purchases\n• 2.9x average ROAS on cold traffic',
      image: 'https://images.pexels.com/photos/9745119/pexels-photo-9745119.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: {
        revenue: '$1.2M+',
        repeatPurchases: '+46%',
        roas: '2.9x'
      }
    }
  ];

  const closeModal = () => setSelectedCase(null);

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pinterest <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we helped sustainable women’s fashion brands grow through high-converting Pinterest ad campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group bg-black border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer"
              onClick={() => setSelectedCase(study.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {study.shortDescription}
                </p>
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium">
                  <span>Learn More</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCase && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={caseStudies.find(study => study.id === selectedCase)?.image}
                  alt={caseStudies.find(study => study.id === selectedCase)?.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {caseStudies.find(study => study.id === selectedCase)?.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {caseStudies.find(study => study.id === selectedCase)?.title}
                </h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {Object.entries(caseStudies.find(study => study.id === selectedCase)?.results || {}).map(([key, value]) => (
                    <div key={key} className="bg-black border border-gray-700 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">{value}</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wide">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="prose prose-invert max-w-none">
                  {caseStudies.find(study => study.id === selectedCase)?.longDescription.split('\n').map((p, i) => (
                    <p key={i} className="text-gray-300 leading-relaxed mb-4">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
