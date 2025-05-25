import React from 'react';
import { Github, Linkedin,  ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Inturi Jaishnavi</h2>
            <p className="text-gray-400 text-sm">
              BTech CSE | Data Science Enthusiast | AI/ML Developer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/jaishnaviinturi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/jaishnavi-inturi-839251259" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Inturi Jaishnavi. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors">Projects</a>
            <a href="#skills" className="text-gray-400 hover:text-white text-sm transition-colors">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;