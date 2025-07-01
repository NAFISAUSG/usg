import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WhyChooseUs from './WhyChooseUs';
import CaseStudiesSection from './CaseStudiesSection';
import ServicesSection from './ServicesSection';
import ProcessSection from './ProcessSection';
import TeamSection from './TeamSection';
import FAQSection from './FAQSection';
import BookCallSection from './BookCallSection';

interface HomePageProps {
  onBookCall: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onBookCall }) => {
  return (
    <main>
      <HeroSection onBookCall={onBookCall} />
      <AboutSection />
      <WhyChooseUs onBookCall={onBookCall} />
      <CaseStudiesSection />
      <ServicesSection onBookCall={onBookCall} />
      <ProcessSection />
      <TeamSection />
      <FAQSection />
      <BookCallSection onBookCall={onBookCall} />
    </main>
  );
};

export default HomePage;