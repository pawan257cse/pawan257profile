import React, { useState } from 'react';
import { Code, Wrench, Star, Award, Users, Zap, Target, TrendingUp, Globe, Database, Cloud, Shield, GitBranch, Palette, Monitor } from 'lucide-react';
import { useTheme } from '../App';

const Skills = () => {
  const { isDarkMode } = useTheme();

  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'cloud'>('all');

  // Enhanced Technical Skills with categories and context
  const technicalSkills = {
    frontend: {
      title: "Frontend Development",
      icon: Monitor,
      color: "from-blue-400 to-cyan-500",
      skills: [
        { name: 'HTML5', level: 90, context: 'Semantic markup, accessibility' },
        { name: 'CSS3', level: 85, context: 'Flexbox, Grid, animations' },
        { name: 'JavaScript', level: 80, context: 'ES6+, DOM manipulation' },
        { name: 'React', level: 75, context: 'Hooks, state management' },
        { name: 'TypeScript', level: 70, context: 'Type safety, interfaces' },
        { name: 'Tailwind CSS', level: 85, context: 'Utility-first styling' }
      ]
    },
    backend: {
      title: "Backend & Programming",
      icon: Database,
      color: "from-green-400 to-emerald-500",
      skills: [
        { name: 'Python', level: 75, context: 'Data structures, algorithms' },
        { name: 'Java', level: 70, context: 'OOP, collections framework' },
        { name: 'C++', level: 65, context: 'Memory management, STL' },
        { name: 'C', level: 60, context: 'Pointers, data structures' },
        { name: 'Node.js', level: 65, context: 'Server-side JavaScript' }
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: 'AWS', level: 60, context: 'EC2, S3, Lambda basics' },
        { name: 'Docker', level: 55, context: 'Containerization' },
        { name: 'Git', level: 85, context: 'Version control, collaboration' },
        { name: 'Linux', level: 70, context: 'CLI, system administration' }
      ]
    }
  };

  // Enhanced Tools & Technologies with categories
  const tools = {
    development: {
      title: "Development Tools",
      icon: Wrench,
      color: "from-orange-400 to-red-500",
      tools: ['VS Code', 'Git & GitHub', 'Chrome DevTools', 'Postman', 'Docker Desktop']
    },
    design: {
      title: "Design & Creative",
      icon: Palette,
      color: "from-pink-400 to-rose-500",
      tools: ['Figma', 'Photoshop', 'Canva', 'Adobe XD']
    },
    productivity: {
      title: "Productivity",
      icon: Zap,
      color: "from-yellow-400 to-orange-500",
      tools: ['Microsoft Office', 'Excel', 'Notion', 'Slack', 'Trello']
    }
  };

  // Enhanced Soft Skills with metrics/examples
  const softSkills = [
    {
      skill: 'Problem Solving',
      icon: Target,
      description: 'Debugged complex API issues reducing response time by 25%',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      skill: 'Team Collaboration',
      icon: Users,
      description: 'Led 5+ team projects improving workflow efficiency by 30%',
      color: 'from-green-400 to-emerald-500'
    },
    {
      skill: 'Communication',
      icon: Globe,
      description: 'Presented technical solutions to stakeholders effectively',
      color: 'from-purple-400 to-pink-500'
    },
    {
      skill: 'Time Management',
      icon: TrendingUp,
      description: 'Delivered projects on time with 95% client satisfaction',
      color: 'from-orange-400 to-red-500'
    },
    {
      skill: 'Creative Thinking',
      icon: Star,
      description: 'Innovated UI/UX solutions improving user engagement by 40%',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      skill: 'Adaptability',
      icon: Shield,
      description: 'Quickly learned new technologies and frameworks as needed',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  // Skill level indicator component
  const SkillLevel = ({ level }: { level: number }) => {
    const stars = Math.floor(level / 20);
    const hasHalfStar = level % 20 >= 10;
    
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={12}
            className={`${
              i < stars 
                ? 'text-yellow-400 fill-current' 
                : i === stars && hasHalfStar 
                  ? 'text-yellow-400 fill-current opacity-50' 
                  : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-xs text-gray-500 ml-2 font-medium">{level}%</span>
      </div>
    );
  };

  // Skill card component
  interface SkillCardProps {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    children: React.ReactNode;
    iconGradient: string;
    className?: string;
  }
  const SkillCard = ({ 
    title, 
    icon: Icon, 
    children, 
    iconGradient,
    className = ""
  }: SkillCardProps) => (
    <div className={`backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border transition-all duration-300 hover:-translate-y-1 ${
      isDarkMode 
        ? 'bg-gray-800/90 border-gray-700 shadow-gray-800/30 hover:shadow-gray-700/50' 
        : 'bg-white/90 border-emerald-100/70 shadow-emerald-100/30 hover:shadow-emerald-200/50'
    } ${className}`}>
      <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${iconGradient} rounded-xl mr-3 sm:mr-4 flex items-center justify-center shadow-md`}>
          <Icon className="text-white sm:w-5 sm:h-5" />
        </div>
        {title}
      </h3>
      {children}
    </div>
  );

  return (
    <section id="skills" className={`py-12 sm:py-16 md:py-20 relative overflow-hidden transition-colors duration-300 ${
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
              <Code size={16} className="text-emerald-500 mr-2 sm:w-[18px] sm:h-[18px]" />
              <span className="text-emerald-600 font-medium text-xs sm:text-sm uppercase tracking-wider">My Skills</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What I Bring to the{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Table
              </span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My blend of technical expertise and soft skills ensures I can build impactful solutions and collaborate effectively.
            </p>
          </div>

          {/* Technical Skills Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h3 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Technical Expertise
            </h3>
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-8" aria-label="Filter skills by category">
                {[
                  { id: 'all' as const, label: 'All Skills' },
                  { id: 'frontend' as const, label: 'Frontend' },
                  { id: 'backend' as const, label: 'Backend & Programming' },
                  { id: 'cloud' as const, label: 'Cloud & DevOps' },
                ].map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveCategory(filter.id)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                      activeCategory === filter.id
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-300/40'
                        : isDarkMode
                          ? 'bg-gray-800 text-gray-200 border border-gray-700 hover:border-emerald-400 hover:text-emerald-300'
                          : 'bg-white text-gray-700 border border-emerald-100 hover:border-emerald-400 hover:text-emerald-600 shadow-sm'
                    }`}
                    aria-pressed={activeCategory === filter.id}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                {(activeCategory === 'all'
                  ? Object.entries(technicalSkills)
                  : Object.entries(technicalSkills).filter(([key]) => key === activeCategory)
                ).map(([key, category]) => (
            <SkillCard 
                  key={key}
                  title={category.title}
                  icon={category.icon}
                  iconGradient={category.color}
            >
                  <div className="space-y-4 sm:space-y-5">
                    {category.skills.map((skill, index) => (
                  <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="flex justify-between items-center mb-2">
                          <span className={`font-semibold text-sm sm:text-base ${
                            isDarkMode ? 'text-white' : 'text-gray-800'
                          }`}>{skill.name}</span>
                          <SkillLevel level={skill.level} />
                    </div>
                        <div className={`w-full rounded-full h-2 sm:h-3 ${
                          isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                        }`}>
                      <div
                            className={`h-2 sm:h-3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency ${skill.level} percent`}
                      ></div>
                    </div>
                        <p className={`text-xs sm:text-sm mt-1 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>{skill.context}</p>
                  </div>
                ))}
              </div>
            </SkillCard>
              ))}
            </div>
          </div>

          {/* Tools & Technologies Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h3 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {Object.entries(tools).map(([key, category]) => (
            <SkillCard 
                  key={key}
                  title={category.title}
                  icon={category.icon}
                  iconGradient={category.color}
            >
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {category.tools.map((tool, index) => (
                  <div
                    key={index}
                        className={`text-center font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in-up text-sm sm:text-base ${
                          isDarkMode 
                            ? 'bg-gray-700/50 text-gray-200 hover:bg-gray-600/50' 
                            : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300'
                        }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </SkillCard>
              ))}
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h3 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Soft Skills & Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                  className={`backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border transition-all duration-300 hover:-translate-y-1 animate-fade-in-up ${
                    isDarkMode 
                      ? 'bg-gray-800/90 border-gray-700 shadow-gray-800/30 hover:shadow-gray-700/50' 
                      : 'bg-white/90 border-emerald-100/70 shadow-emerald-100/30 hover:shadow-emerald-200/50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
                    <skill.icon className="text-white sm:w-[28px] sm:h-[28px]" size={20} />
                  </div>
                  <h4 className={`font-bold text-lg sm:text-xl mb-3 sm:mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{skill.skill}</h4>
                  <p className={`text-sm sm:text-base leading-relaxed ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{skill.description}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className={`backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border max-w-2xl mx-auto transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800/90 border-gray-700 shadow-gray-800/30' 
                : 'bg-white/90 border-emerald-100/70 shadow-emerald-100/30'
            }`}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <Award className="text-white sm:w-[32px] sm:h-[32px]" size={24} />
              </div>
              <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Ready to Build Something Impactful?
              </h3>
              <p className={`text-base sm:text-lg mb-6 sm:mb-7 max-w-lg mx-auto ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Let's connect and explore how my skills can contribute to your next project or team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-200/50 hover:shadow-emerald-300/50 text-base sm:text-lg"
                >
                  <Users className="mr-2 sm:mr-3 sm:w-[22px] sm:h-[22px]" size={18} />
                  Let's Connect
                </button>
                <a
                  href="https://github.com/pawan257cse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 text-base sm:text-lg ${
                    isDarkMode 
                      ? 'border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white' 
                      : 'border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white'
                  }`}
                >
                  <GitBranch className="mr-2 sm:mr-3 sm:w-[22px] sm:h-[22px]" size={18} />
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;