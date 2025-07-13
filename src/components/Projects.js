import React from 'react';
import {
  FaGlobe, FaLock, FaHeartbeat, FaMusic,
  FaBookOpen, FaTint, FaPalette
} from 'react-icons/fa';

const projects = [
  {
    title: "Travelling Journeo Website",
    desc: "A full-featured travel website built using the MERN stack. Includes search, booking, and admin panel.",
    icon: <FaGlobe className="text-blue-500 text-3xl" />,
  },
  {
    title: "Student Certificate Validation",
    desc: "Blockchain-based project to verify student certificates securely and transparently.",
    icon: <FaLock className="text-green-600 text-3xl" />,
  },
  {
    title: "Skin Disease Detection",
    desc: "AI-based app detecting skin diseases via image processing. Published in IJIRT.",
    icon: <FaHeartbeat className="text-red-500 text-3xl" />,
  },
  {
    title: "Music Player Website",
    desc: "Dynamic ReactJS music player app with sleek UI and audio controls.",
    icon: <FaMusic className="text-pink-500 text-3xl" />,
  },
  {
    title: "Online Book Store",
    desc: "PHP-MySQL e-commerce platform for managing books and purchases.",
    icon: <FaBookOpen className="text-purple-600 text-3xl" />,
  },
  {
    title: "IoT Smart Water Level Detection",
    desc: "Built using NodeMCU and ultrasonic sensors to monitor and notify real-time water levels.",
    icon: <FaTint className="text-cyan-600 text-3xl" />,
  },
  {
    title: "UI/UX Design – Music Player App",
    desc: "Figma-based design for a modern, sleek music player interface with user-focused usability.",
    icon: <FaPalette className="text-yellow-500 text-3xl" />,
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-lightPurple text-center px-4 sm:px-6">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryPurple mb-10">My Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {projects.map((p, i) => (
        <div
          key={i}
          className="p-6 border-2 border-primaryPurple rounded-xl bg-white text-primaryPurple shadow-md hover:bg-primaryPurple hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <div className="mb-4">{p.icon}</div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{p.title}</h3>
          <p className="text-sm sm:text-base leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
