import React from 'react';
import { Facebook, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">United Sustainable Growth</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              AI-powered marketing solutions for fitness brands. We help businesses transform their email lists into revenue-generating machines.
            </p>
            
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center hover:bg-purple-600/20 hover:border-purple-500/30 transition-colors">
                <Facebook className="text-purple-400" size={16} />
              </button>
              <button className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center hover:bg-purple-600/20 hover:border-purple-500/30 transition-colors">
                <Linkedin className="text-purple-400" size={16} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#process" className="text-gray-300 hover:text-purple-400 transition-colors">Process</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-purple-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-purple-400" size={16} />
                <span className="text-gray-300">nafisausg@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-purple-400" size={16} />
                <span className="text-gray-300">Lithuania</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © United Sustainable Growth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;