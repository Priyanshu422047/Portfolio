'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';

export default function Introduction() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hey, I&apos;m Priyanshu
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Computer Science & Engineering student at IIT Ropar with a passion for Software Engineering. Exploring diverse areas of Computer Science through innovative projects and hands-on experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              RESUME
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                CONTACT ME
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/profile.jpg"
              alt="Priyanshu"
              fill
              className="rounded-full object-cover shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 