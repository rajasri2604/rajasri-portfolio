import React from 'react';

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 sm:px-6 lg:px-8">
      
      {/* 🔹 Left: Profile Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-48 h-64 sm:w-60 sm:h-80 overflow-hidden rounded-xl border-4 border-primaryPurple shadow-xl">
          <img
            src="/images/raj.jpg"
            alt="Rajasri Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 🔹 Right: About Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryPurple">
          About Me
        </h2>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          I’m <span className="font-semibold text-primaryPurple">Rajasri</span>, an aspiring Full Stack Developer driven by creativity, precision, and problem-solving.
          With hands-on experience in technologies like React.js, Node.js, MongoDB, and Tailwind CSS,
          I specialize in building scalable and responsive web applications.
        </p>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Whether it’s developing applications from scratch or collaborating on team-based projects,
          I thrive in transforming ideas into impactful digital products.
        </p>
      </div>
    </div>
  </section>
);

export default About;
