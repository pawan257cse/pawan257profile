import React, { useState } from 'react';
import { ExternalLink, Github, Star, Calendar, Code, Database, Bot, Globe, Server, Terminal } from 'lucide-react';
import { useTheme } from '../App';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

  const projectCategories = [
    { id: 'all', name: 'All Projects', icon: <Code className="w-4 h-4" /> },
    { id: 'web', name: 'Web Development', icon: <Globe className="w-4 h-4" /> },
    { id: 'ai', name: 'AI/ML Projects', icon: <Bot className="w-4 h-4" /> },
    { id: 'python', name: 'Python Projects', icon: <Terminal className="w-4 h-4" /> },
    { id: 'docker', name: 'Docker Projects', icon: <Server className="w-4 h-4" /> },
    { id: 'linux', name: 'Linux Projects', icon: <Terminal className="w-4 h-4" /> },
    { id: 'git', name: 'Git & GitHub', icon: <Github className="w-4 h-4" /> },
  ];

  const projects = [
    // Web Development Projects
    {
      title: 'Portfolio Website',
      description: 'A fully responsive personal portfolio website built with modern web technologies. Features clean UI design, smooth animations, and optimized performance.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/pawan2570/portfolio',
      liveUrl: 'https://pawan2570.github.io/portfolio',
      featured: true,
      date: '2024',
      category: 'web',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Laptop with portfolio
    },
    {
      title: 'Syntax School Website',
      description: 'Educational platform website for programming tutorials and courses. Built with modern web technologies and responsive design.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      githubUrl: 'https://github.com/pawan2570/syntax-school',
      liveUrl: 'https://www.syntaxschool.in',
      featured: true,
      date: '2024',
      category: 'web',
      image: 'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Classroom/education
    },
    {
      title: 'Calculator App',
      description: 'A feature-rich calculator application with a clean interface. Supports basic arithmetic operations with responsive design and keyboard input.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
      githubUrl: 'https://github.com/pawan2570/calculator',
      liveUrl: 'https://pawan2570.github.io/calculator',
      featured: false,
      date: '2024',
      category: 'web',
      image: 'https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Calculator
    },
    {
      title: 'Webcam Photo Capture App',
      description: 'JavaScript application to access webcam and capture photos. Features real-time camera preview and photo download functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WebRTC', 'MediaDevices API'],
      githubUrl: 'https://github.com/pawan2570/webcam-capture',
      liveUrl: 'https://www.linkedin.com/posts/pawan-kumar-60a409251_webdevelopment-javascript-html5-activity-7348599025048137728-kfhg',
      featured: false,
      date: '2024',
      category: 'web',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Webcam/camera
    },
    {
      title: 'Email Sender App',
      description: 'JavaScript-based email sending application using EmailJS API. Features form validation and email templates.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'EmailJS', 'API Integration'],
      githubUrl: 'https://github.com/pawan2570/email-sender',
      liveUrl: 'https://www.linkedin.com/posts/pawan-kumar-60a409251_javascript-webdevelopment-emailjs-activity-7348602530458710016--GHX',
      featured: false,
      date: '2024',
      category: 'web',
      image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Email icon
    },
    {
      title: 'Video Recording App',
      description: 'JavaScript application to record videos using MediaRecorder API and send them via email with attachment functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MediaRecorder API', 'EmailJS'],
      githubUrl: 'https://github.com/pawan2570/video-recorder',
      liveUrl: '#',
      featured: false,
      date: '2024',
      category: 'web',
      image: 'https://images.pexels.com/photos/320617/pexels-photo-320617.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Video camera
    },
    {
      title: 'WhatsApp Integration App',
      description: 'JavaScript application to send WhatsApp messages using WhatsApp Web API and URL schemes.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API', 'Integration'],
      githubUrl: 'https://github.com/pawan2570/whatsapp-integration',
      liveUrl: '#',
      featured: false,
      date: '2024',
      category: 'web',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // WhatsApp/phone
    },

    // AI/ML Projects
    {
      title: 'Smart Agriculture Chatbot',
      description: 'AI-powered chatbot helping farmers choose optimal crops and fertilizers. Built for Code Red 4.0 hackathon where we reached Top 5 finalists.',
      technologies: ['AI/ML', 'Chatbot', 'Agriculture', 'Problem Solving'],
      githubUrl: 'https://github.com/pawan2570/agriculture-chatbot',
      liveUrl: '#',
      featured: true,
      date: '2024',
      category: 'ai',
      image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // AI/robot in agriculture
    },
    {
      title: 'Linear Regression Model',
      description: 'Machine learning model implemented in Python for predictive analysis. Deployed and run inside Docker container.',
      technologies: ['Python', 'Machine Learning', 'Docker', 'Data Analysis'],
      githubUrl: 'https://github.com/pawan2570/linear-regression',
      liveUrl: '#',
      featured: false,
      date: '2024',
      category: 'ai',
      image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Data analysis/graph
    },

    // Python Projects
    {
      title: 'Python Communication Suite',
      description: 'Comprehensive Python application for sending emails, SMS, WhatsApp messages, and making phone calls using various APIs.',
      technologies: ['Python', 'Twilio API', 'SMTP', 'Streamlit', 'API Integration'],
      githubUrl: 'https://github.com/pawan2570/python-communication',
      liveUrl: 'https://www.linkedin.com/posts/pawan-kumar-60a409251_python-twilio-streamlit-activity-7347708573965025281-oSV5',
      featured: true,
      date: '2024',
      category: 'python',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Communication/devices
    },
    {
      title: 'Python Email System',
      description: 'Python application to send emails using SMTP protocol with Streamlit interface for user-friendly interaction.',
      technologies: ['Python', 'SMTP', 'Streamlit', 'Email', 'Web Interface'],
      githubUrl: 'https://github.com/pawan2570/python-email',
      liveUrl: 'https://www.linkedin.com/posts/pawan-kumar-60a409251_python-streamlit-smtp-activity-7347696825270697984-RSTb',
      featured: false,
      date: '2024',
      category: 'python',
      image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Email icon
    },
    {
      title: 'Python SMS System',
      description: 'Python application to send SMS messages using Twilio API with Streamlit web interface.',
      technologies: ['Python', 'Twilio API', 'SMS', 'Streamlit', 'API Integration'],
      githubUrl: 'https://github.com/pawan2570/python-sms',
      liveUrl: 'https://www.linkedin.com/posts/pawan-kumar-60a409251_python-twilio-streamlit-activity-7347695241530855424-d0vx',
      featured: false,
      date: '2024',
      category: 'python',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // SMS/phone
    },
    {
      title: 'Python Phone Call System',
      description: 'Python application to make phone calls using Twilio API with automated calling functionality.',
      technologies: ['Python', 'Twilio API', 'Phone Calls', 'Streamlit', 'Automation'],
      githubUrl: 'https://github.com/pawan2570/python-calls',
      liveUrl: 'https://www.linkedin.com/posts/pawan-kumar-60a409251_python-twilioapi-streamlit-activity-7347693107716501504-knPn',
      featured: false,
      date: '2024',
      category: 'python',
      image: 'https://images.pexels.com/photos/339465/pexels-photo-339465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Phone call
    },
    {
      title: 'Flask Web Application',
      description: 'Python Flask web application deployed in Docker container. Features RESTful API and database integration.',
      technologies: ['Python', 'Flask', 'Docker', 'REST API', 'Database'],
      githubUrl: 'https://github.com/pawan2570/flask-app',
      liveUrl: '#',
      featured: false,
      date: '2024',
      category: 'python',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Flask/app
    },

    // Docker Projects
    {
      title: 'Docker Infrastructure Setup',
      description: 'Complete Docker infrastructure including Apache server, GUI applications, and Docker-in-Docker (DIND) setup.',
      technologies: ['Docker', 'Apache', 'Linux', 'DevOps', 'Containerization'],
      githubUrl: 'https://github.com/pawan2570/docker-infrastructure',
      liveUrl: '#',
      featured: true,
      date: '2024',
      category: 'docker',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Docker whale/infra
    },
    {
      title: 'Docker GUI Applications',
      description: 'Running graphical applications like Firefox and VLC inside Docker containers with X11 forwarding.',
      technologies: ['Docker', 'GUI', 'X11', 'Firefox', 'VLC'],
      githubUrl: 'https://github.com/pawan2570/docker-gui',
      liveUrl: '#',
      featured: false,
      date: '2024',
      category: 'docker',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // GUI app (Firefox/VLC)
    },
    {
      title: 'Docker Apache Server',
      description: 'Apache web server setup and configuration inside Docker container with custom configurations.',
      technologies: ['Docker', 'Apache', 'Web Server', 'Containerization', 'DevOps'],
      githubUrl: 'https://github.com/pawan2570/docker-apache',
      liveUrl: '#',
      featured: false,
      date: '2024',
      category: 'docker',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Apache server
    },
    {
      title: 'Docker-in-Docker (DIND)',
      description: 'Setup and configuration of Docker running inside another Docker container for DevOps workflows.',
      technologies: ['Docker', 'DIND', 'DevOps', 'Containerization', 'CI/CD'],
      githubUrl: 'https://github.com/pawan2570/docker-dind',
      liveUrl: '#',
      featured: false,
      date: '2024',
      category: 'docker',
      image: 'https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Docker in docker
    },
    {
      title: 'Docker Audio Support',
      description: 'Configuration to enable sound card access and audio functionality inside Docker containers.',
      technologies: ['Docker', 'Audio', 'Sound Card', 'PulseAudio', 'Containerization'],
      githubUrl: 'https://github.com/pawan2570/docker-audio',
      liveUrl: '#',
      featured: false,
      date: '2024',
      category: 'docker',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Audio/sound
    },
    {
      title: 'Docker Case Study Research',
      description: 'Comprehensive research and blog on why companies use Docker and the benefits they achieve in real-world scenarios.',
      technologies: ['Docker', 'Research', 'Case Study', 'DevOps', 'Documentation'],
      githubUrl: 'https://github.com/pawan2570/docker-case-study',
      liveUrl: 'https://www.linkedin.com/posts/pawan-kumar-60a409251_why-companies-use-docker-in-real-world-activity-7348249083603484674-WBp1',
      featured: false,
      date: '2024',
      category: 'docker',
      image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Research/analysis
    },

    // Linux Projects
    {
      title: 'Linux System Administration',
      description: 'Comprehensive Linux projects including GUI program analysis, system customization, and terminal automation.',
      technologies: ['Linux', 'System Administration', 'GUI', 'Terminal', 'Automation'],
      githubUrl: 'https://github.com/pawan2570/linux-projects',
      liveUrl: 'https://www.linkedin.com/posts/pawan-kumar-60a409251_linux-opensource-commands-activity-7348237456564965376-LDyZ',
      featured: true,
      date: '2024',
      category: 'linux',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Linux/terminal
    },
    {
      title: 'Linux Companies Research',
      description: 'Blog post research on companies using Linux, their benefits, and implementation strategies.',
      technologies: ['Linux', 'Research', 'Blog', 'Open Source', 'Enterprise'],
      githubUrl: 'https://github.com/pawan2570/linux-research',
      liveUrl: 'https://www.linkedin.com/posts/pawan-kumar-60a409251_linux-activity-7347711597340950528-G_bG',
      featured: false,
      date: '2024',
      category: 'linux',
      image: 'https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Research/companies
    },

    // Git & GitHub Projects
    {
      title: 'Git & GitHub Workflow',
      description: 'Complete Git workflow including repository management, branching strategies, and open-source contributions.',
      technologies: ['Git', 'GitHub', 'Version Control', 'Branching', 'Collaboration'],
      githubUrl: 'https://github.com/pawan2570/git-workflow',
      liveUrl: '#',
      featured: true,
      date: '2024',
      category: 'git',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Git/GitHub
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className={`py-12 sm:py-16 md:py-20 relative overflow-hidden transition-colors duration-300 ${
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
              <Database size={16} className="text-emerald-500 mr-2 sm:w-[18px] sm:h-[18px]" />
              <span className="text-emerald-600 font-medium text-xs sm:text-sm uppercase tracking-wider">My Projects</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What I Built for the{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                World
              </span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My blend of real-world projects and technical expertise—spanning web, AI/ML, Python, Docker, Linux, and Git—showcases my ability to deliver impactful solutions and collaborate effectively.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-sm'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-[1.03] border border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-400 ${
                  project.featured ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {project.featured && (
                  <div className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-3 sm:px-4 py-2 flex items-center justify-center">
                    <Star size={14} className="sm:w-4 sm:h-4 mr-2" />
                    <span className="text-xs sm:text-sm font-medium">Featured Project</span>
                  </div>
                )}
                
                <div className="relative">
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="w-full h-44 sm:h-52 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3 sm:space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-gray-800 text-cyan-600 dark:text-cyan-400 p-2 sm:p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border border-cyan-400 shadow-lg"
                      >
                        <Github size={16} className="sm:w-5 sm:h-5" />
                      </a>
                      {project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white p-2 sm:p-3 rounded-full hover:from-cyan-600 hover:to-pink-600 transition-colors duration-200 shadow-lg"
                        >
                          <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                      <Calendar size={14} className="sm:w-4 sm:h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 dark:from-cyan-500/20 dark:to-pink-500/20 text-cyan-600 dark:text-cyan-300 rounded-full text-xs sm:text-sm font-medium border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-3 sm:px-4 py-2 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-cyan-400 dark:hover:border-cyan-400 transition-colors duration-200 text-sm sm:text-base transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                      <Github size={14} className="sm:w-4 sm:h-4 mr-2" />
                      Code
                    </a>
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg hover:from-cyan-600 hover:to-pink-600 transition-colors duration-200 text-sm sm:text-base transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                      >
                        <ExternalLink size={14} className="sm:w-4 sm:h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;