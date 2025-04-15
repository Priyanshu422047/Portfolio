'use client';

import { motion } from 'framer-motion';

const skills = {
  'Programming Languages': ['C/C++', 'Python', 'Java', 'TypeScript'],
  'Web Technologies': ['Next.js', 'React', 'Node.js', 'HTML/CSS'],
  'DevOps & Tools': ['Git', 'Docker', 'AWS', 'MongoDB'],
  'Data Skills': ['SQL', 'Data Structures', 'Algorithms', 'Database Design']
};

export default function Skills() {
  return (
    <section className="py-12" id="skills">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 