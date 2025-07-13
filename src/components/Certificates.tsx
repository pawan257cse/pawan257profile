import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../App';

interface Certificate {
  id: number;
  name: string;
  organization: string;
  platform: 'coursera' | 'nptel' | 'greatlearning' | 'udemy' | 'freecodecamp' | 'other';
  date: string;
  skills: string[];
  image?: string;
  link?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    name: "Design Psychology: Master the Art and Science of UX Design",
    organization: "LinkedIn Learning",
    platform: "other",
    date: "2025",
    skills: ["UX Design", "Design Psychology", "User Experience"],
    link: "https://www.linkedin.com/posts/pawan-kumar-60a409251_activity-7324053122572603393-FOCN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4swCoBXrPOKdLacntrFnwT2N5IyH6ZAqk"
  },
  {
    id: 2,
    name: "Code Red 4.0 Hackathon Finalist (Top 10)",
    organization: "Code Red Hackathon",
    platform: "other",
    date: "2024",
    skills: ["Hackathon", "Teamwork", "Innovation"],
    link: "https://www.linkedin.com/posts/pawan-kumar-60a409251_hackathon-top10-codered4-activity-7267453575742509057-_ic1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4swCoBXrPOKdLacntrFnwT2N5IyH6ZAqk"
  },
  {
    id: 3,
    name: "NPTEL Certification Achievement",
    organization: "NPTEL",
    platform: "nptel",
    date: "2024",
    skills: ["NPTEL", "Online Learning", "Certification"],
    link: "https://www.linkedin.com/posts/pawan-kumar-60a409251_nptel-activity-7267445117890768898-JYXI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4swCoBXrPOKdLacntrFnwT2N5IyH6ZAqk"
  },
  {
    id: 13,
    name: "NPTEL Certification Achievement (2)",
    organization: "NPTEL",
    platform: "nptel",
    date: "2024",
    skills: ["NPTEL", "Online Learning", "Certification"],
    link: "https://www.linkedin.com/posts/pawan-kumar-60a409251_nptel-activity-7267445117890768898-JYXI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4swCoBXrPOKdLacntrFnwT2N5IyH6ZAqk"
  },
  {
    id: 4,
    name: "Coursera Course Completion",
    organization: "Coursera",
    platform: "coursera",
    date: "2024",
    skills: ["Coursera", "Online Learning", "Certification"],
    link: "https://www.linkedin.com/posts/pawan-kumar-60a409251_activity-7249660907008540672-hdn8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4swCoBXrPOKdLacntrFnwT2N5IyH6ZAqk"
  },
  {
    id: 5,
    name: "Git Simplilearn Certificate",
    organization: "Simplilearn",
    platform: "other",
    date: "2024",
    skills: ["Git", "Version Control", "Simplilearn"],
    link: "https://www.linkedin.com/posts/pawan-kumar-60a409251_git-simplilearn-certificate-complet-activity-7197091718142275584-WuRl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4swCoBXrPOKdLacntrFnwT2N5IyH6ZAqk"
  },
  {
    id: 6,
    name: "HackerRank SQL Certificate",
    organization: "HackerRank",
    platform: "other",
    date: "2024",
    skills: ["SQL", "HackerRank", "Database"],
    link: "https://www.linkedin.com/posts/pawan-kumar-60a409251_hackerrank-sql-activity-7194924582363942912-N8Sl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4swCoBXrPOKdLacntrFnwT2N5IyH6ZAqk"
  },
  {
    id: 7,
    name: "Business Elite Certificate",
    organization: "Business Elite",
    platform: "other",
    date: "2024",
    skills: ["Business", "Elite", "Certification"],
    link: "https://www.linkedin.com/posts/pawan-kumar-60a409251_business-elite-activity-7194649794668040192-_Lz9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4swCoBXrPOKdLacntrFnwT2N5IyH6ZAqk"
  },
  {
    id: 8,
    name: "Excel Data Analysis & Analytics",
    organization: "LinkedIn Learning",
    platform: "other",
    date: "2024",
    skills: ["Excel", "Data Analysis", "Analytics"],
    link: "https://www.linkedin.com/posts/pawan-kumar-60a409251_excel-dataanalysis-analytics-activity-7187469727324135425-O6dO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4swCoBXrPOKdLacntrFnwT2N5IyH6ZAqk"
  },
  {
    id: 9,
    name: "IBM Data Visualization Success",
    organization: "IBM",
    platform: "other",
    date: "2024",
    skills: ["IBM", "Data Visualization", "Success"],
    link: "https://www.linkedin.com/posts/pawan-kumar-60a409251_success-ibm-datavisualization-activity-7187468437353336832-n5wc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4swCoBXrPOKdLacntrFnwT2N5IyH6ZAqk"
  },
  {
    id: 10,
    name: "IBM Data Coursera Certificate",
    organization: "IBM/Coursera",
    platform: "coursera",
    date: "2024",
    skills: ["IBM", "Coursera", "Data Science"],
    link: "https://www.linkedin.com/posts/pawan-kumar-60a409251_ibm-data-coursera-activity-7186944435249659904-8kaQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4swCoBXrPOKdLacntrFnwT2N5IyH6ZAqk"
  },
  {
    id: 11,
    name: "1000+ Free Courses with Certificates (1)",
    organization: "LinkedIn Post",
    platform: "other",
    date: "2024",
    skills: ["Free Courses", "Certificates", "Learning"],
    link: "https://www.linkedin.com/posts/pawan-kumar-60a409251_1000-free-courses-with-free-certificates-activity-7157378646322688000-kO3w?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4swCoBXrPOKdLacntrFnwT2N5IyH6ZAqk"
  },
  {
    id: 12,
    name: "1000+ Free Courses with Certificates (2)",
    organization: "LinkedIn Post",
    platform: "other",
    date: "2024",
    skills: ["Free Courses", "Certificates", "Learning"],
    link: "https://www.linkedin.com/posts/pawan-kumar-60a409251_1000-free-courses-with-free-certificates-activity-7156323957107761156-ztut?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4swCoBXrPOKdLacntrFnwT2N5IyH6ZAqk"
  }
];

