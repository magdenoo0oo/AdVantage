import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-black text-white">AdVantage Pro</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-bold text-sm lg:text-base">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-bold text-sm lg:text-base">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-bold text-sm lg:text-base">About</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-bold text-sm lg:text-base">Results</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-bold text-sm lg:text-base">Contact</button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 lg:px-6 py-2 rounded-lg font-black hover:from-red-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 animate-pulse text-sm lg:text-base">
              FREE AUDIT
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('home')} className="px-4 py-2 text-gray-300 hover:text-red-400 transition-colors duration-200 font-bold text-left">Home</button>
              <button onClick={() => scrollToSection('services')} className="px-4 py-2 text-gray-300 hover:text-red-400 transition-colors duration-200 font-bold text-left">Services</button>
              <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-gray-300 hover:text-red-400 transition-colors duration-200 font-bold text-left">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="px-4 py-2 text-gray-300 hover:text-red-400 transition-colors duration-200 font-bold text-left">Results</button>
              <button onClick={() => scrollToSection('contact')} className="px-4 py-2 text-gray-300 hover:text-red-400 transition-colors duration-200 font-bold text-left">Contact</button>
              <button onClick={() => scrollToSection('contact')} className="mx-4 mt-2 bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-2 rounded-lg font-black hover:from-red-700 hover:to-pink-700 transition-all duration-200 text-center block">
                FREE AUDIT
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;