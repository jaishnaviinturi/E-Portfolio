import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'HealthSphere',
    description: 'A full-stack healthcare ecosystem with three role-based interfaces (Patient, Doctor, Hospital Administrator) using AI and automation. Features include disease prediction, appointment booking, fitness recommendations, and more.',
    image: 'https://assets.paperjam.lu/images/articles/healthcare-sector-explores-dat/0.5/0.5/640/426/643776.jpg',
    tags: ['React.js', 'Express.js', 'MongoDB', 'Flask', 'JWT', 'Node.js'],
    category: 'web',
    liveUrl: 'https://health-sphere-frontend.vercel.app',
    githubUrl: 'https://github.com/jaishnaviinturi',
  },
  {
    id: 2,
    title: 'Cornea AI: HCEC Analysis',
    description: 'AI-powered system for analyzing Human Corneal Endothelial Cells (HCEC) images. Uses CNN and Vision Transformers for cell counting and ocular disease prediction.',
    image: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'PyTorch', 'OpenCV', 'Vision Transformers', 'CNN'],
    category: 'ai',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/jaishnaviinturi',
  },
  {
    id: 3,
    title: 'Ocular Disease Classification',
    description: 'Multi-label classification model using VGG16 architecture for accurate ocular disease predictions. Implements CLAHE and Z-score normalization for enhanced image features.',
    image: 'https://i.pinimg.com/1200x/ca/29/90/ca299014c0bb309f08aebf61ff95dd8d.jpg',
    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'VGG16'],
    category: 'ai',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/jaishnaviinturi',
  }
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web Apps' },
  { id: 'ai', name: 'AI/ML' }
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-12">Featured Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;