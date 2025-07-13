import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaLaptopCode, FaRobot } from 'react-icons/fa';

const participations = [
  {
    icon: <FaUsers className="text-3xl text-indigo-600" />,
    title: "GDSC Member",
    desc: "Active member of the Google Developer Student Club, collaborating on open-source and tech workshops.",
  },
  {
    icon: <FaUsers className="text-3xl text-blue-600" />,
    title: "IEEE Xplorer Member",
    desc: "Contributed to IEEE technical meetups and knowledge sharing initiatives.",
  },
  {
    icon: <FaRobot className="text-3xl text-green-600" />,
    title: "PSG TECHNOTRONZ’25 – Hackerse Hackathon",
    desc: "Participated in the national-level hackathon with hands-on project building and team coding.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-yellow-600" />,
    title: "Inter-Ideafest’24 – PSNACET",
    desc: "Presented startup ideas in a tech innovation challenge under the CSI Student Chapter.",
  },
];

const Participation = () => {
  return (
    <section id="participation" className="py-20 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-primaryPurple mb-10"
      >
        Active Participation & Memberships
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {participations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white hover:bg-primaryPurple hover:text-white transition-all duration-300 rounded-xl p-6 shadow-md border-2 border-primaryPurple"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Participation;
