import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaFlask,
  FaChartLine,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiGithub,
  SiMysql,
  SiPandas,
  SiScikitlearn,
  SiNumpy,
  SiPostman,
} from 'react-icons/si';

const skills = [
  { name: 'Python', icon: FaPython, color: '#3776AB', description: 'Versatile programming for data science and web' },
  { name: 'React.js', icon: FaReact, color: '#61DAFB', description: 'Building dynamic user interfaces' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', description: 'Server-side JavaScript runtime' },
  { name: 'Java', icon: FaJava, color: '#007396', description: 'Robust, object-oriented programming' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', description: 'Core language for web development' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', description: 'NoSQL database for scalable apps' },
  { name: 'Express.js', icon: SiExpress, color: '#000000', description: 'Fast Node.js web framework' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', description: 'Relational database management' },
  { name: 'HTML', icon: FaHtml5, color: '#E34F26', description: 'Markup for web structure' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', description: 'Styling for web design' },
  { name: 'Matplotlib', icon: FaChartLine, color: '#11557C', description: 'Data visualization in Python' },
  { name: 'Pandas', icon: SiPandas, color: '#150458', description: 'Data analysis and manipulation' },
  { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E', description: 'Machine learning in Python' },
  { name: 'NumPy', icon: SiNumpy, color: '#013243', description: 'Numerical computing in Python' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', description: 'Version control for collaboration' },
  { name: 'GitHub', icon: SiGithub, color: '#181717', description: 'Platform for code hosting and collaboration' },
  { name: 'PowerBI', icon: FaChartLine, color: '#F2C811', description: 'Business analytics and data visualization' },
  { name: 'VS Code', icon: FaDatabase, color: '#007ACC', description: 'Source-code editor for development' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', description: 'API testing and development' },
  { name: 'C', icon: FaDatabase, color: '#A8B9CC', description: 'Low-level programming language' },
  { name: 'Data Structures and Algorithms', icon: FaFlask, color: '#000000', description: 'Core concepts for efficient coding' },
  { name: 'Flask', icon: FaFlask, color: '#000000', description: 'Lightweight Python web framework' },
];

const categories = {
  Programming: ['Python', 'Java', 'JavaScript', 'C', 'Data Structures and Algorithms'],
  'Web Development': ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'MySQL', 'Flask'],
  'Data Science': ['Matplotlib', 'PowerBI', 'Pandas', 'Scikit-learn', 'NumPy'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman'],
};

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center mb-16">Skills & Expertise</h2>

          {Object.entries(categories).map(([category, skillNames]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-white">
                {category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {skills
                  .filter((skill) => skillNames.includes(skill.name))
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-transform group relative"
                    >
                      <skill.icon
                        className="w-10 h-10 mb-3"
                        style={{ color: skill.color }}
                      />
                      <h3 className="text-base font-medium text-center text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {skill.name}
                      </h3>
                      <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 text-center z-10">
                        {skill.description}
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Education Section - Unchanged */}
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