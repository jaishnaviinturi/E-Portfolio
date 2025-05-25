import React from 'react';
import { Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 block"
      aria-label={`View ${project.title} live project`}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-end">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              onClick={(e) => e.stopPropagation()} // Prevent card click from triggering
              aria-label={`View ${project.title} code on GitHub`}
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium py-1 px-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs font-medium py-1 px-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;