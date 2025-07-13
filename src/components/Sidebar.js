import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`
        fixed top-0 left-0 w-64 h-full
        bg-primaryPurple text-white z-50
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out
        shadow-xl
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-white">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={() => setIsOpen(false)}>
          <FaTimes className="text-xl" />
        </button>
      </div>

      {/* Menu Links */}
      <ul className="flex flex-col items-start space-y-6 p-6 text-base font-medium">
        <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-lightPurple">About</a></li>
        <li><a href="#skillsets" onClick={() => setIsOpen(false)} className="hover:text-lightPurple">Skillsets</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-lightPurple">Projects</a></li>
        <li><a href="#certifications" onClick={() => setIsOpen(false)} className="hover:text-lightPurple">Certifications</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-lightPurple">Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
