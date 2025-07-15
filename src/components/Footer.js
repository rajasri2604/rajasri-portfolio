import React from 'react';

const Footer = () => (
  <footer className="py-6 bg-primaryPurple text-center text-white text-sm md:text-base">
    <p>
      Designed & Developed by{' '}
      <span className="font-semibold text-white hover:text-lightPurple transition duration-300">
        Rajasri R K
      </span>
    </p>
    <p className="mt-1">
      © {new Date().getFullYear()} Rajasri R K. All rights reserved.
    </p>
  </footer>
);

export default Footer;
