import React from 'react';
import { FileText, Github, Linkedin, Video } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
  <div className="flex flex-col md:flex-row items-center gap-12">
    <div className="md:w-1/2 animate-fadeInLeft">
      <div className="relative">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl mx-auto md:mx-0">
          <img 
            src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg text-center">
          <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">BTech CSE</span>
          <span className="block text-xl font-bold text-blue-600 dark:text-blue-400">Data Science</span>
        </div>
      </div>
    </div>

          
          <div className="md:w-1/2 animate-fadeInRight">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 relative">
              About Me
              <span className="absolute left-0 bottom-0 h-1 w-16 bg-blue-600 dark:bg-blue-400"></span>
            </h2>
            
            <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">
              I'm a BTech student (graduating in 2026) with expertise in AI, machine learning, and full-stack web development. 
              My passion lies in developing AI-driven solutions, deploying deep learning models, and building scalable MERN stack applications.
            </p>
            
            <p className="text-gray-700 dark:text-white mb-8 leading-relaxed">
              With a strong foundation in data structures, algorithms, and database management, I've successfully developed projects 
              like HealthSphere and Cornea AI that demonstrate my ability to create innovative solutions using cutting-edge technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="/certificates/Resume (7).pdf" 
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </a>
              <a 
                href="/video-resume.mp4"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 dark:hover:bg-purple-500 transition-colors"
              >
                <Video size={18} />
                <span>Video Resume</span>
              </a>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/jaishnaviinturi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/jaishnavi-inturi-839251259" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;