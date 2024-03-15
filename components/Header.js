// Header.js
"use client"; 
import React, { useState, useEffect } from 'react';
import { GlobeAltIcon, MagnifyingGlassIcon, Bars3Icon, UserIcon } from '@heroicons/react/24/outline'
import LogoAirBNB01 from '../components/icons/LogoAirBNB01.js'

export default function Header() {
  const [showSearch, setShowSearch] = useState(true);

  useEffect(() => {
    // Show search when scrolled to top
    const handleScroll = () => {
      setShowSearch(window.scrollY === 0);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 md:grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* Logo */}
      <div className="hidden md:flex text-2xl font-bold">
        <LogoAirBNB01 className="h-[111px]" />
      </div>

      {/* Navigation */}
      <div className={`flex flex-col items-center space-x-4 space-y-4 ${!showSearch && 'md:space-y-0'}`}>
        <nav>
          <ul className="flex space-x-4">
            <li>Stays</li>
            <li>Experiences</li>
            <li>Events</li>
          </ul>
        </nav>  
        {showSearch && (
          <form className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
            <input type="text" placeholder="Search global stays" className="flex-grow pl-5 bg-transparent outline-none" />
            <MagnifyingGlassIcon className="hidden md:inline-flex h-7 w-7 p-1 bg-red-400 text-white rounded-full cursor-pointer md:mx-2" />
          </form>
        )}
      </div>

      {/* User Menu */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 cursor-pointer">
        <p className="hidden md:inline">List your home</p>
        <GlobeAltIcon className="h-6 w-6" />
        <div className="flex items-center spaxe-x-4 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 w-6"/>
          <UserIcon className="h-6 w-6" />
        </div>
      </div>
    </header>
  )
}