import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaUser, FaGlobe, FaSearch, FaCode, FaLanguage } from 'react-icons/fa';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'text' | 'code' | 'web' | 'error';
  language?: string;
}

interface ChatbotProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI-powered portfolio assistant. I can help you with anything about this website in any language! 🌍\n\n🤖 AI-powered responses using Gemini API\n🌐 Multilingual support (Hindi, English, etc.)\n💻 Code explanations and examples\n📊 Portfolio insights and suggestions\n🌐 Web scraping and data analysis\n\nAsk me anything about this website!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState('en');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Gemini API configuration
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'your-gemini-api-key-here';
  const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

  const portfolioData = {
    about: {
      name: "Pawan Kumar",
      role: "Full Stack Developer & AI Enthusiast",
      description: "Passionate developer with expertise in modern web technologies, AI integration, and data analysis. I love creating innovative solutions using cutting-edge technologies.",
      skills: ["React", "TypeScript", "Node.js", "Python", "MongoDB", "AWS", "Docker", "Git", "AI/ML", "Web Scraping"],
      experience: "3+ years of experience in web development and AI integration",
      education: "Bachelor's in Computer Science",
      location: "India",
      interests: ["AI/ML", "Web Scraping", "Data Analysis", "Open Source"],
      languages: ["Hindi", "English", "Programming Languages"]
    },
    skills: {
      frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Next.js"],
      backend: ["Node.js", "Python", "Express.js", "Django", "FastAPI", "Flask"],
      database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
      ai_ml: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Gemini API", "BeautifulSoup4", "Selenium"],
      tools: ["Git", "Docker", "AWS", "Heroku", "Vercel", "Netlify", "Jupyter"],
      design: ["Figma", "Adobe XD", "Photoshop", "Illustrator"]
    },
    projects: [
      {
        name: "AI-Powered E-Commerce Platform",
        description: "Full-stack e-commerce solution with AI-powered recommendations and chatbot integration",
        tech: ["React", "Node.js", "MongoDB", "Gemini API", "BeautifulSoup4", "Python"],
        link: "#",
        features: ["AI recommendations", "Real-time chat", "Payment integration", "Analytics dashboard"]
      },
      {
        name: "Web Scraping Dashboard",
        description: "Real-time data collection and analysis dashboard with BeautifulSoup4 and AI insights",
        tech: ["Python", "BeautifulSoup4", "React", "FastAPI", "PostgreSQL", "Gemini API"],
        link: "#",
        features: ["Data extraction", "Real-time monitoring", "AI analysis", "Custom reports"]
      },
      {
        name: "Portfolio Website with AI Chatbot",
        description: "Modern responsive portfolio with AI-powered chatbot using Gemini API",
        tech: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "Vite"],
        link: "#",
        features: ["AI chatbot", "Dark/light mode", "Responsive design", "Multilingual support"]
      }
    ],
    experience: [
      {
        company: "Tech Solutions Inc.",
        role: "Senior Full Stack Developer & AI Engineer",
        duration: "2022 - Present",
        description: "Leading development of AI-powered web applications, implementing web scraping solutions, and mentoring junior developers",
        achievements: ["Led 5+ AI projects", "Mentored 10+ developers", "Improved efficiency by 40%"]
      },
      {
        company: "StartupXYZ",
        role: "Full Stack Developer",
        duration: "2021 - 2022",
        description: "Built responsive user interfaces and implemented data collection systems using BeautifulSoup4",
        achievements: ["Built 3 major features", "Reduced bugs by 60%", "Improved UX by 50%"]
      }
    ],
    education: [
      {
        degree: "Bachelor of Computer Science",
        institution: "University of Technology",
        year: "2021",
        description: "Graduated with honors, specialized in software engineering and AI/ML",
        achievements: ["First class with distinction", "Best project award", "Dean's list"]
      }
    ],
    contact: {
      email: "pawan@example.com",
      phone: "+91 98765 43210",
      location: "Mumbai, India",
      availability: "Available for freelance and full-time opportunities",
      social: {
        github: "github.com/pawan257cse",
        linkedin: "linkedin.com/in/pawan",
        twitter: "twitter.com/pawan"
      }
    },
    website: {
      features: ["Dark/Light mode", "AI Chatbot", "Responsive design", "Smooth animations", "Contact form", "Project showcase"],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Gemini API"],
      sections: ["Hero", "About", "Skills", "Projects", "Experience", "Education", "Contact", "Footer"]
    }
  };

  // Detect language from user input
  const detectLanguage = (text: string): string => {
    const hindiPattern = /[\u0900-\u097F]/;
    const englishPattern = /[a-zA-Z]/;
    
    if (hindiPattern.test(text)) return 'hi';
    if (englishPattern.test(text)) return 'en';
    return 'en'; // default
  };

  // Call Gemini API with enhanced prompt
  const callGeminiAPI = async (prompt: string, language: string = 'en'): Promise<string> => {
    try {
      const languageInstruction = language === 'hi' ? 
        'Please respond in Hindi (हिंदी में जवाब दें).' : 
        'Please respond in English.';

      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are an AI assistant for a portfolio website. ${languageInstruction}

Portfolio Information:
- Name: ${portfolioData.about.name}
- Role: ${portfolioData.about.role}
- Experience: ${portfolioData.about.experience}
- Location: ${portfolioData.about.location}
- Skills: ${portfolioData.skills.frontend.join(', ')}, ${portfolioData.skills.backend.join(', ')}, ${portfolioData.skills.ai_ml.join(', ')}
- Projects: ${portfolioData.projects.map(p => p.name).join(', ')}
- Contact: ${portfolioData.contact.email}, ${portfolioData.contact.phone}

Website Features:
- Dark/Light mode toggle
- AI-powered chatbot
- Responsive design
- Smooth animations
- Contact form
- Project showcase

User Question: "${prompt}"

Please provide a helpful, detailed response about this portfolio website. If asked about web scraping, mention BeautifulSoup4. If asked about AI/ML, mention relevant technologies. Be conversational and helpful.`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Gemini API request failed');
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Gemini API Error:', error);
      return getFallbackResponse(prompt, language);
    }
  };

  // Enhanced fallback response with multilingual support
  const getFallbackResponse = (userMessage: string, language: string = 'en'): string => {
    const message = userMessage.toLowerCase();
    
    if (language === 'hi') {
      return getHindiResponse(message);
    }
    
    // Web scraping specific
    if (message.includes('scrap') || message.includes('beautifulsoup') || message.includes('web scraping') || message.includes('data extraction')) {
      return `I'm experienced with web scraping using BeautifulSoup4 and Python. Here's a comprehensive example:

\`\`\`python
import requests
from bs4 import BeautifulSoup
import pandas as pd

# Fetch webpage
url = "https://example.com"
headers = {'User-Agent': 'Mozilla/5.0'}
response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.content, 'html.parser')

# Extract data
titles = soup.find_all('h1')
links = soup.find_all('a', href=True)
prices = soup.find_all('span', class_='price')

# Process data
data = {
    'titles': [title.text.strip() for title in titles],
    'links': [link['href'] for link in links],
    'prices': [price.text.strip() for price in prices]
}

# Save to CSV
df = pd.DataFrame(data)
df.to_csv('scraped_data.csv', index=False)
print(f"Scraped {len(titles)} titles, {len(links)} links, {len(prices)} prices")
\`\`\`

I can help you with data extraction, parsing HTML, handling dynamic content, and building scraping pipelines.`;
    }

    // AI/ML specific
    if (message.includes('ai') || message.includes('machine learning') || message.includes('gemini') || message.includes('artificial intelligence')) {
      return `I work with various AI/ML technologies and can help you with:
      
🤖 **AI Technologies**: Gemini API, OpenAI API, TensorFlow, PyTorch
📊 **Data Analysis**: Pandas, NumPy, Scikit-learn
🌐 **Web Scraping**: BeautifulSoup4, Selenium
🔧 **Application**: Chatbot, data analysis, recommendation systems

Would you like to see examples of any specific AI implementation or learn about web scraping techniques?`;
    }

    // Website specific
    if (message.includes('website') || message.includes('site') || message.includes('page') || message.includes('portfolio')) {
      return `This is my portfolio website built with modern technologies:

🌐 **Features**:
• Dark/Light mode toggle
• AI-powered chatbot (this one!)
• Fully responsive design
• Smooth animations
• Contact form with EmailJS
• Project showcase

💻 **Technologies Used**:
• React 18 with TypeScript
• Tailwind CSS for styling
• Vite for fast development
• Gemini API for AI responses
• EmailJS for contact form

🎨 **Sections**: Hero, About, Skills, Projects, Experience, Education, Contact, Footer

The website showcases my skills in frontend development, AI integration, and modern web technologies.`;
    }

    // About section
    if (message.includes('about') || message.includes('who') || message.includes('introduce') || message.includes('yourself')) {
      return `I'm ${portfolioData.about.name}, a ${portfolioData.about.role} with ${portfolioData.about.experience}. 

${portfolioData.about.description}

📍 **Location**: ${portfolioData.about.location}
🎓 **Education**: ${portfolioData.education[0].degree} from ${portfolioData.education[0].institution}
🌍 **Languages**: ${portfolioData.about.languages.join(', ')}

I specialize in AI integration, web scraping, and modern web development. I love creating innovative solutions using cutting-edge technologies!`;
    }

    // Skills
    if (message.includes('skill') || message.includes('technology') || message.includes('tech stack') || message.includes('what can you do')) {
      return `My technical skills include:

🤖 **AI/ML**: ${portfolioData.skills.ai_ml.join(', ')}
🌐 **Frontend**: ${portfolioData.skills.frontend.join(', ')}
⚙️ **Backend**: ${portfolioData.skills.backend.join(', ')}
🗄️ **Database**: ${portfolioData.skills.database.join(', ')}

I'm particularly strong in React, Python, AI/ML, and web scraping technologies.`;
    }

    // Projects
    if (message.includes('project') || message.includes('work') || message.includes('portfolio') || message.includes('what have you built')) {
      let response = "Here are my key projects:\n\n";
      portfolioData.projects.forEach((project, index) => {
        response += `${index + 1}. **${project.name}**\n📝 ${project.description}\n🛠️ Technologies: ${project.tech.join(', ')}\n✨ Features: ${project.features.join(', ')}\n\n`;
      });
      return response;
    }

    // Experience
    if (message.includes('experience') || message.includes('work history') || message.includes('job') || message.includes('career')) {
      let response = "My work experience:\n\n";
      portfolioData.experience.forEach((exp, index) => {
        response += `${index + 1}. **${exp.role}** at ${exp.company} (${exp.duration})\n📝 ${exp.description}\n🏆 Achievements: ${exp.achievements.join(', ')}\n\n`;
      });
      return response;
    }

    // Contact
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach') || message.includes('hire')) {
      return `You can reach me at:

📧 **Email**: ${portfolioData.contact.email}
📱 **Phone**: ${portfolioData.contact.phone}
📍 **Location**: ${portfolioData.contact.location}
✅ **Availability**: ${portfolioData.contact.availability}

🌐 **Social Media**:
• GitHub: ${portfolioData.contact.social.github}
• LinkedIn: ${portfolioData.contact.social.linkedin}
• Twitter: ${portfolioData.contact.social.twitter}

I'm available for freelance projects, full-time opportunities, and collaborations!`;
    }

    // Default response
    return `I can help you with information about:

🤖 **AI/ML** and web scraping
💻 **Skills** and technologies
📁 **Projects** and experience
📞 **Contact** information
🌐 **Website** features

Just ask me anything about my portfolio, skills, projects, or technical expertise!`;
  };

  // Hindi responses
  const getHindiResponse = (message: string): string => {
    if (message.includes('scrap') || message.includes('beautifulsoup') || message.includes('web scraping')) {
      return `मैं BeautifulSoup4 और Python का उपयोग करके web scraping में अनुभवी हूं। यहाँ एक उदाहरण है:

\`\`\`python
import requests
from bs4 import BeautifulSoup

# वेबपेज फेच करें
url = "https://example.com"
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# डेटा निकालें
titles = soup.find_all('h1')
links = soup.find_all('a', href=True)

print(f"{len(titles)} शीर्षक मिले")
print(f"{len(links)} लिंक मिले")
\`\`\`

मैं आपकी डेटा एक्सट्रैक्शन, HTML पार्सिंग, और web scraping में मदद कर सकता हूं।`;
    }

    if (message.includes('ai') || message.includes('machine learning')) {
      return `मैं विभिन्न AI/ML तकनीकों के साथ काम करता हूं:

🤖 **AI तकनीकें**: Gemini API, OpenAI API, TensorFlow, PyTorch
📊 **डेटा विश्लेषण**: Pandas, NumPy, Scikit-learn
🌐 **Web Scraping**: BeautifulSoup4, Selenium
🔧 **एप्लिकेशन**: चैटबॉट, डेटा विश्लेषण, सिफारिश सिस्टम

क्या आप किसी विशेष AI प्रोजेक्ट के बारे में जानना चाहते हैं?`;
    }

    if (message.includes('about') || message.includes('who') || message.includes('introduce')) {
      return `मैं ${portfolioData.about.name} हूं, एक ${portfolioData.about.role}। मेरे पास ${portfolioData.about.experience} है।

${portfolioData.about.description}

📍 **स्थान**: ${portfolioData.about.location}
🎓 **शिक्षा**: ${portfolioData.education[0].degree}
🌍 **भाषाएं**: ${portfolioData.about.languages.join(', ')}

मैं AI इंटीग्रेशन, web scraping, और modern web development में विशेषज्ञता रखता हूं।`;
    }

    if (message.includes('skill') || message.includes('technology')) {
      return `मेरे technical skills में शामिल हैं:

🤖 **AI/ML**: ${portfolioData.skills.ai_ml.join(', ')}
🌐 **Frontend**: ${portfolioData.skills.frontend.join(', ')}
⚙️ **Backend**: ${portfolioData.skills.backend.join(', ')}
🗄️ **Database**: ${portfolioData.skills.database.join(', ')}

मैं React, Python, AI/ML, और web scraping में मजबूत हूं।`;
    }

    if (message.includes('project') || message.includes('work')) {
      return `मेरे मुख्य प्रोजेक्ट्स:

1. **AI-Powered E-Commerce Platform**: AI सिफारिशों के साथ पूर्ण e-commerce समाधान
2. **Web Scraping Dashboard**: BeautifulSoup4 के साथ real-time डेटा संग्रह
3. **Portfolio Website**: Gemini API के साथ AI चैटबॉट

सभी प्रोजेक्ट्स modern technologies का उपयोग करते हैं।`;
    }

    if (message.includes('contact') || message.includes('email') || message.includes('phone')) {
      return `मुझसे संपर्क करने के लिए:

📧 **ईमेल**: ${portfolioData.contact.email}
📱 **फोन**: ${portfolioData.contact.phone}
📍 **स्थान**: ${portfolioData.contact.location}

🌐 **सोशल मीडिया**:
• GitHub: ${portfolioData.contact.social.github}
• LinkedIn: ${portfolioData.contact.social.linkedin}

मैं freelance और full-time opportunities के लिए उपलब्ध हूं!`;
    }

    return `मैं आपकी मदद कर सकता हूं:

🤖 **AI/ML** और web scraping के बारे में
💻 **Skills** और technologies के बारे में
📁 **Projects** और experience के बारे में
📞 **Contact** information के बारे में
🌐 **Website** features के बारे में

बस मुझसे कुछ भी पूछें!`;
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const language = detectLanguage(inputText);
    setDetectedLanguage(language);

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
      language
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setIsLoading(true);

    try {
      let botResponse: string;
      
      if (GEMINI_API_KEY && GEMINI_API_KEY !== 'your-gemini-api-key-here') {
        botResponse = await callGeminiAPI(inputText, language);
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000));
        botResponse = getFallbackResponse(inputText, language);
      }

      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
        type: botResponse.includes('```') ? 'code' : 'text',
        language
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: language === 'hi' ? 
          "माफ़ करें, कुछ गलत हो गया। कृपया फिर से कोशिश करें।" :
          "Sorry, I encountered an error. Please try again.",
        isUser: false,
        timestamp: new Date(),
        type: 'error',
        language
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const renderMessage = (message: Message) => {
    const isCode = message.text.includes('```');
    
    return (
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          message.isUser
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
            : message.type === 'error'
            ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
        }`}
      >
        <div className="flex items-start space-x-2">
          {!message.isUser && (
            <div className="mt-1 flex-shrink-0">
              {message.type === 'error' ? (
                <FaTimes size={16} className="text-red-500" />
              ) : isCode ? (
                <FaCode size={16} />
              ) : message.language === 'hi' ? (
                <FaLanguage size={16} />
              ) : (
                <FaRobot size={16} />
              )}
            </div>
          )}
          <div className="whitespace-pre-wrap">
            {isCode ? (
              <div className="bg-gray-800 text-green-400 p-3 rounded text-sm font-mono overflow-x-auto">
                {message.text}
              </div>
            ) : (
              message.text
            )}
          </div>
          {message.isUser && (
            <FaUser size={16} className="mt-1 flex-shrink-0" />
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FaRobot size={20} />
              <div>
                <h3 className="font-semibold">AI Portfolio Assistant</h3>
                <p className="text-sm opacity-90">🌍 Multilingual • 🤖 AI-Powered • 💻 Tech Expert</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {renderMessage(message)}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <FaRobot size={16} />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask anything about this website in any language..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isLoading}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot; 