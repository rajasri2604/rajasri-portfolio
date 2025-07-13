import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section
    id="home"
    className="
      min-h-screen                     /* full height on every device */
      flex flex-col justify-center items-center
      bg-lightPurple text-primaryPurple text-center
      px-4 md:px-8 lg:px-12            /* wider side‑padding on bigger screens */
    "
  >
    {/* 🔹 Heading with highlighted name */}
    <motion.h2
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="
        font-bold mb-4
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl  /* scales nicely */
      "
    >
      Hi, I’m{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 animate-pulse">
        Rajasri R K
      </span>{' '}
      👋
    </motion.h2>

    {/* 🔸 Sub‑heading */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="
        max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl
        text-base sm:text-lg md:text-xl lg:text-2xl
        mb-8 sm:mb-10
      "
    >
      Aspiring Full‑Stack Developer with a passion for clean code, design,
      and building responsive, scalable web apps.
    </motion.p>

    {/* 🔸 Call‑to‑action */}
    <motion.a
      href="#projects"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="
        inline-block
        px-6 py-3 md:px-8 md:py-4
        bg-primaryPurple text-white font-semibold
        rounded-full shadow-lg hover:shadow-xl
        transition duration-300
        text-sm sm:text-base
      "
    >
      Check Out My Projects 🚀
    </motion.a>
  </section>
);

export default Hero;
