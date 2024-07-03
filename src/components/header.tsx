import React from 'react';
import Link from 'next/link';


import  {useState, useEffect} from 'react';
const Header = () => {
  return (
    <header className="bg-green-500 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">My Website</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
          <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/booknow" className="hover:underline">
              Book Now
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
   
  );
};
export default Header;

