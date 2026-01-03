import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, MessageCircle, Clock, Globe, ExternalLink } from 'lucide-react';
import { useTheme } from '../App';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_mi21a8c', // Service ID
        'template_lxs7qn5', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'Z3CMgsavg_qAGSdKB' // Public Key
      );
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch {
      alert('Failed to send message. Please try again.');
    }
    setIsSubmitting(false);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pawan841509@gmail.com',
      href: 'mailto:pawan841509@gmail.com',
      color: 'from-cyan-400 to-blue-500',
      description: 'Primary contact method'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8227031017',
      href: 'tel:+918227031017',
      color: 'from-green-400 to-emerald-500',
      description: 'WhatsApp available'
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/pawan-kumar-60a409251',
      color: 'from-blue-400 to-cyan-500',
      description: 'Professional network'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/pawan2570',
      color: 'from-gray-400 to-gray-600',
      description: 'Code repositories'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:pawan841509@gmail.com',
      color: 'from-red-400 to-pink-500',
      description: 'Direct contact'
    },
  ];

  const availabilityInfo = [
    {
      title: 'Available for',
      items: ['Freelance Projects', 'Full-time Roles', 'AI/ML Collaborations', 'Web Development']
    },
    {
      title: 'Response Time',
      items: ['Within 24 hours', 'Weekdays preferred', 'Quick turnaround']
    }
  ];

  return (
    <section id="contact" className={`py-12 sm:py-16 md:py-20 relative overflow-hidden transition-colors duration-300 ${
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
              <MessageCircle size={16} className="text-emerald-500 mr-2 sm:w-[18px] sm:h-[18px]" />
              <span className="text-emerald-600 font-medium text-xs sm:text-sm uppercase tracking-wider">Contact</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Get in{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Ready to collaborate? Let's discuss how we can work together on your next project!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-8 sm:space-y-10">
              {/* Contact Info Cards */}
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-emerald-500" />
                  Contact Information
                </h3>
                <div className="space-y-4 sm:space-y-5">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className={`flex items-center p-4 sm:p-5 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border transition-all duration-300 hover:-translate-y-1 ${
                        info.href === '#' 
                          ? 'cursor-default' 
                          : 'hover:shadow-xl'
                      } ${
                        isDarkMode 
                          ? 'bg-gray-800/90 border-gray-700 shadow-gray-800/30 hover:shadow-gray-700/50' 
                          : 'bg-white/90 border-emerald-100/70 shadow-emerald-100/30 hover:shadow-emerald-200/50'
                      }`}
                    >
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mr-4 sm:mr-5 shadow-lg`}>
                        <info.icon className="text-white sm:w-[28px] sm:h-[28px]" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className={`text-xs sm:text-sm font-medium ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>{info.label}</p>
                        <p className={`font-semibold text-sm sm:text-base ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>{info.value}</p>
                        <p className={`text-xs sm:text-sm ${
                          isDarkMode ? 'text-gray-500' : 'text-gray-600'
                        }`}>{info.description}</p>
                      </div>
                      {info.href !== '#' && (
                        <ExternalLink className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`} />
                      )}
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-emerald-500" />
                  Connect With Me
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 sm:p-5 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center ${
                        isDarkMode 
                          ? 'bg-gray-800/90 border-gray-700 shadow-gray-800/30 hover:shadow-gray-700/50' 
                          : 'bg-white/90 border-emerald-100/70 shadow-emerald-100/30 hover:shadow-emerald-200/50'
                      }`}
                    >
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                        <social.icon className="text-white sm:w-[28px] sm:h-[28px]" size={20} />
                      </div>
                      <p className={`font-semibold text-sm sm:text-base ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{social.label}</p>
                      <p className={`text-xs sm:text-sm ${
                        isDarkMode ? 'text-gray-500' : 'text-gray-600'
                      }`}>{social.description}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Info */}
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-emerald-500" />
                  Availability
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {availabilityInfo.map((info, index) => (
                    <div
                      key={index}
                      className={`p-4 sm:p-5 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border ${
                        isDarkMode 
                          ? 'bg-gray-800/90 border-gray-700 shadow-gray-800/30' 
                          : 'bg-white/90 border-emerald-100/70 shadow-emerald-100/30'
                      }`}
                    >
                      <h4 className={`font-semibold text-sm sm:text-base mb-3 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{info.title}</h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {info.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                            <span className={`text-xs sm:text-sm ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800/90 border-gray-700 shadow-gray-800/30' 
                : 'bg-white/90 border-emerald-100/70 shadow-emerald-100/30'
            }`}>
              <h3 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <Send className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-emerald-500" />
                Send Me a Message
              </h3>
              
              {isSubmitted && (
                <div className={`mb-6 p-4 sm:p-5 rounded-xl sm:rounded-2xl flex items-center ${
                  isDarkMode 
                    ? 'bg-green-500/20 border border-green-400' 
                    : 'bg-green-50 border border-green-200'
                }`}>
                  <CheckCircle className={`mr-3 sm:w-6 sm:h-6 ${
                    isDarkMode ? 'text-green-400' : 'text-green-600'
                  }`} size={20} />
                  <p className={`text-sm sm:text-base ${
                    isDarkMode ? 'text-green-300' : 'text-green-700'
                  }`}>Thank you for your message! I'll get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border transition-all duration-200 text-sm sm:text-base focus:ring-2 focus:ring-emerald-400 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border transition-all duration-200 text-sm sm:text-base focus:ring-2 focus:ring-emerald-400 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border transition-all duration-200 resize-none text-sm sm:text-base focus:ring-2 focus:ring-emerald-400 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Tell me about your project or how we can collaborate..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-200/50 hover:shadow-emerald-300/50 text-sm sm:text-base transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="sm:w-5 sm:h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Call to Action */}
              <div className={`mt-6 sm:mt-8 p-4 sm:p-5 rounded-xl sm:rounded-2xl ${
                isDarkMode 
                  ? 'bg-emerald-500/10 border border-emerald-500/20' 
                  : 'bg-emerald-50 border border-emerald-200'
              }`}>
                <p className={`text-sm sm:text-base text-center ${
                  isDarkMode ? 'text-emerald-300' : 'text-emerald-700'
                }`}>
                  <strong>Ready to build amazing web applications?</strong> Let's discuss how my fullstack skills in React, Node.js, and modern web technologies can bring your ideas to life. Reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;