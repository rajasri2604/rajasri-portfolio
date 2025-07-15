// src/components/Education.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationList = [
  {
    degree: 'B.E. Computer Science & Engineering',
    year: '2022 – 2026',
    institute: 'PSNA College of Engineering and Technology',
    location: 'Dindigul, Tamil Nadu',
    result: 'CGPA: 9.51 (Till 5th Semester)',
  },
  {
    degree: 'HSC',
    year: '2021 – 2022',
    institute: "St. Joseph's Girls Higher Secondary School",
    location: 'Dindigul, Tamil Nadu',
    result: 'Percentage: 88.66%',
  },
  {
    degree: 'SSLC',
    year: '2019 – 2020',
    institute: "St. Joseph's Girls Higher Secondary School",
    location: 'Dindigul, Tamil Nadu',
    result: 'Percentage: 92%',
  },
];

const Education = () => (
  <section id="education" className="py-20 bg-lightPurple text-center">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl sm:text-4xl font-extrabold text-primaryPurple mb-10"
    >
      Education
    </motion.h2>

    <div className="max-w-4xl mx-auto space-y-8 text-left px-4 sm:px-6">
      {educationList.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="group bg-white p-6 rounded-xl shadow-md border-l-4 border-primaryPurple hover:bg-primaryPurple hover:text-white transition-all duration-300"
        >
          <div className="flex items-start gap-4 mb-2">
            <FaGraduationCap className="text-2xl text-primaryPurple group-hover:text-white mt-1 transition" />
            <div>
              <h3 className="text-xl font-bold text-primaryPurple group-hover:text-white transition">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-700 group-hover:text-gray-200 transition">
                {edu.year}
              </p>
            </div>
          </div>
          <p className="font-medium text-primaryPurple group-hover:text-white transition">{edu.institute}</p>
          <p className="text-sm text-gray-600 group-hover:text-gray-200 transition">{edu.location}</p>
          <p className="mt-1 text-sm font-semibold">
            {edu.result.includes('CGPA') ? (
              <>
                CGPA:{' '}
                <span className="text-green-600 group-hover:text-green-300 font-semibold transition">
                  {edu.result.replace('CGPA: ', '')}
                </span>
              </>
            ) : (
              <>
                Percentage:{' '}
                <span className="text-green-600 group-hover:text-green-300 font-semibold transition">
                  {edu.result.replace('Percentage: ', '')}
                </span>
              </>
            )}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Education;
