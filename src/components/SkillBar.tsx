import React from 'react';

interface SkillBarProps {
  name: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  return (
    <div className="group">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {name}
        </span>
        <span className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;