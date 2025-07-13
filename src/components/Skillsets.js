import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaServer } from 'react-icons/fa';

const skills = [
  {
    icon: <FaCode className="text-3xl text-purple-600" />,
    title: "Frontend",
    items: ["ReactJS", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: <FaServer className="text-3xl text-green-600" />,
    title: "Backend",
    items: ["NodeJS", "ExpressJS", "REST API", "PHP"],
  },
  {
    icon: <FaDatabase className="text-3xl text-blue-600" />,
    title: "Databases & Programming",
    items: ["SQL", "MongoDB", "JAVA", "C++"],
  },
  {
    icon: <FaTools className="text-3xl text-yellow-500" />,
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Power BI", "UI/UX Design"],
  },
];

const Skillsets = () => (
  <section id="skillsets" className="py-20 bg-white text-center px-4 sm:px-6">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl sm:text-4xl font-extrabold text-primaryPurple mb-10"
    >
      My Skill Set
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="p-6 border border-primaryPurple rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white"
        >
          <div className="mb-4 flex justify-center">{skill.icon}</div>
          <h3 className="text-lg sm:text-xl font-bold text-primaryPurple mb-3">{skill.title}</h3>
          <ul className="text-gray-700 text-sm sm:text-base space-y-1">
            {skill.items.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skillsets;
