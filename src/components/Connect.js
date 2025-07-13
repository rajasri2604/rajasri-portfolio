import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Connect = () => (
  <section id="connect" className="py-20 bg-lightPurple text-center">
    <h2 className="text-4xl font-extrabold text-primaryPurple mb-10">
      Connect With Me
    </h2>

    <div className="flex justify-center gap-8 flex-wrap">
      <a
        href="https://github.com/rajasri2604"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 border-2 border-primaryPurple rounded-full hover:bg-primaryPurple hover:text-white transition"
      >
        <FaGithub className="text-xl" />
        GitHub
      </a>

      <a
        href="https://linkedin.com/in/rajasrirk"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 border-2 border-primaryPurple rounded-full hover:bg-primaryPurple hover:text-white transition"
      >
        <FaLinkedin className="text-xl" />
        LinkedIn
      </a>

      <a
        href="https://leetcode.com/u/raja_sri04/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 border-2 border-primaryPurple rounded-full hover:bg-primaryPurple hover:text-white transition"
      >
        <SiLeetcode className="text-xl" />
        LeetCode
      </a>
    </div>
  </section>
);

export default Connect;
