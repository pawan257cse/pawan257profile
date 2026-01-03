import React from 'react';
import { MapPin, GraduationCap, Users, MessageCircle, Heart, Star, Sparkles, Award, Code2, Languages } from 'lucide-react';
import { useTheme } from '../App';

// SVG icons for app logos
const appLogos = [
  {
    name: 'HTML5',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><path d="M6 28L3 4h26l-3 24-10 3-10-3z" fill="#E44D26"/><path d="M16 27l8-2.2 2.6-21.2H16V27z" fill="#F16529"/><path d="M16 13h-4l-.3-3H16V7h-7l.1 1.2 1 11.2H16v-2zm0 7.7l-.1.1-3.3-.9-.2-2.2H9.5l.3 3.7 6.2 1.7.1-.1V20.7zm7.2-8.7l-.2 2.2H16v2h3.1l-.3 3.1-2.8.8v2.1l6.2-1.7.1-1.1.6-6.4H16v2h7.2z" fill="#fff"/></svg>
    ),
    style: { top: '-20px', left: '60px', animationDelay: '0s' }
  },
  {
    name: 'CSS3',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><path d="M6 28L3 4h26l-3 24-10 3-10-3z" fill="#1572B6"/><path d="M16 27l8-2.2 2.6-21.2H16V27z" fill="#33A9DC"/><path d="M16 13h-4l-.3-3H16V7h-7l.1 1.2 1 11.2H16v-2zm0 7.7l-.1.1-3.3-.9-.2-2.2H9.5l.3 3.7 6.2 1.7.1-.1V20.7zm7.2-8.7l-.2 2.2H16v2h3.1l-.3 3.1-2.8.8v2.1l6.2-1.7.1-1.1.6-6.4H16v2h7.2z" fill="#fff"/></svg>
    ),
    style: { top: '10px', left: '120px', animationDelay: '0.5s' }
  },
  {
    name: 'JavaScript',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><path d="M19.7 23.2c.4.7.8 1.3 1.7 1.3.8 0 1.3-.3 1.3-1.6v-7.1h2.2v7.2c0 2.3-1.3 3.3-3.1 3.3-1.7 0-2.7-.9-3.2-2l1.1-.7zm-7.2.1c.2.4.4.7.9.7.5 0 .8-.2.8-.9v-7.1h2.2v7.2c0 2.3-1.3 3.3-3.1 3.3-1.7 0-2.7-.9-3.2-2l1.1-.7z" fill="#000"/></svg>
    ),
    style: { top: '80px', left: '0px', animationDelay: '1s' }
  },
  {
    name: 'React',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="11" ry="4.5" stroke="#61DAFB" strokeWidth="2"/><ellipse cx="16" cy="16" rx="4.5" ry="11" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="4.5" ry="11" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 16 16)"/></svg>
    ),
    style: { top: '120px', left: '60px', animationDelay: '1.5s' }
  },
  {
    name: 'Git',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><rect width="32" height="32" rx="6" fill="#F34F29"/><path d="M22.6 17.1l-7.7-7.7c-.4-.4-1-.4-1.4 0l-2.1 2.1c-.4.4-.4 1 0 1.4l7.7 7.7c.4.4 1 .4 1.4 0l2.1-2.1c.4-.4.4-1 0-1.4z" fill="#fff"/></svg>
    ),
    style: { top: '100px', left: '140px', animationDelay: '2s' }
  },
  {
    name: 'VS Code',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><rect width="32" height="32" rx="6" fill="#007ACC"/><path d="M10.6 21.6l-3.2-3.2c-.4-.4-.4-1 0-1.4l3.2-3.2c.4-.4 1-.4 1.4 0l3.2 3.2c.4.4.4 1 0 1.4l-3.2 3.2c-.4.4-1 .4-1.4 0z" fill="#fff"/></svg>
    ),
    style: { top: '40px', left: '-30px', animationDelay: '2.5s' }
  },
  {
    name: 'Figma',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><rect width="32" height="32" rx="6" fill="#fff"/><circle cx="16" cy="10" r="4" fill="#F24E1E"/><circle cx="16" cy="22" r="4" fill="#A259FF"/><circle cx="10" cy="16" r="4" fill="#0ACF83"/><circle cx="22" cy="16" r="4" fill="#1ABCFE"/><circle cx="16" cy="16" r="4" fill="#FF7262"/></svg>
    ),
    style: { top: '140px', left: '100px', animationDelay: '3s' }
  },
  {
    name: 'Python',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><rect width="32" height="32" rx="6" fill="#306998"/><path d="M16 7c-2.2 0-4 1.8-4 4v2h8V11c0-2.2-1.8-4-4-4zm-6 4c0-3.3 2.7-6 6-6s6 2.7 6 6v2c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2v-2zm-2 8c0 2.2 1.8 4 4 4h2v-8H11c-2.2 0-4 1.8-4 4zm6 4c3.3 0 6-2.7 6-6v-2c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v2c0 3.3 2.7 6 6 6z" fill="#FFD43B"/></svg>
    ),
    style: { top: '60px', left: '160px', animationDelay: '3.5s' }
  },
  {
    name: 'C++',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><rect width="32" height="32" rx="6" fill="#00599C"/><path d="M16 7l9 5v8l-9 5-9-5V12l9-5zm0 2.2L8.8 12v8l7.2 4 7.2-4v-8L16 9.2zm-2.2 5.8h4.4v2h-4.4v-2zm0 3h4.4v2h-4.4v-2z" fill="#fff"/></svg>
    ),
    style: { top: '0px', left: '100px', animationDelay: '4s' }
  },
  {
    name: 'AWS',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#FF9900"/><text x="8" y="22" fontSize="10" fill="#fff">AWS</text></svg>
    ),
    style: { top: '120px', left: '200px', animationDelay: '1.5s' }
  },
  {
    name: 'Docker',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><rect width="32" height="32" rx="6" fill="#2496ED"/><text x="4" y="22" fontSize="10" fill="#fff">Docker</text></svg>
    ),
    style: { top: '180px', left: '80px', animationDelay: '2s' }
  },
  {
    name: 'MongoDB',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#47A248"/><text x="2" y="22" fontSize="10" fill="#fff">Mongo</text></svg>
    ),
    style: { top: '60px', left: '250px', animationDelay: '2.5s' }
  },
  {
    name: 'Python',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><rect width="32" height="32" rx="6" fill="#3776AB"/><text x="4" y="22" fontSize="10" fill="#fff">Py</text></svg>
    ),
    style: { top: '200px', left: '150px', animationDelay: '3s' }
  },
  {
    name: 'Linux',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#333"/><text x="4" y="22" fontSize="10" fill="#fff">Linux</text></svg>
    ),
    style: { top: '30px', left: '300px', animationDelay: '3.5s' }
  },
];

