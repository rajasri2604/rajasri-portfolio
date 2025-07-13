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
    title: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    icon: <FaTools className="text-3xl text-yellow-500" />,
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Power BI", "UI/UX Design"],
  },
];

const Skillsets = () => (
  <section id="skillsets" className="py-20 bg-white text-center">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-extrabold text-primaryPurple mb-10"
    >
      My Skill Set
    </motion.h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-4">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="p-6 border border-primaryPurple rounded-xl shadow hover:shadow-lg transition-all"
        >
          <div className="mb-4 flex justify-center">{skill.icon}</div>
          <h3 className="text-xl font-bold text-primaryPurple mb-3">{skill.title}</h3>
          <ul className="text-gray-700 text-sm space-y-1">
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
