import React from 'react';

interface SkillCardProps {
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-200 dark:hover:bg-gray-700">
      <p className="text-gray-800 dark:text-gray-200 text-sm font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
        {name}
      </p>
    </div>
  );
};

export default SkillCard;