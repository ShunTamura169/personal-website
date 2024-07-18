import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
}

const projects: Project[] = [
  { 
    title: 'Project Alpha', 
    description: 'A cutting-edge web application built with Next.js and GraphQL.',
    techStack: ['Next.js', 'GraphQL', 'Tailwind CSS'],
    imageUrl: '/Alps.png'
  },
  { 
    title: 'Project Beta', 
    description: 'An innovative mobile app developed using React Native and Firebase.',
    techStack: ['React Native', 'Firebase', 'Expo'],
    imageUrl: '/Bathy_reef.png'
  },
  // Add more projects as needed
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="relative h-48">
      <Image 
        src={project.imageUrl} 
        alt={project.title} 
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <ul className="text-white text-sm">
          {project.techStack.map((tech, index) => (
            <li key={index} className="inline-block bg-blue-500 rounded-full px-3 py-1 m-1">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <motion.a 
        href="#" 
        className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
        whileHover={{ x: 5 }}
      >
        Learn more →
      </motion.a>
    </div>
  </motion.div>
);

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;