'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

export default function Introduction() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-6 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left z-10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase mb-2"
          >
            Software Engineer
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
          >
            Hey, I&apos;m Priyanshu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          >
            Computer Science & Engineering student at IIT Ropar with a passion for building scalable web applications and innovative technical solutions. Always exploring diverse areas of Computer Science.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-block bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-full shadow-md border border-gray-200 dark:border-gray-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 relative z-10"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 overflow-hidden shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Priyanshu"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
        <motion.a
          href="#projects"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-8 h-12 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full"
          />
        </motion.a>
      </motion.div>
    </section>
  );
} 