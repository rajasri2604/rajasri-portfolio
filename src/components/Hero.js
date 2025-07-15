import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex flex-col justify-center items-center text-primaryPurple text-center px-4 md:px-8 lg:px-12 overflow-hidden"
  >
    {/* 🔳 Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/images/bg2.jpeg"
        alt="Background"
        className="w-full h-full object-cover brightness-90"
      />
      <div className="absolute inset-0 bg-lightPurple/50" />
    </div>

    {/* 🌟 Foreground Content */}
    <div className="relative z-10">
      {/* 🔹 Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="font-bold mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Hi, I’m{' '}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-600 font-extrabold animate-pulse"
        >
          Rajasri R K
        </motion.span>{' '}
        👋
      </motion.h2>

      {/* 🔸 Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 text-black font-medium"
      >
        Aspiring Full‑Stack Developer with a passion for clean code, design,
        and building responsive, scalable web apps.
      </motion.p>

      {/* 🔸 CTA Button */}
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-6 py-3 md:px-8 md:py-4 bg-primaryPurple text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300 text-sm sm:text-base"
      >
        Check Out My Projects 🚀
      </motion.a>
    </div>
  </section>
);

export default Hero;
