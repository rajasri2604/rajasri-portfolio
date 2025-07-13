import React from 'react';

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
      
      {/* 🔹 Left: Profile Image */}
      {/* 🔹 Left: Profile Image */}
<div className="w-full md:w-1/2 flex justify-center">
  <div className="w-64 h-80 overflow-hidden rounded-xl border-4 border-primaryPurple shadow-xl">
    <img
      src="/images/raj.jpg"
      alt="Rajasri Profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>


      {/* 🔹 Right: About Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-4xl font-extrabold text-primaryPurple">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I’m Rajasri, an aspiring Full Stack Developer driven by creativity, precision, and problem-solving.
          With hands-on experience in technologies like React.js, Node.js, MongoDB, and Tailwind CSS,
          I specialize in building scalable and responsive web applications.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether it’s developing applications from scratch or collaborating on team-based projects,
          I thrive in transforming ideas into impactful digital products.
        </p>
      </div>
    </div>
  </section>
);

export default About;
