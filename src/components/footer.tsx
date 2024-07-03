import React from 'react';
import Link from 'next/link';

import  {useState, useEffect} from 'react';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">My Website</h2>
          <p className="text-gray-400">© {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0 text-center md:text-left">
          <Link href="/">
            Home
          </Link>
          <Link href="/about">
            About
          </Link>
          <Link href="/booknow">
            Book Now
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </div>
        <div className="text-center md:text-left">
          <p>Contact us:</p>
          <p>Email: contact@mywebsite.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
  </footer>
  );
};
export default Footer;

