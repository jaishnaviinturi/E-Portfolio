import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "SDE-Intern (DL)",
    company: "Sentiantal Pvt Ltd",
    location: "Hyderabad",
    duration: "January 2025 - June 2025",
    type: "Hybrid (3 Days/Week)",
    description: [
      "Deep Learning and Software Development Internship",
      "Working on innovative AI solutions",
      "Stipend: 10K/Month with Travel Allowance"
    ]
  },
  {
    title: "Deep Learning Intern",
    company: "Sentiantal Pvt Ltd",
    location: "Remote",
    duration: "August 2024 - January 2025",
    type: "Remote",
    description: [
      "Focused on Deep Learning projects and implementations",
      "Flexible working hours",
      "Contributing to AI-driven solutions"
    ]
  },
  {
    title: "AI Intern",
    company: "Swecha",
    location: "Virtual",
    duration: "Summer 2023",
    type: "Virtual Internship",
    description: [
      "Developed and evaluated Automatic Speech Recognition model",
      "Collected diverse Telugu audio and video samples",
      "Contributed to AI research and development"
    ]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-16">Work Experience</h2>
        
        <div className="grid gap-8 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                  {exp.title}
                </h3>
                <div className="flex items-center text-blue-600 dark:text-blue-400">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{exp.duration}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Building size={16} className="mr-2" />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin size={16} className="mr-2" />
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30 rounded-full">
                  {exp.type}
                </span>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;