const platformIcons = {
  coursera: "🎓",
  nptel: "🏛️",
  greatlearning: "📚",
  udemy: "🎯",
  freecodecamp: "💻",
  other: "📜"
};

const platformColors = {
  coursera: "bg-blue-500",
  nptel: "bg-red-500",
  greatlearning: "bg-green-500",
  udemy: "bg-purple-500",
  freecodecamp: "bg-yellow-500",
  other: "bg-gray-500"
};

const Certificates: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const { isDarkMode } = useTheme();

  const filteredCertificates = selectedPlatform === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.platform === selectedPlatform);

  const platforms = ['all', ...Array.from(new Set(certificates.map(cert => cert.platform)))];

  return (
    <section
      id="certificates"
      className={`relative py-16 md:py-24 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-white via-gray-100 to-gray-50 border-t border-b border-gray-200'
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-emerald-300 bg-white dark:bg-gray-800 text-emerald-600 font-semibold text-xs sm:text-sm mb-3 sm:mb-4 shadow-sm">
            <span className="mr-2">🎓</span> MY CERTIFICATES
          </div>
          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent ${isDarkMode ? '' : 'text-gray-900'}`}>
            What I Achieved for the <span className="text-black dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">World</span>
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} max-w-md sm:max-w-2xl mx-auto`}>
            My journey of continuous learning and achievement—spanning NPTEL, Coursera, LinkedIn, and more—showcases my commitment to growth and excellence in tech, business, and beyond.
          </p>
        </div>

        {/* Platform Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {platforms.map((platform) => (
            <button
              key={platform}
              onClick={() => setSelectedPlatform(platform)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedPlatform === platform
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {platform === 'all' ? 'All Platforms' : platform.charAt(0).toUpperCase() + platform.slice(1)}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredCertificates.map((certificate) => (
            <div
              key={certificate.id}
              className="group bg-white dark:bg-gray-800 rounded-3xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col"
            >
              {/* Certificate Header */}
              <div className={`p-5 sm:p-6 ${platformColors[certificate.platform]} bg-opacity-10 dark:bg-opacity-20`}>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="text-2xl sm:text-3xl">
                    {platformIcons[certificate.platform]}
                  </div>
                  <div className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium ${platformColors[certificate.platform]} text-white`}>
                    {certificate.platform.toUpperCase()}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {certificate.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-xs sm:text-sm">
                  {certificate.organization}
                </p>
              </div>

              {/* Certificate Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                    <span className="mr-2">📅</span>
                    Completed: {certificate.date}
                  </div>

                  {/* Skills */}
                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {certificate.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-[11px] sm:text-xs rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex justify-between items-center mt-2 sm:mt-4">
                  {certificate.link ? (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-md hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                      {certificate.link.includes('linkedin.com') && <FaLinkedin className="text-white text-lg" />}
                      View Certificate
                    </a>
                  ) : (
                    <span className="text-gray-400 text-xs sm:text-sm">No Link</span>
                  )}
                  <div className="text-xl sm:text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    🎯
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {certificates.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Total Certificates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {Array.from(new Set(certificates.map(cert => cert.platform))).length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {Array.from(new Set(certificates.flatMap(cert => cert.skills))).length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Skills Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-300">Completion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates; 