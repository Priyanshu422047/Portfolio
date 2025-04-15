'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiCalendar } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'AIMS Portal Clone',
      description: 'Developed a clone of IIT AIMS portal with OTP-based login, course enrollments, and grade assignment functionality.',
      github: 'https://github.com/bakasingh/aims-portal',
      date: 'Feb 2025 - Mar 2025',
      tags: ['Next.js', 'MongoDB', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'RISC-V Assembler',
      description: 'Implemented a RISC-V assembler in C++ to convert assembly into machine code with register and memory state display.',
      github: 'https://github.com/bakasingh/CS204-Assembler',
      date: 'Feb 2024 - Mar 2024',
      tags: ['C++', 'RISC-V', 'Assembly']
    },
    {
      title: 'Trip Management App',
      description: 'Full-stack web application for trip planning with features like packing lists, cost tracking, and route planning.',
      github: 'https://github.com/bakasingh/Trip-App',
      date: 'Jan 2025 - May 2025',
      tags: ['Node.js', 'MongoDB', 'React']
    },
    {
      title: 'ChampSim Simulator',
      description: 'Optimized cache performance using randomized cache management to reduce conflict misses.',
      github: 'https://github.com/bakasingh/Optimizing-Cache-Performance-Strategies-for-Minimizing-Conflict-Misses',
      date: 'Mar 2024 - Apr 2024',
      tags: ['C++', 'Cache Design', 'Performance']
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <FiCalendar className="mr-1" />
                  <span>{project.date}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-end">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiGithub size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 