// src/components/Connect.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Connect = () => (
  <section id="connect" className="py-20 bg-lightPurple text-center">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl sm:text-4xl font-extrabold text-primaryPurple mb-10"
    >
      Connect With Me
    </motion.h2>

    <div className="flex justify-center gap-6 sm:gap-8 flex-wrap px-4">
      {[
        {
          icon: <FaGithub className="text-xl" />,
          label: 'GitHub',
          link: 'https://github.com/rajasri2604',
        },
        {
          icon: <FaLinkedin className="text-xl" />,
          label: 'LinkedIn',
          link: 'https://linkedin.com/in/rajasrirk',
        },
        {
          icon: <SiLeetcode className="text-xl" />,
          label: 'LeetCode',
          link: 'https://leetcode.com/u/raja_sri04/',
        },
      ].map((social, index) => (
        <motion.a
          key={social.label}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="flex items-center gap-2 px-6 py-3 text-sm sm:text-base border-2 border-primaryPurple rounded-full hover:bg-primaryPurple hover:text-white transition duration-300 shadow-md"
        >
          {social.icon}
          {social.label}
        </motion.a>
      ))}
    </div>
  </section>
);

export default Connect;
