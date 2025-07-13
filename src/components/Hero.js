import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-lightPurple text-primaryPurple text-center px-4"
    >
      {/* Hero Heading with Animated Highlighted Name */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Hi, I’m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 animate-pulse">
          Rajasri R K
        </span>{" "}
        👋
      </motion.h2>

      {/* Sub-heading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-xl md:text-2xl max-w-2xl mb-6"
      >
        Aspiring Full Stack Developer with a passion for clean code, design, and building responsive, scalable web apps.
      </motion.p>

      {/* Call to Action */}
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-6 py-3 bg-primaryPurple text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300"
      >
        Check Out My Projects 🚀
      </motion.a>
    </section>
  );
};

export default Hero;
