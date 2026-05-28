'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setFormStatus('success');
      form.reset();
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Feel free to reach out for collaborations or just a friendly chat.
              </p>
            </div>
            
            <div className="flex justify-center md:justify-start gap-8">
              <motion.a
                href="https://github.com/Priyanshu422047"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub size={40} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/priyanshu-3aa101268"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin size={40} />
              </motion.a>
              <motion.a
                href="mailto:2022csb1107@iitrpr.ac.in"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiMail size={40} />
              </motion.a>
              <div className="flex items-center text-gray-600 dark:text-gray-400 font-semibold text-lg ml-4">
                +91-8837819138
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className={`w-full py-3 rounded-lg transition-colors text-lg font-semibold ${
                  formStatus === 'sending'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : formStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : formStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {formStatus === 'sending'
                  ? 'Sending...'
                  : formStatus === 'success'
                  ? 'Message Sent!'
                  : formStatus === 'error'
                  ? 'Error Sending Message'
                  : 'Send Message'}
              </button>
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 