const About = () => {
  const { isDarkMode } = useTheme();
  const stats = [
    { 
      icon: GraduationCap, 
      label: 'Education', 
      value: 'B.Tech CSE',
      description: 'Computer Science Engineering',
      color: 'from-emerald-400 to-teal-400',
      bgColor: 'bg-gradient-to-r from-emerald-400 to-teal-400'
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'Jaipur, India',
      description: 'Based in India',
      color: 'from-teal-400 to-cyan-400',
      bgColor: 'bg-gradient-to-r from-teal-400 to-cyan-400'
    },
    { 
      icon: Users, 
      label: 'Team Player', 
      value: '5+ Projects',
      description: 'Collaborative work',
      color: 'from-cyan-400 to-blue-400',
      bgColor: 'bg-gradient-to-r from-cyan-400 to-blue-400'
    },
    { 
      icon: Languages, 
      label: 'Languages', 
      value: 'Hindi, English',
      description: 'Communication skills',
      color: 'from-blue-400 to-indigo-400',
      bgColor: 'bg-gradient-to-r from-blue-400 to-indigo-400'
    },
  ];

  const highlights = [
    {
      icon: Star,
      title: 'Passionate Developer',
      description: 'Love creating beautiful and functional web experiences',
      color: 'text-amber-400'
    },
    {
      icon: Heart,
      title: 'Team Collaboration',
      description: 'Thrive in collaborative environments and team projects',
      color: 'text-rose-400'
    },
    {
      icon: Sparkles,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and best practices',
      color: 'text-purple-400'
    },
    {
      icon: Award,
      title: 'Problem Solver',
      description: 'Enjoy tackling complex challenges with creative solutions',
      color: 'text-sky-400'
    }
  ];

  const techStack = [
    { name: 'React', color: 'bg-blue-500' },
    { name: 'TypeScript', color: 'bg-blue-600' },
    { name: 'Tailwind CSS', color: 'bg-cyan-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'HTML5', color: 'bg-orange-500' },
    { name: 'CSS3', color: 'bg-blue-400' },
    { name: 'Git', color: 'bg-orange-600' },
    { name: 'VS Code', color: 'bg-blue-500' },
    { name: 'Figma', color: 'bg-purple-500' },
    { name: 'Python', color: 'bg-blue-600' },
    { name: 'C++', color: 'bg-blue-700' },
    { name: 'Node.js', color: 'bg-green-600' }
  ];

  return (
    <section id="about" className={`py-12 sm:py-16 md:py-20 relative overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/50'
    }`}>
      {/* Floating Tech Logos */}
      <div className="absolute inset-0 pointer-events-none">
        {appLogos.map((logo, index) => (
          <div
            key={index}
            className="absolute floating-logo opacity-10 transition-opacity duration-300"
            style={logo.style}
            title={logo.name}
          >
            {logo.svg}
          </div>
        ))}
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-br from-emerald-600/10 to-teal-600/10' 
            : 'bg-gradient-to-br from-emerald-200/10 to-teal-200/10'
        }`}></div>
        <div className={`absolute bottom-20 right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-br from-cyan-600/10 to-blue-600/10' 
            : 'bg-gradient-to-br from-cyan-200/10 to-blue-200/10'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-br from-teal-600/5 to-emerald-600/5' 
            : 'bg-gradient-to-br from-teal-200/5 to-emerald-200/5'
        }`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm border rounded-full shadow-lg mb-4 sm:mb-6 ${
              isDarkMode 
                ? 'bg-gray-800/90 border-emerald-200 shadow-emerald-100/50' 
                : 'bg-white/90 border-emerald-200 shadow-emerald-100/50'
            }`}>
              <Sparkles size={16} className="text-emerald-500 mr-2 sm:w-[18px] sm:h-[18px]" />
              <span className="text-emerald-600 font-medium text-xs sm:text-sm uppercase tracking-wider">About Me</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Get to Know{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Pawan Kumar
              </span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Passionate about creating digital experiences that make a difference in people's lives
            </p>
          </div>

          {/* Mission Statement - Enhanced Quote Block */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className={`backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border max-w-4xl mx-auto transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-emerald-600/10 via-teal-600/10 to-cyan-600/10 border-emerald-700/70 shadow-gray-800/30' 
                : 'bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border-emerald-200/70 shadow-emerald-100/30'
            }`}>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <Sparkles className="text-white sm:w-[28px] sm:h-[28px]" size={20} />
                </div>
                <h4 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>My Mission</h4>
                <blockquote className={`text-lg sm:text-xl md:text-2xl italic leading-relaxed font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "To create beautiful, functional, and accessible web experiences that solve real problems 
                  and make technology more human-centered."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start mb-12 sm:mb-16 md:mb-20">
            {/* Left Content - Story */}
            <div className="space-y-8 sm:space-y-10">
              <div className={`backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/90 border-gray-700 shadow-gray-800/30 hover:shadow-gray-700/50' 
                  : 'bg-white/90 border-emerald-100/70 shadow-emerald-100/30 hover:shadow-emerald-100/50'
              }`}>
                <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 flex items-center ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl mr-3 sm:mr-4 flex items-center justify-center shadow-md">
                    <Heart className="text-white sm:w-5 sm:h-5" size={16} />
                  </div>
                  My Journey
                </h3>
                <div className={`space-y-4 sm:space-y-5 leading-relaxed text-base sm:text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <p>
                    I am a Computer Science Engineering student from{' '}
                    <span className="font-semibold text-emerald-600">Vivekananda Global University</span>, 
                    passionate about creating efficient, responsive, and beautiful websites. My journey in tech 
                    started with curiosity about how websites work, and it has evolved into a passion for 
                    creating digital experiences.
                  </p>
                  <p>
                    I thrive in team environments and am always exploring new technologies to solve real-world 
                    problems. My approach combines{' '}
                    <span className="font-semibold text-teal-600">technical expertise</span> with{' '}
                    <span className="font-semibold text-cyan-600">creative thinking</span> to deliver 
                    solutions that not only work well but also provide exceptional user experiences.
                  </p>
                  <p>
                    When I'm not coding, I enjoy participating in hackathons, contributing to open-source 
                    projects, and learning about emerging technologies that can shape the future of web development.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={`backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border transition-all duration-300 transform hover:-translate-y-1 ${
                      isDarkMode 
                        ? 'bg-gray-800/90 border-gray-700 shadow-gray-800/30 hover:shadow-gray-700/50' 
                        : 'bg-white/90 border-emerald-100/70 shadow-emerald-100/30 hover:shadow-emerald-200/50'
                    }`}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-sm border ${
                      isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-emerald-100'
                    }`}>
                      <highlight.icon className={`${highlight.color} sm:w-[22px] sm:h-[22px]`} size={18} />
                    </div>
                    <h4 className={`font-bold text-lg mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>{highlight.title}</h4>
                    <p className={`text-sm sm:text-base ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="space-y-6 sm:space-y-8">
              <div className={`backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/90 border-gray-700 shadow-gray-800/30' 
                  : 'bg-white/90 border-emerald-100/70 shadow-emerald-100/30'
              }`}>
                <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 flex items-center ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl mr-3 sm:mr-4 flex items-center justify-center shadow-md">
                    <Star className="text-white sm:w-5 sm:h-5" size={16} />
                  </div>
                  Quick Facts
                </h3>
                
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`group backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border transition-all duration-300 transform hover:-translate-y-1 ${
                        isDarkMode 
                          ? 'bg-gray-800/90 border-gray-700 shadow-gray-800/20 hover:shadow-gray-700/40' 
                          : 'bg-white/90 border-emerald-100/70 shadow-emerald-100/20 hover:shadow-emerald-200/40'
                      }`}
                    >
                      <div className="flex items-center space-x-3 sm:space-x-5">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 ${stat.bgColor} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:opacity-90 transition-all`}>
                          <stat.icon className="text-white sm:w-[26px] sm:h-[26px]" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className={`text-xs sm:text-sm uppercase tracking-wider font-medium ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>{stat.label}</p>
                          <p className={`font-bold text-lg sm:text-xl mt-1 mb-1 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>{stat.value}</p>
                          <p className={`text-sm sm:text-base ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>{stat.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className={`backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/90 border-gray-700 shadow-gray-800/30' 
                  : 'bg-white/90 border-emerald-100/70 shadow-emerald-100/30'
              }`}>
                <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 flex items-center ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl mr-3 sm:mr-4 flex items-center justify-center shadow-md">
                    <Code2 className="text-white sm:w-5 sm:h-5" size={16} />
                  </div>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 sm:px-4 py-1 sm:py-2 ${tech.color} text-white text-xs sm:text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className={`backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border max-w-2xl mx-auto transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800/90 border-gray-700 shadow-gray-800/30' 
                : 'bg-white/90 border-emerald-100/70 shadow-emerald-100/30'
            }`}>
              <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Let's Build Something Amazing Together
              </h3>
              <p className={`text-base sm:text-lg mb-6 sm:mb-7 max-w-lg mx-auto ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm always excited to collaborate on new projects and explore innovative solutions. 
                Whether you have an idea or just want to connect, I'd love to hear from you!
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-200/50 hover:shadow-emerald-300/50 text-base sm:text-lg"
              >
                <MessageCircle className="mr-2 sm:mr-3 sm:w-[22px] sm:h-[22px]" size={18} />
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;