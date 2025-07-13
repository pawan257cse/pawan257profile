import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import { useTheme } from '../App';

const sectionIds = ['home', 'about', 'skills', 'projects', 'certificates', 'experience', 'education', 'contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Optionally close menu on scroll
      setIsOpen(false);
      // Active section logic
      let found = 'home';
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = sectionIds[i];
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? isDarkMode
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-xl border-b border-gray-700' 
          : 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200'
        : isDarkMode
          ? 'bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-sm'
          : 'bg-gradient-to-r from-white/80 via-gray-50/80 to-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200/50">
                <span className="text-white font-bold text-sm sm:text-lg lg:text-xl">PK</span>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-xl sm:rounded-2xl blur-sm opacity-15"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Pawan Kumar
              </h1>
              <p className={`text-xs sm:text-sm flex items-center ${
                isDarkMode ? 'text-gray-300' : 'text-gray-500'
              }`}>
                <Sparkles size={10} className="mr-1 text-emerald-400" />
                Full stack developer
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-4 2xl:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative transition-all duration-300 font-medium text-xs 2xl:text-sm uppercase tracking-wide group whitespace-nowrap
                  ${activeSection === item.href.replace('#','')
                    ? isDarkMode
                      ? 'text-emerald-400' // active color dark
                      : 'text-emerald-600' // active color light
                    : isDarkMode
                      ? 'text-gray-300 hover:text-emerald-400'
                      : 'text-gray-600 hover:text-emerald-600'}
                `}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 rounded-full
                  ${activeSection === item.href.replace('#','') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 blur-sm transition-all duration-300 rounded-full
                  ${activeSection === item.href.replace('#','') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Tablet Navigation (Compact) */}
          <div className="hidden lg:flex xl:hidden items-center space-x-3">
            {navItems.slice(0, 6).map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative transition-all duration-300 font-medium text-xs uppercase tracking-wide group whitespace-nowrap
                  ${activeSection === item.href.replace('#','')
                    ? isDarkMode
                      ? 'text-emerald-400'
                      : 'text-emerald-600'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-emerald-400'
                      : 'text-gray-600 hover:text-emerald-600'}
                `}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 rounded-full
                  ${activeSection === item.href.replace('#','') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
            
            {/* More Menu for Tablet */}
            <div className="relative group">
              <button className="px-2 py-1 text-xs font-medium text-gray-500 hover:text-emerald-600 transition-colors">
                More ▼
              </button>
              <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {navItems.slice(6).map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-3 py-2 text-xs transition-colors rounded-md ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-emerald-400 hover:bg-gray-700' 
                        : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-300 rounded-xl ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-emerald-400 bg-gray-800' 
                  : 'text-gray-600 hover:text-emerald-600 bg-gray-100'
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`lg:hidden border-t transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gray-900/95 backdrop-blur-xl border-gray-700' 
            : 'bg-white/95 backdrop-blur-xl border-gray-200'
        }`}>
          <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 transition-all duration-300 rounded-xl font-medium text-sm ${
                  activeSection === item.href.replace('#','')
                    ? isDarkMode
                      ? 'text-emerald-400 bg-gray-800'
                      : 'text-emerald-600 bg-gray-100'
                    : isDarkMode 
                      ? 'text-gray-300 hover:text-emerald-400 hover:bg-gray-800' 
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-100'
                }`}
            >
              {item.name}
            </button>
          ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
