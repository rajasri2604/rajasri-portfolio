// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGlobe, FaLock, FaHeartbeat, FaMusic,
  FaBookOpen, FaTint, FaPalette
} from 'react-icons/fa';

const projects = [
  {
    title: "Travelling Journeo Website",
    desc: "A full‑featured travel website built with the MERN stack (search, booking, admin panel).",
    icon: <FaGlobe className="text-blue-500 text-3xl" />,
  },
  {
    title: "Student Certificate Validation",
    desc: "Blockchain‑based platform to verify student certificates securely and transparently.",
    icon: <FaLock className="text-green-600 text-3xl" />,
  },
  {
    title: "Skin Disease Detection",
    desc: "AI web app that detects skin diseases from images (IJIRT‑published).",
    icon: <FaHeartbeat className="text-red-500 text-3xl" />,
  },
  {
    title: "Music Player Website",
    desc: "Dynamic ReactJS music player with sleek UI and audio controls.",
    icon: <FaMusic className="text-pink-500 text-3xl" />,
  },
  {
    title: "Online Book Store",
    desc: "PHP‑MySQL e‑commerce platform for managing books and purchases.",
    icon: <FaBookOpen className="text-purple-600 text-3xl" />,
  },
  {
    title: "IoT Smart Water Level Detection",
    desc: "NodeMCU + ultrasonic sensors for real‑time water‑level monitoring & alerts.",
    icon: <FaTint className="text-cyan-600 text-3xl" />,
  },
  {
    title: "UI/UX Design – Music Player App",
    desc: "Figma mock‑ups for a modern, user‑focused music player interface.",
    icon: <FaPalette className="text-yellow-500 text-3xl" />,
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-lightPurple text-center px-4 sm:px-6">
    {/* Animated heading */}
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl sm:text-4xl font-extrabold text-primaryPurple mb-10"
    >
      My Projects
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="p-6 border-2 border-primaryPurple rounded-xl bg-white text-primaryPurple shadow-md
                     hover:bg-primaryPurple hover:text-white hover:shadow-xl hover:scale-105
                     transition-all duration-300"
        >
          <div className="mb-4">{p.icon}</div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{p.title}</h3>
          <p className="text-sm sm:text-base leading-relaxed">{p.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
