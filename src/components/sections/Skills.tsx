'use client';

import { motion } from 'framer-motion';
import { FiCode, FiGlobe, FiDatabase, FiTool } from 'react-icons/fi';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: <FiCode className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    items: ['C/C++', 'Python', 'Java', 'RISC-V Assembly']
  },
  {
    category: 'Web Technologies',
    icon: <FiGlobe className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    items: ['HTML', 'CSS', 'JavaScript', 'Node.js']
  },
  {
    category: 'Databases & Frameworks',
    icon: <FiDatabase className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-500',
    items: ['MongoDB', 'SQL', 'React', 'Next.js']
  },
  {
    category: 'Tools & Emulators',
    icon: <FiTool className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    items: ['Arduino', 'NS-3', 'Git', 'Linux']
  }
];

export default function Skills() {
  return (
    <section className="py-24 relative z-10" id="skills">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise, encompassing programming languages, web technologies, and developer tools.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700 p-8 rounded-2xl shadow-xl h-full flex flex-col">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${skillGroup.color} text-white shadow-lg`}>
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-col gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      className="flex items-center gap-3 bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${skillGroup.color}`} />
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 