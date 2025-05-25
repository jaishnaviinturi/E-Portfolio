import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavLink {
  id: string;
  title: string;
}

const navLinks: NavLink[] = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'skills', title: 'Skills' },
  { id: 'certificates', title: 'Certificates' },
  { id: 'contact', title: 'Contact' }
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Jaishnavi
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2 p-2 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-white dark:bg-gray-900 mt-2 rounded-lg shadow-lg absolute top-full left-0 right-0 transition-all duration-300">
            <ul className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;