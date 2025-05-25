import React from 'react';
import { Award } from 'lucide-react';

interface Certificate {
  name: string;
  issuer: string;
  date?: string;
  link?: string;
}

const certificates: Certificate[] = [
  {
    name: "Java Fundamentals and Java Foundations",
    issuer: "Oracle",
    link: "/certificates/Oracle Java Fundamentals.pdf" // Replace with actual PDF filename
  },
  {
    name: "Python for Data Science",
    issuer: "NPTEL",
    link: "/certificates/NPTEL-Python For Data Science.pdf" // Replace with actual PDF filename
  },
  {
    name: "Introduction to HTML",
    issuer: "SoloLearn",
    link: "/certificates/introduction_html.pdf" // Replace with actual PDF filename
  },
  {
    name: "Problem Solving through Programming in C",
    issuer: "NPTEL",
    link: "/certificates/NPTEL-Programmng in C.pdf" // Replace with actual PDF filename
  },
  {
    name: "Programming Essentials in Python",
    issuer: "Cisco",
    link: "/certificates/Python cisco (1).pdf" // Replace with actual PDF filename
  },
  {
    name: "Summer of AI",
    issuer: "Swecha",
    link: "/certificates/Swetcha-AI Internship.pdf" // Replace with actual PDF filename
  }
];

const achievements = [
  {
    description: "Secured 4th Place Overall & 2nd Prize in Domain category at HackFiniti national-level hackathon",
    link: "/achievements/hackwithinfinity_4th_place.pdf" // Replace with actual PDF filename
  },
  {
    description: "Organized TechMaze college-level technical event",
    link: "/achievements/techmaze_event.pdf" // Replace with actual PDF filename, if available
  },
  {
    description: "Achieved 3rd prize in Inter-College level Codebreakers Competition",
    link: "/achievements/codebreakers_3rd_prize.pdf" // Replace with actual PDF filename
  },
  {
    description: "10/10 GPA in 10th, 98.4% in intermediate"
    // No link, as academic scores typically don’t have PDFs
  },
  {
    description: "BTech CGPA of 9.31 (up to 3-1 semester)"
    // No link, as academic scores typically don’t have PDFs
  }
  
];

const CertificatesSection: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-16">Certificates & Achievements</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
              <Award className="mr-3 text-blue-600 dark:text-blue-400" />
              Certifications
            </h3>
            
            <div className="grid gap-4">
              {certificates.map((cert, index) => (
                cert.link ? (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow block"
                    aria-label={`View ${cert.name} certificate`}
                  >
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {cert.name}
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </span>
                  </a>
                ) : (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {cert.name}
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </span>
                  </div>
                )
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
              <Award className="mr-3 text-purple-600 dark:text-purple-400" />
              Achievements
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                achievement.link ? (
                  <a
                    key={index}
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow block"
                    aria-label={`View details for ${achievement.description}`}
                  >
                    <p className="text-gray-800 dark:text-white">
                      {achievement.description}
                    </p>
                  </a>
                ) : (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <p className="text-gray-800 dark:text-white">
                      {achievement.description}
                    </p>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;