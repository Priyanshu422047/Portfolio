'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiCalendar } from 'react-icons/fi';

import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  github: string;
  date: string;
  tags: string[];
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-blue-500/10 transition-all cursor-pointer flex flex-col h-full"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
        <div className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded-md">
          <FiCalendar className="mr-1" />
          <span>{project.date}</span>
        </div>
      </div>
      
      <motion.div 
        animate={{ height: isExpanded ? "auto" : "3rem" }}
        className="overflow-hidden mb-4 flex-grow"
      >
        <p className={`text-gray-600 dark:text-gray-300 text-sm leading-relaxed ${!isExpanded ? 'line-clamp-2' : ''}`}>
          {project.description}
        </p>
      </motion.div>
      
      <div className="text-xs text-blue-500 mb-4 font-medium">
        {isExpanded ? 'Click to collapse' : 'Click to read more...'}
      </div>

      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => e.stopPropagation()} // prevent expanding when clicking github link
        >
          <FiGithub size={20} />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'NS-3 Based Emergency Evacuation Network Simulator',
      description: 'Simulated an IoT fire evacuation system in NS-3 with 100 Wi-Fi sensors and Dijkstra-based real-time path computation. Fixed ECMP routing and built a React/Konva web topology editor.',
      github: 'https://github.com/Priyanshu422047/NS3-Evacuation-Simulator',
      date: 'Aug 2025 - May 2026',
      tags: ['C++', 'React', 'NS-3', 'IoT']
    },
    {
      title: 'Safarnama – Travel Companion App',
      description: 'Developed an Android travel app enabling students to plan and document group trips. Designed backend using Node.js, Express.js, and MongoDB.',
      github: 'https://github.com/Priyanshu422047/Safarnama',
      date: 'Jan 2025 - May 2025',
      tags: ['Android', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      title: 'ChampSim Simulator Optimization',
      description: 'Tackled high cache conflict misses in CPUs by implementing and optimizing new cache indexing and replacement strategies.',
      github: 'https://github.com/Priyanshu422047/ChampSim-Optimization',
      date: 'Mar 2024 - Apr 2024',
      tags: ['C++', 'Cache Design', 'ChampSim']
    },
    {
      title: 'Minor Projects & Implementations',
      description: 'Various minor projects including RISC-V Assembler, C++ Branch Predictor, Next.js Portfolio Website, and AIMS Portal Clone with OTP login.',
      github: 'https://github.com/Priyanshu422047',
      date: 'Various',
      tags: ['C++', 'Next.js', 'RISC-V']
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my recent work, from network simulators to mobile applications and full-stack platforms.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 