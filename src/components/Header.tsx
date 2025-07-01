import React from 'react';
import { Menu, X } from 'lucide-react';
import usg from '../components/images/usg.jpeg';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <header className="relative z-50">
      <nav className="px-6 py-4 backdrop-blur-md bg-black/80 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo as image */}
          <img
  src={usg}
  alt="Nation Immersivo Logo"
  onClick={() => setCurrentPage('home')}
  className="cursor-pointer rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-19,5 md:h-19,5 lg:w-18 lg:h-18 object-cover hover:ring-4 hover:ring-purple-500 transition-all duration-300"
/>



          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (currentPage !== 'home') {
                    setCurrentPage('home');
                    setTimeout(() => scrollToSection(item.id), 100);
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                className="text-white hover:text-purple-400 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage('booking')}
            className="hidden md:block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Book a Call
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-purple-500/20">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (currentPage !== 'home') {
                      setCurrentPage('home');
                      setTimeout(() => scrollToSection(item.id), 100);
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className="block text-white hover:text-purple-400 transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setCurrentPage('booking');
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Book a Call
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
