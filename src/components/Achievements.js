import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaLanguage, FaLaptopCode, FaMedal } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaLaptopCode className="text-blue-600 text-3xl" />,
    title: "Top Performer - Octanet Internship",
    desc: "Recognized among Top 3 performers in Web Development Internship at Octanet, awarded Letter of Appreciation and Recommendation.",
  },
  {
    icon: <FaLanguage className="text-purple-600 text-3xl" />,
    title: "1st Place - Tamil Translation Contest",
    desc: "Won first prize and ₹10,000 in a Government State-Level Cultural Competition (English to Tamil Translation).",
  },
  {
    icon: <FaAward className="text-green-600 text-3xl" />,
    title: "3rd Place - App Development",
    desc: "Secured third place at PSNACET’s App Development Competition showcasing innovative mobile app ideas.",
  },
  {
    icon: <FaMedal className="text-yellow-500 text-3xl" />,
    title: "Hindi Prachar Sabha",
    desc: "Successfully completed all 8 levels of Hindi Prachar Sabha Certification Exam.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-lightPurple text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-primaryPurple mb-10"
      >
        Awards & Achievements
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-lightPurple hover:bg-primaryPurple hover:text-white transition-all duration-300 rounded-xl p-6 shadow-md border-2 border-primaryPurple"
          >
            <div className="flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
