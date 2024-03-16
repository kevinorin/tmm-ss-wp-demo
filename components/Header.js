// Header.js
"use client";
import { useState, useEffect } from 'react';
import { GlobeAltIcon, MagnifyingGlassIcon, Bars3Icon, UserIcon } from '@heroicons/react/24/outline';
import LogoAirBNB01 from '../components/icons/LogoAirBNB01.js';

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSearch(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 md:grid-cols-3 bg-white shadow-md py-5 md:py-0 px-5 md:px-10 items-center transition-all duration-500">
      {/* Logo */}
      <div className="hidden md:flex text-2xl font-bold">
        <LogoAirBNB01 className="h-[111px]" />
      </div>

      {/* Navigation and Search */}
      <div className="flex flex-col items-center md:items-start space-x-4 md:space-x-0 md:flex-row justify-between flex-grow transition-all duration-500">
        {/* Navigation */}
        <nav className={`transition-transform duration-500 transform ${showSearch ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
          <ul className="flex space-x-4">
            <li className="px-3 py-2 rounded-full bg-transparent hover:bg-gray-100 cursor-pointer">Stays</li>
            <li className="px-3 py-2 rounded-full bg-transparent hover:bg-gray-100 cursor-pointer">Experiences</li>
            <li className="px-3 py-2 rounded-full bg-transparent hover:bg-gray-100 cursor-pointer">Events</li>
          </ul>
        </nav>
        {/* Search */}
        <form className={`absolute flex items-center md:border-2 rounded-full py-2 md:shadow-sm transition-all duration-500 transform ${showSearch ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}>
          <input type="text" placeholder="Search global stays" className="flex-grow pl-5 bg-transparent outline-none border-l-2 border-red-500 sm:border-none animate-pulse focus:animate-none" />
          <MagnifyingGlassIcon className="hidden md:inline-flex h-7 w-7 p-1 bg-red-400 text-white rounded-full cursor-pointer md:mx-2" />
        </form>
      </div>

      {/* User Menu */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 cursor-pointer">
        <p className="hidden md:inline">List your home</p>
        <GlobeAltIcon className="h-6 w-6" />
        <div className="flex items-center space-x-4 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 w-6" />
          <UserIcon className="h-6 w-6" />
        </div>
      </div>
    </header>
  );
}
