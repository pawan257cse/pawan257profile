import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Award, Brain, Code, Star, Trophy, ExternalLink } from 'lucide-react';
import { useTheme } from '../App';

const Experience = () => {
  const { isDarkMode } = useTheme();

  const experiences = [
    {
      title: 'AI/ML Research Intern',
      company: 'LinuxWorld Informatics Pvt. Ltd.',
      location: 'Jaipur, India',
      period: 'June 2025 - August 2025',
      type: 'Summer Internship',
      mentor: 'Mr. Vimal Daga (CTO & World Record Holder)',
      project: 'Build Autonomous AI Agents with ML/DL for Intelligent Task Execution and Decision-Making',
      description: 'Worked on cutting-edge AI research under the guidance of Mr. Vimal Daga, developing autonomous AI agents using Machine Learning and Deep Learning for intelligent task automation and decision-making.',
      achievements: [
        'Researched and developed autonomous AI agents using Machine Learning (ML) and Deep Learning (DL)',
        'Worked under the guidance of Mr. Vimal Daga, implementing cutting-edge AI solutions',
        'Focused on intelligent task automation and decision-making models',
        'Collaborated with a team to optimize AI performance for real-world applications',
        'Gained hands-on experience with advanced AI frameworks and cloud deployment'
      ],
      technologies: ['Python', 'TensorFlow/Keras', 'LangChain', 'OpenAI', 'AWS (Boto3)', 'Docker'],
      color: 'from-purple-400 to-pink-500',
      icon: Brain,
      certification: true,
      featured: true
    },
    {
      title: 'Web Development Intern',
      company: 'CodeClause Pvt. Ltd.',
      location: 'Remote',
      period: 'April 2024 - May 2024',
      type: 'Internship',
      project: 'Frontend Development & Interactive Web UI Creation',
      description: 'Focused on frontend development and creating interactive web user interfaces using modern web technologies.',
      achievements: [
        'Built responsive and interactive web interfaces using HTML, CSS, and JavaScript',
        'Enhanced frontend development skills, improving coding efficiency',
        'Collaborated with a remote team on multiple projects, following Agile practices',
        'Gained hands-on experience with modern web development practices',
        'Improved user experience through responsive design implementation'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Agile'],
      color: 'from-cyan-400 to-blue-500',
      icon: Code
    },
    {
      title: 'Programming Intern',
      company: 'InternPE',
      location: 'Remote',
      period: 'June 2024 - July 2024',
      type: 'Internship',
      project: 'Algorithm Development & Problem Solving',
      description: 'Specialized in C++ programming and algorithm development, focusing on problem-solving and code optimization.',
      achievements: [
        'Mastered C++ programming language and data structures',
        'Developed logical solutions for complex programming problems',
        'Improved algorithmic thinking and code optimization techniques',
        'Enhanced problem-solving skills through coding challenges',
        'Built efficient algorithms for various computational problems'
      ],
      technologies: ['C++', 'Data Structures', 'Algorithms', 'Problem Solving', 'STL'],
      color: 'from-green-400 to-emerald-500',
      icon: Briefcase
    },
  ];

  return (
    <section id="experience" className={`py-16 sm:py-20 md:py-24 relative overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/50'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-br from-emerald-600/10 to-teal-600/10' 
            : 'bg-gradient-to-br from-emerald-200/10 to-teal-200/10'
        }`}></div>
        <div className={`absolute bottom-10 right-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-br from-cyan-600/10 to-blue-600/10' 
            : 'bg-gradient-to-br from-cyan-200/10 to-blue-200/10'
        }`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm border rounded-full shadow-lg mb-4 sm:mb-6 ${
              isDarkMode 
                ? 'bg-gray-800/90 border-emerald-200 shadow-emerald-100/50' 
                : 'bg-white/90 border-emerald-200 shadow-emerald-100/50'
            }`}>
              <Briefcase size={16} className="text-emerald-500 mr-2 sm:w-[18px] sm:h-[18px]" />
              <span className="text-emerald-600 font-medium text-xs sm:text-sm uppercase tracking-wider">Experience</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Work Experience &{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Internships
              </span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My professional journey through internships and hands-on projects, gaining valuable experience in AI/ML, web development, and programming.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border transition-all duration-300 hover:-translate-y-1 ${
                  exp.featured 
                    ? `ring-2 ring-purple-400/50 ${
                        isDarkMode 
                          ? 'bg-gradient-to-br from-gray-800/90 via-purple-900/20 to-gray-800/90 border-purple-500/30 shadow-purple-500/20' 
                          : 'bg-gradient-to-br from-white/90 via-purple-50/30 to-white/90 border-purple-200/70 shadow-purple-100/30'
                      }`
                    : isDarkMode 
                      ? 'bg-gray-800/90 border-gray-700 shadow-gray-800/30 hover:shadow-gray-700/50' 
                      : 'bg-white/90 border-emerald-100/70 shadow-emerald-100/30 hover:shadow-emerald-200/50'
                }`}
              >
                {/* Featured Badge */}
                {exp.featured && (
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full text-white text-xs sm:text-sm font-semibold mr-3">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Featured Experience
                    </div>
                    {exp.certification && (
                      <div className="flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white text-xs sm:text-sm font-semibold">
                        <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Certified
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-start mb-4 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg`}>
                        <exp.icon className="text-white sm:w-[28px] sm:h-[28px]" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>{exp.title}</h3>
                        <p className={`text-lg sm:text-xl font-semibold mb-1 sm:mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>{exp.company}</p>
                        {exp.mentor && (
                          <p className={`text-sm sm:text-base mb-2 ${
                            isDarkMode ? 'text-purple-300' : 'text-purple-600'
                          }`}>
                            <span className="font-medium">Mentor:</span> {exp.mentor}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Project Info */}
                    {exp.project && (
                      <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl ${
                        isDarkMode ? 'bg-gray-700/50 border border-gray-600' : 'bg-emerald-50/50 border border-emerald-200'
                      }`}>
                        <p className={`text-sm sm:text-base font-medium ${
                          isDarkMode ? 'text-emerald-300' : 'text-emerald-700'
                        }`}>
                          <span className="font-semibold">Project:</span> {exp.project}
                        </p>
                      </div>
                    )}

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-sm sm:text-base">
                      <div className={`flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded-full ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}>
                        <Calendar size={14} className="sm:w-4 sm:h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className={`flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded-full ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}>
                        <MapPin size={14} className="sm:w-4 sm:h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                      <span className={`px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r ${exp.color} text-white rounded-full font-medium`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className={`mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-emerald-500" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <CheckCircle className={`mr-3 mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 ${
                              exp.featured ? 'text-purple-400' : 'text-emerald-400'
                            }`} />
                            <span className={`text-sm sm:text-base leading-relaxed ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h4 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-emerald-500" />
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certification Section */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <div className={`backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border max-w-4xl mx-auto transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-yellow-600/10 via-orange-600/10 to-red-600/10 border-yellow-500/30 shadow-yellow-500/20' 
                : 'bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 border-yellow-200/70 shadow-yellow-100/30'
            }`}>
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <Trophy className="text-white sm:w-[32px] sm:h-[32px]" size={24} />
                </div>
                <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  LinuxWorld Certification
                </h3>
                <p className={`text-base sm:text-lg mb-6 sm:mb-7 max-w-2xl mx-auto leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Certified by <strong>LinuxWorld Informatics Pvt. Ltd.</strong> for completing a <strong>2-month Summer Internship</strong> on <strong>"Autonomous AI Agents with ML/DL"</strong>, mentored by <strong>Mr. Vimal Daga (CTO & World Record Holder)</strong>.
                </p>
                <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-200/50 hover:shadow-yellow-300/50 text-base sm:text-lg">
                  <ExternalLink className="mr-2 sm:mr-3 sm:w-[22px] sm:h-[22px]" size={18} />
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;