import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Brain, Code, Star, Trophy, Users, Target } from 'lucide-react';
import { useTheme } from '../App';

const Education = () => {
  const { isDarkMode } = useTheme();

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science & Engineering',
      institution: 'Vivekananda Global University',
      location: 'Jaipur, India',
      period: '2022 - Present',
      expectedGraduation: '2026',
      status: 'In Progress',
      description: 'Comprehensive study of computer science fundamentals with specialization in Web Development & AI/ML, combining theoretical knowledge with practical applications.',
      highlights: [
        'Specialized in Web Development & AI/ML',
        'Active participant in coding competitions and hackathons',
        'Member of technical clubs and coding societies',
        'Strong foundation in programming languages and algorithms',
        'Hands-on experience with modern development tools and frameworks'
      ],
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Software Engineering',
        'Cloud Computing',
        'Machine Learning Fundamentals',
        'Web Technologies',
        'Computer Networks'
      ],
      achievements: [
        'Consistent academic performance',
        'Active participation in technical events',
        'Completed multiple hands-on projects',
        'Collaborated on team-based assignments'
      ],
      color: 'from-cyan-400 to-blue-500',
      icon: GraduationCap,
      featured: true
    },
    {
      degree: 'Higher Secondary (12th)',
      field: 'Science Stream - PCM',
      institution: 'Kisan Majdur Inter College',
      location: 'Tari, Siwan, Bihar',
      period: '2018 - 2020',
      status: 'Completed',
      description: 'Completed higher secondary education with focus on Physics, Chemistry, and Mathematics, developing strong analytical and problem-solving skills.',
      highlights: [
        'Strong foundation in Mathematics and Physics',
        'Developed analytical thinking and problem-solving skills',
        'Participated in science exhibitions and competitions',
        'Excellent academic performance in PCM subjects',
        'Built logical reasoning and critical thinking abilities'
      ],
      coursework: [
        'Physics',
        'Chemistry', 
        'Mathematics',
        'English',
        'Computer Science'
      ],
      achievements: [
        'Consistent academic excellence',
        'Active participation in science fairs',
        'Strong foundation for engineering studies'
      ],
      color: 'from-green-400 to-emerald-500',
      icon: BookOpen
    },
    {
      degree: 'Secondary School (10th)',
      field: 'General Studies',
      institution: 'Kisan Majdur High School',
      location: 'Tari, Siwan, Bihar',
      period: '2017 - 2018',
      status: 'Completed',
      description: 'Completed secondary education with a well-rounded curriculum, establishing a solid foundation for higher studies.',
      highlights: [
        'Solid academic foundation across all subjects',
        'Participated in extracurricular activities and sports',
        'Developed communication and leadership skills',
        'Consistent academic performance',
        'Built strong study habits and time management skills'
      ],
      coursework: [
        'Mathematics',
        'Science',
        'Social Studies',
        'English',
        'Hindi'
      ],
      achievements: [
        'Good academic standing',
        'Active in school activities',
        'Developed foundational skills'
      ],
      color: 'from-purple-400 to-pink-500',
      icon: Award
    },
  ];

  return (
    <section id="education" className={`py-12 sm:py-16 md:py-20 relative overflow-hidden transition-colors duration-300 ${
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
              <GraduationCap size={16} className="text-emerald-500 mr-2 sm:w-[18px] sm:h-[18px]" />
              <span className="text-emerald-600 font-medium text-xs sm:text-sm uppercase tracking-wider">Education</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Academic{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My educational background combining theoretical knowledge with practical skills in computer science, AI/ML, and web development.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 sm:space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border transition-all duration-300 hover:-translate-y-1 ${
                  edu.featured 
                    ? `ring-2 ring-cyan-400/50 ${
                        isDarkMode 
                          ? 'bg-gradient-to-br from-gray-800/90 via-cyan-900/20 to-gray-800/90 border-cyan-500/30 shadow-cyan-500/20' 
                          : 'bg-gradient-to-br from-white/90 via-cyan-50/30 to-white/90 border-cyan-200/70 shadow-cyan-100/30'
                      }`
                    : isDarkMode 
                      ? 'bg-gray-800/90 border-gray-700 shadow-gray-800/30 hover:shadow-gray-700/50' 
                      : 'bg-white/90 border-emerald-100/70 shadow-emerald-100/30 hover:shadow-emerald-200/50'
                }`}
              >
                {/* Featured Badge */}
                {edu.featured && (
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-white text-xs sm:text-sm font-semibold mr-3">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Current Education
                    </div>
                    <div className="flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full text-white text-xs sm:text-sm font-semibold">
                      <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      AI/ML Focus
                    </div>
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-start mb-4 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg`}>
                        <edu.icon className="text-white sm:w-[28px] sm:h-[28px]" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>{edu.degree}</h3>
                        <p className={`text-lg sm:text-xl font-semibold mb-1 sm:mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>{edu.field}</p>
                        <p className={`text-base sm:text-lg font-medium mb-1 sm:mb-2 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>{edu.institution}</p>
                        {edu.expectedGraduation && (
                          <p className={`text-sm sm:text-base ${
                            isDarkMode ? 'text-cyan-300' : 'text-cyan-600'
                          }`}>
                            <span className="font-medium">Expected Graduation:</span> {edu.expectedGraduation}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-sm sm:text-base">
                      <div className={`flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded-full ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}>
                        <Calendar size={14} className="sm:w-4 sm:h-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                      <div className={`flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded-full ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}>
                        <MapPin size={14} className="sm:w-4 sm:h-4 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                      <span className={`px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r ${edu.color} text-white rounded-full font-medium`}>
                          {edu.status}
                        </span>
                    </div>

                    {/* Description */}
                    <p className={`mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {edu.description}
                    </p>

                    {/* Coursework */}
                    {edu.coursework && (
                      <div className="mb-4 sm:mb-6">
                        <h4 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-emerald-500" />
                          Key Coursework:
                        </h4>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {edu.coursework.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 ${
                                isDarkMode 
                                  ? 'bg-gray-700/50 text-gray-200 hover:bg-gray-600/50' 
                                  : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300'
                              }`}
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Highlights */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-emerald-500" />
                        Key Highlights:
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start">
                            <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${
                              edu.featured ? 'bg-cyan-400' : 'bg-emerald-400'
                            }`}></div>
                            <span className={`text-sm sm:text-base leading-relaxed ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    {edu.achievements && (
                      <div>
                        <h4 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-emerald-500" />
                          Achievements:
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${
                                edu.featured ? 'bg-cyan-400' : 'bg-emerald-400'
                              }`}></div>
                              <span className={`text-sm sm:text-base leading-relaxed ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-700'
                              }`}>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Summary */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <div className={`backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border max-w-4xl mx-auto transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-emerald-600/10 via-teal-600/10 to-cyan-600/10 border-emerald-500/30 shadow-emerald-500/20' 
                : 'bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border-emerald-200/70 shadow-emerald-100/30'
            }`}>
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <Brain className="text-white sm:w-[32px] sm:h-[32px]" size={24} />
                </div>
                <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Academic & Practical Excellence
                </h3>
                <p className={`text-base sm:text-lg mb-6 sm:mb-7 max-w-3xl mx-auto leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Combining my <strong>B.Tech in Computer Science & Engineering</strong> with hands-on <strong>AI/ML training at LinuxWorld</strong>, 
                  I bridge <strong>academic theory</strong> (algorithms, data structures, software engineering) with <strong>practical AI/ML skills</strong> 
                  (TensorFlow, LangChain, cloud computing). Passionate about building intelligent systems and scalable solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <div className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base ${
                    isDarkMode 
                      ? 'bg-gray-700/50 text-gray-200 border border-gray-600' 
                      : 'bg-white/50 text-gray-700 border border-gray-200'
                  }`}>
                    <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-emerald-500" />
                    Web Development & AI/ML
                  </div>
                  <div className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base ${
                    isDarkMode 
                      ? 'bg-gray-700/50 text-gray-200 border border-gray-600' 
                      : 'bg-white/50 text-gray-700 border border-gray-200'
                  }`}>
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-emerald-500" />
                    Team Collaboration
                  </div>
                  <div className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base ${
                    isDarkMode 
                      ? 'bg-gray-700/50 text-gray-200 border border-gray-600' 
                      : 'bg-white/50 text-gray-700 border border-gray-200'
                  }`}>
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-emerald-500" />
                    Problem Solving
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;