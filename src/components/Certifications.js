// src/components/Certifications.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const certificates = [
  {
    title: 'AWS Academy Cloud Foundations',
    link: '/images/aws.pdf',
  },
  {
    title: 'NPTEL Programming in Java',
    link: '/images/nptel.png',
  },
  {
    title: 'IBM DigiLab Certifications',
    link: '/images/ibm1.pdf',
  },
  {
    title: 'MongoDB Certification Series',
    link: '/images/m1.pdf',
  },
  {
    title: 'UDEMY - Web Development',
    link: '/images/u1.pdf',
  },
  {
    title: 'Internship - Full Stack Projects',
    link: '/images/h1.pdf',
  },
];

const Certifications = () => (
  <section id="certifications" className="py-20 bg-white text-center">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl sm:text-4xl font-extrabold text-primaryPurple mb-10"
    >
      Certifications
    </motion.h2>

    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 text-left">
      {certificates.map((cert, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="group bg-lightPurple border border-primaryPurple rounded-xl p-4 shadow hover:bg-primaryPurple hover:text-white transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-2">
            <FaAward className="text-xl text-primaryPurple group-hover:text-white transition" />
            <h3 className="font-semibold text-base text-primaryPurple group-hover:text-white transition">
              {cert.title}
            </h3>
          </div>

          <a
            href={cert.link}
            className="text-sm underline text-primaryPurple group-hover:text-pink-200 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Certifications;
