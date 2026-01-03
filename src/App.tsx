import React, { createContext, useContext, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ContactQuickAccess from './components/ContactQuickAccess';
import SplashScreen from './components/SplashScreen';

// Theme context
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? JSON.parse(saved) : false;
  });
  const [showSplash, setShowSplash] = useState(true);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={`min-h-screen transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-white'
      }`}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
        <Certificates />
      <Experience />
      <Education />
      <Contact />
      <Footer />
        <Chatbot isOpen={isChatbotOpen} setIsOpen={setIsChatbotOpen} />
        {!isChatbotOpen && <ContactQuickAccess />}
    </div>
    </ThemeContext.Provider>
  );
}

export default App;