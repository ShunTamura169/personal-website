import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/ShunTamura169' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shun-tamura/' },
  { name: 'Twitter', url: 'https://twitter.com' }
];

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-orbitron font-semibold mb-12 text-center"
        >
          Let&apos;s Connect
        </motion.h2>
        
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((platform) => (
            <motion.a 
              key={platform.name} 
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 rounded-full px-6 py-3 font-medium hover:bg-cyan-300 hover:text-white transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {platform.name}
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="organization" className="block mb-2 text-sm font-medium">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <motion.button
                type="submit"
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;