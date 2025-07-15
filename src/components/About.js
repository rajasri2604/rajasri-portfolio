// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 sm:px-6 lg:px-8">
      
      {/* 🔹 Left: Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="w-48 h-64 sm:w-60 sm:h-80 overflow-hidden rounded-xl border-4 border-primaryPurple shadow-xl">
          <img
            src="/images/raj.jpg"
            alt="Rajasri Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* 🔹 Right: About Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2 text-center md:text-left space-y-4"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryPurple">
          About Me
        </h2>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          I’m <span className="font-semibold text-primaryPurple">Rajasri</span>, a detail-driven Full Stack Developer passionate about building intuitive and scalable digital solutions. With expertise in the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js) and <strong>Tailwind CSS</strong>, I craft responsive web applications that blend performance with elegant design.
        </p>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Skilled in developing <strong>RESTful APIs</strong>, integrating databases, and delivering data-driven insights using <strong>Power BI</strong>, I ensure seamless backend logic and engaging user experiences.
        </p>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Thriving in agile, collaborative teams, I turn complex ideas into clean, functional code. Whether leading solo projects or contributing to cross-functional teams, I bring a user-first mindset, creativity, and precision to every line I write.
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;
