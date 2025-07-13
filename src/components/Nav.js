import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from './Sidebar';

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-primaryPurple text-white z-20 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          
          {/* 🍔 Hamburger on left */}
          <div className="md:hidden">
            <button onClick={() => setIsSidebarOpen(true)}>
              <GiHamburgerMenu className="text-2xl" />
            </button>
          </div>

          {/* 👤 Profile icon + name */}
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-2xl" />
            <h1 className="text-2xl font-bold">Rajasri R K</h1>
          </div>

          {/* 🔗 Desktop Links */}
          <ul className="hidden md:flex space-x-6">
            <li><a href="#about" className="hover:text-lightPurple">About</a></li>
            <li><a href="#skillsets" className="hover:text-lightPurple">Skillsets</a></li>
            <li><a href="#projects" className="hover:text-lightPurple">Projects</a></li>
            <li><a href="#certifications" className="hover:text-lightPurple">Certifications</a></li>
            <li><a href="#contact" className="hover:text-lightPurple">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
};

export default Nav;
