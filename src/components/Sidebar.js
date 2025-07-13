import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Sidebar = () => (
  <div className="hidden lg:flex flex-col fixed left-4 top-1/3 space-y-4">
    <a href="#" className="text-primaryPurple hover:text-lightPurple"><FaGithub size={24} /></a>
    <a href="#" className="text-primaryPurple hover:text-lightPurple"><FaLinkedin size={24} /></a>
    <a href="#" className="text-primaryPurple hover:text-lightPurple"><FaTwitter size={24} /></a>
  </div>
);

export default Sidebar;
