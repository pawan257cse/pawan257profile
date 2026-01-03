import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const TOTAL_DURATION = 3000; // total splash screen time in ms (including fade-out)
  const FADE_DURATION = 500;   // fade-out duration in ms

  const techLogos = [
    { name: 'VS Code', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'AI', src: 'https://img.icons8.com/color/96/artificial-intelligence.png' },
    { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  ];

  const welcomeText = "Welcome to my profile";

  useEffect(() => {
    const logoTimer = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % techLogos.length);
    }, 120); // Change logo every 0.12 seconds

    const textTimer = setInterval(() => {
      if (textIndex < welcomeText.length) {
        setDisplayText(welcomeText.slice(0, textIndex + 1));
        setTextIndex(prev => prev + 1);
      }
    }, 120); // Type each character every 0.12 seconds

    const splashTimer = setTimeout(() => {
      setIsVisible(false);
      // Call onComplete after fade-out so total visible time is exactly 3 seconds
      setTimeout(onComplete, FADE_DURATION);
    }, TOTAL_DURATION - FADE_DURATION);

    return () => {
      clearInterval(logoTimer);
      clearInterval(textTimer);
      clearTimeout(splashTimer);
    };
  }, [onComplete, techLogos.length, textIndex, welcomeText.length]);

  return (
    <div className={`splash-screen ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="splash-background"></div>
      <div className="splash-content">
        <div className="logo-container">
          <div className="logo">
            <img 
              key={currentLogoIndex}
              src={techLogos[currentLogoIndex].src} 
              alt={techLogos[currentLogoIndex].name}
              className="logo-image"
            />
          </div>
          <h1 className="portfolio-title">{displayText}</h1>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen; 