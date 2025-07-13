import React, { useState, useEffect } from 'react';
import { Download, ExternalLink, ArrowDown, MapPin, Calendar, Heart } from 'lucide-react';
import profileImg from '../assets/profile.png';
import resumePdf from '../assets/pawanvgu.pdf';
import { useTheme } from '../App';

interface LogoPosition {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  path: number;
}

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const roles = [
    'Fullstack Developer....',
    'React & Node.js ...',
    'Cloud (AWS)... ',
    'Docker & DevOps...',
    'Problem Solver...',
    'Python...'
  ];
  const [logoPositions, setLogoPositions] = useState<LogoPosition[]>([]);
  const { isDarkMode } = useTheme();

  // Typewriter effect state
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  // Tech icons data
  const techIcons = [
    { name: 'Red Hat', svg: (<svg viewBox="0 0 32 32"><path d="M16 7.2c-4.8 0-8.7 3.9-8.7 8.7 0 4.8 3.9 8.7 8.7 8.7 4.8 0 8.7-3.9 8.7-8.7 0-4.8-3.9-8.7-8.7-8.7zm0 15.1c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.9 6.4-6.4 6.4z" fill="#EE0000"/><path d="M16 10.7c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.1-2.3 5.1-5.1-2.3-5.1-5.1-5.1zm0 8.7c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6z" fill="#EE0000"/></svg>) },
    { name: 'VS Code', svg: (<svg viewBox="0 0 32 32"><path d="M29.01 5.03l-4.89-3.2c-.66-.43-1.51-.4-2.14.08l-12.7 9.98-5.57-4.41c-.62-.5-1.5-.41-2.02.22l-2.15 2.53c-.52.62-.43 1.5.22 2.02l4.38 3.46-4.38 3.46c-.65.52-.74 1.4-.22 2.02l2.15 2.53c.52.62 1.4.72 2.02.22l5.57-4.41 12.7 9.98c.63.48 1.48.51 2.14.08l4.89-3.2c.66-.43 1.06-1.18 1.06-2.03V7.06c0-.85-.4-1.6-1.06-2.03z" fill="#007ACC"/></svg>) },
    { name: 'React', svg: (<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/><path d="M16 2.67c7.36 0 13.33 5.97 13.33 13.33S23.36 29.33 16 29.33 2.67 23.36 2.67 16 8.64 2.67 16 2.67zm0 24c5.89 0 10.67-4.77 10.67-10.67S21.89 5.33 16 5.33 5.33 10.11 5.33 16 10.11 26.67 16 26.67z" fill="#61DAFB"/></svg>) },
    { name: 'Node.js', svg: (<svg viewBox="0 0 32 32"><path d="M16 2.67C8.64 2.67 2.67 8.64 2.67 16S8.64 29.33 16 29.33 29.33 23.36 29.33 16 23.36 2.67 16 2.67zm0 24c-5.89 0-10.67-4.77-10.67-10.67S10.11 5.33 16 5.33 26.67 10.11 26.67 16 21.89 26.67 16 26.67z" fill="#339933"/><path d="M16 7.33c-4.78 0-8.67 3.89-8.67 8.67S11.22 24.67 16 24.67 24.67 20.78 24.67 16 20.78 7.33 16 7.33zm0 16c-4.02 0-7.33-3.31-7.33-7.33S11.98 8.67 16 8.67 23.33 11.98 23.33 16 20.02 23.33 16 23.33z" fill="#339933"/></svg>) },
    { name: 'JavaScript', svg: (<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><path d="M19.7 23.2c.4.7.8 1.3 1.7 1.3.8 0 1.3-.3 1.3-1.6v-7.1h2.2v7.2c0 2.3-1.3 3.3-3.1 3.3-1.7 0-2.7-.9-3.2-2l1.1-.7zm-7.2.1c.2.4.4.7.9.7.5 0 .8-.2.8-.9v-7.1h2.2v7.2c0 2.3-1.3 3.3-3.1 3.3-1.7 0-2.7-.9-3.2-2l1.1-.7z" fill="#000"/></svg>) },
    { name: 'HTML5', svg: (<svg viewBox="0 0 32 32"><path d="M6 28L3 4h26l-3 24-10 3-10-3z" fill="#E44D26"/><path d="M16 27l8-2.2 2.6-21.2H16V27z" fill="#F16529"/><path d="M16 13h-4l-.3-3H16V7h-7l.1 1.2 1 11.2H16v-2zm0 7.7l-.1.1-3.3-.9-.2-2.2H9.5l.3 3.7 6.2 1.7.1-.1V20.7zm7.2-8.7l-.2 2.2H16v2h3.1l-.3 3.1-2.8.8v2.1l6.2-1.7.1-1.1.6-6.4H16v2h7.2z" fill="#fff"/></svg>) },
    { name: 'CSS3', svg: (<svg viewBox="0 0 32 32"><path d="M6 28L3 4h26l-3 24-10 3-10-3z" fill="#1572B6"/><path d="M16 27l8-2.2 2.6-21.2H16V27z" fill="#33A9DC"/><path d="M16 13h-4l-.3-3H16V7h-7l.1 1.2 1 11.2H16v-2zm0 7.7l-.1.1-3.3-.9-.2-2.2H9.5l.3 3.7 6.2 1.7.1-.1V20.7zm7.2-8.7l-.2 2.2H16v2h3.1l-.3 3.1-2.8.8v2.1l6.2-1.7.1-1.1.6-6.4H16v2h7.2z" fill="#fff"/></svg>) },
    { name: 'Git', svg: (<svg viewBox="0 0 32 32"><path d="M16 2.67C8.64 2.67 2.67 8.64 2.67 16S8.64 29.33 16 29.33 29.33 23.36 29.33 16 23.36 2.67 16 2.67zm0 24c-5.89 0-10.67-4.77-10.67-10.67S10.11 5.33 16 5.33 26.67 10.11 26.67 16 21.89 26.67 16 26.67z" fill="#F05032"/><path d="M16 7.33c-4.78 0-8.67 3.89-8.67 8.67S11.22 24.67 16 24.67 24.67 20.78 24.67 16 20.78 7.33 16 7.33zm0 16c-4.02 0-7.33-3.31-7.33-7.33S11.98 8.67 16 8.67 23.33 11.98 23.33 16 20.02 23.33 16 23.33z" fill="#F05032"/></svg>) },
    // More icons
    { name: 'AWS', svg: (<svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#FF9900"/><text x="8" y="22" fontSize="10" fill="#fff">AWS</text></svg>) },
    { name: 'Docker', svg: (<svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><rect width="32" height="32" rx="6" fill="#2496ED"/><text x="4" y="22" fontSize="10" fill="#fff">Docker</text></svg>) },
    { name: 'MongoDB', svg: (<svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#47A248"/><text x="2" y="22" fontSize="10" fill="#fff">Mongo</text></svg>) },
    { name: 'Python', svg: (<svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><rect width="32" height="32" rx="6" fill="#3776AB"/><text x="4" y="22" fontSize="10" fill="#fff">Py</text></svg>) },
    { name: 'Linux', svg: (<svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#333"/><text x="4" y="22" fontSize="10" fill="#fff">Linux</text></svg>) },
  ];

  // Generate random positions for logos
  const generateRandomPositions = () => {
    return techIcons.map(() => ({
      x: Math.random() * 80 + 10, // 10-90%
      y: Math.random() * 80 + 10, // 10-90%
      size: Math.random() * 2 + 2, // 2-4rem
      duration: 15 + Math.random() * 15, // 15-30s
      delay: Math.random() * 5, // 0-5s
      path: Math.floor(Math.random() * 4) // 0-3 different paths
    }));
  };

  // Update positions periodically
  useEffect(() => {
    setIsMounted(true);
    
    // Initial positions
    setLogoPositions(generateRandomPositions());
    
    // Change positions every 30 seconds
    const positionInterval = setInterval(() => {
      setLogoPositions(generateRandomPositions());
    }, 30000);
    
    return () => {
      clearInterval(positionInterval);
    };
  }, []);

  // Typewriter effect logic
  useEffect(() => {
    const current = roles[currentRole];
    if (!isDeleting && displayedText.length < current.length) {
      setTimeout(() => {
        setDisplayedText(current.slice(0, displayedText.length + 1));
        setTypingSpeed(80);
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === current.length) {
      setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayedText.length > 0) {
      setTimeout(() => {
        setDisplayedText(current.slice(0, displayedText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }
  }, [displayedText, isDeleting, currentRole, roles, typingSpeed]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`relative min-h-screen py-16 md:py-24 overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-white via-gray-50/30 to-blue-50/50'
    }`}>
      {/* Floating tech logos - now visible on all devices */}
      {techIcons.map((icon, index) => {
        const pos = logoPositions[index] || {};
        return (
          <div
            key={`${icon.name}-${index}`}
            className="absolute z-0 opacity-60"
            style={{
              top: `${pos.y}%`,
              left: `${pos.x}%`,
              width: `${pos.size}rem`,
              height: `${pos.size}rem`,
              animation: `float-${pos.path} ${pos.duration}s linear ${pos.delay}s infinite`,
              willChange: 'transform'
            }}
          >
            <div className={`w-full h-full backdrop-blur-sm rounded-lg p-2 shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300 ${
              isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'
            }`}>
              {icon.svg}
            </div>
          </div>
        );
      })}

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-0 left-0 w-full h-full animate-gradient-xy ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-700/50 via-gray-600/50 to-gray-700/50' 
              : 'bg-gradient-to-br from-emerald-100/50 via-teal-100/50 to-cyan-100/50'
          }`}></div>
        </div>
        <div className={`absolute top-20 left-20 w-40 h-40 md:w-64 md:h-64 rounded-full blur-3xl animate-pulse ${
          isDarkMode 
            ? 'bg-gradient-to-br from-emerald-600/20 to-teal-600/20' 
            : 'bg-gradient-to-br from-emerald-200/20 to-teal-200/20'
        }`}></div>
        <div className={`absolute bottom-20 right-20 w-40 h-40 md:w-80 md:h-80 rounded-full blur-3xl animate-pulse delay-1000 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-cyan-600/15 to-blue-600/15' 
            : 'bg-gradient-to-br from-cyan-200/15 to-blue-200/15'
        }`}></div>
        <div className={`absolute top-1/3 left-1/4 w-32 h-32 md:w-48 md:h-48 rounded-full blur-3xl animate-pulse delay-1500 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-teal-600/15 to-emerald-600/15' 
            : 'bg-gradient-to-br from-teal-200/15 to-emerald-200/15'
        }`}></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${isDarkMode ? 'rgba(16,185,129,0.3)' : 'rgba(16,185,129,0.3)'} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 max-w-7xl mx-auto pt-16 pb-32 md:py-24">
          {/* Left Content - Text */}
          <div className={`w-full lg:w-1/2 text-center lg:text-left space-y-6 md:space-y-8 transition-all duration-1000 ease-out
            ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="space-y-4 md:space-y-6">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Hello, I'm{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                    Pawan
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 rounded-lg blur-md opacity-10"></div>
                </span>
              </h1>
              
              <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center lg:justify-start">
                <div className="relative h-6 sm:h-8 md:h-10">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent whitespace-nowrap">
                    {displayedText}
                    <span className="border-r-2 border-emerald-500 animate-pulse ml-1" style={{height: '1em', display: 'inline-block'}}></span>
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
              <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-800'
              }`}>
                Computer Science Engineering student passionate about creating{' '}
                <span className="font-semibold text-emerald-600">beautiful</span>,{' '}
                <span className="font-semibold text-teal-600">responsive</span>, and{' '}
                <span className="font-semibold text-cyan-600">efficient</span> web experiences.
              </p>
              <p className={`text-sm sm:text-base md:text-lg ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                I love collaborating with teams and exploring cutting-edge technologies to solve real-world challenges.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4">
              <a
                href={resumePdf}
                download
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 text-sm sm:text-base md:text-lg w-full sm:w-auto justify-center"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className={`flex items-center px-3 py-1.5 md:px-4 md:py-2 backdrop-blur-sm rounded-full border shadow-sm hover:shadow-md transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/80 border-emerald-600' 
                  : 'bg-white/80 border-emerald-100'
              }`}>
                <MapPin size={16} className="text-emerald-500 mr-2" />
                <span className={`text-sm md:text-base font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Jaipur, India</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center relative">
            <img
              src={profileImg}
              alt="Pawan"
              className="w-full max-w-md h-auto"
            />
            {/* Yellow wavy underline SVG below the image */}
            <div className="-mt-8 w-3/4 max-w-xs md:max-w-md lg:max-w-md">
              <svg viewBox="0 0 300 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 animate-underline-wave">
                <path d="M10 30 Q 50 10, 90 30 T 170 30 T 250 30 Q 270 35, 290 20" stroke="#FFD600" strokeWidth="8" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;