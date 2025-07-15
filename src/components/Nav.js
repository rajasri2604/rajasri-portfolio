import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from './Sidebar';

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-primaryPurple text-white z-20 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 sm:px-6">

          {/* 🍔 Hamburger on left */}
          <div className="md:hidden">
            <button onClick={() => setIsSidebarOpen(true)}>
              <GiHamburgerMenu className="text-2xl" />
            </button>
          </div>

          {/* 🎨 RK Logo + Name */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center bg-pink-300 text-white font-bold rounded-full shadow-md text-lg">
              RK
            </div>
            <h1 className="text-xl font-bold whitespace-nowrap">Rajasri R K</h1>
          </div>

          {/* 🔗 Desktop Links */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-pink-200">About</a></li>
            <li><a href="#skillsets" className="hover:text-pink-200">Skillsets</a></li>
            <li><a href="#projects" className="hover:text-pink-200">Projects</a></li>
            <li><a href="#certifications" className="hover:text-pink-200">Certifications</a></li>
            <li><a href="#contact" className="hover:text-pink-200">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* 📱 Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
};

export default Nav;
