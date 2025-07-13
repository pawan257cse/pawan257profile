import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-between space-y-4 sm:space-y-6 md:flex-row md:space-y-0">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-2">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">PK</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Building beautiful digital experiences, one line of code at a time.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 sm:space-y-4">
              <p className="text-gray-400 text-xs sm:text-sm flex items-center">
                Made with <Heart className="text-red-500 mx-1 sm:w-4 sm:h-4" size={14} /> by Pawan Kumar
              </p>
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white p-2 rounded-lg transition-colors duration-200 shadow-lg shadow-cyan-500/25"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Pawan Kumar. All rights reserved. | Designed & Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;