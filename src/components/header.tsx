'use client'
import React from 'react';
import Link from 'next/link';
import  {useState, useEffect} from 'react';
import useAuthStore from '@/store/store';
import { useRouter } from 'next/navigation';


const Header = () => {
  const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const user = useAuthStore((state:any) => state.user);
    const logout = useAuthStore((state:any) => state.logout);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    console.log(user);
    const handleLogout = async () => {
      await logout();
      router.push('/login');
    };
  return (
    <header className="bg-blue-500 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      {isOpen ? null : <h1 className="text-xl font-bold">ALDB</h1>}
      {user ? <text>Hello, {user.email} </text> : null}
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
          {user ? <button onClick={() => handleLogout()}>Log Out</button> : <li className="mt-2 md:mt-0">
            <Link href="/login">
             Login
            </Link>
          </li>}
        {user ? <li className="mt-2 md:mt-0">
            <Link href="/reports">
             REPORTS
            </Link>
          </li> : null }  
          {user ?   <li className="mt-2 md:mt-0">
            <Link href="/performance">
             Performance
            </Link>
          </li>: null }
        </ul>
      </nav>
    </div>
  </header>
   
  );
};
export default Header;

