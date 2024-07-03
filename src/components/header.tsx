'use client'
import React from 'react';
import Link from 'next/link';
import  {useState, useEffect} from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <header className="bg-blue-500 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      {isOpen ? null : <h1 className="text-xl font-bold">My Website</h1>}
      <nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li className="mt-2 md:mt-0">
            <Link href="/">
             Home
            </Link>
          </li>
          <li className="mt-2 md:mt-0">
            <Link href="/about">
             About
            </Link>
          </li>
          <li className="mt-2 md:mt-0">
            <Link href="/booknow">
             Book Now
            </Link>
          </li>
          <li className="mt-2 md:mt-0">
            <Link href="/contact">
             Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
   
  );
};
export default Header;

