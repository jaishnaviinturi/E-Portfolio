import React from 'react';
import SkillBar from './SkillBar';
import SkillCard from './SkillCard';

const frontendSkills = [
  { name: 'React.js', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
];

const backendSkills = [
  { name: 'Node.js', level: 80 },
  { name: 'Express.js', level: 75 },
  { name: 'MongoDB', level: 85 },
  { name: 'MySQL', level: 80 },
];

const otherSkills = [
  { name: 'C' },
  { name: 'Java' },
  { name: 'Python' },
  { name: 'Data Structures and Algorithms' },
  { name: 'PowerBI' },
  { name: 'VS Code' },
  { name: 'Git' },
  { name: 'GitHub' },
];

const education = [
  {
    degree: 'BTech, CSE (Data Science)',
    institute: 'B V Raju Institute of Technology',
    score: '9.31/10',
    years: '2022 - 2026',
  },
  {
    degree: 'Intermediate (MPC)',
    institute: 'Sri Chaitanya College',
    score: '98.4%',
    years: '2020 - 2022',
  },
  {
    degree: 'SSC',
    institute: 'Unique High School',
    score: '10/10 GPA',
    years: '2019 - 2020',
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-16">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Frontend Skills */}
          <div className="animate-fadeInUp">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-3">
                💻
              </span>
              Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="animate-fadeInUp animation-delay-200">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mr-3">
                🖥️
              </span>
              Backend Development
            </h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Other Skills (Tools, Languages, etc.) */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-10 text-center">
            Other Skills & Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {otherSkills.map((item, index) => (
              <SkillCard key={index} name={item.name} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-10 text-center">
            Education
          </h3>
          <div className="grid gap-6 max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow animate-fadeInUp"
              >
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {edu.degree}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  {edu.institute}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-1 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  {edu.score}
                </p>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  {edu.years}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;