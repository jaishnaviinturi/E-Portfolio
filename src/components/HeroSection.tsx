import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Jaishnavi Inturi
          </h1>
          
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6"></div>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8">
            AI & ML Engineer | Full Stack Developer
          </h2>
          
          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Passionate about developing AI-driven solutions and creating innovative applications 
            that solve real-world problems. Specializing in deep learning, healthcare AI, and MERN stack development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
      >
        <ChevronDown className="text-gray-600 dark:text-gray-400" size={32} />
      </button>
    </section>
  );
};

export default HeroSection;