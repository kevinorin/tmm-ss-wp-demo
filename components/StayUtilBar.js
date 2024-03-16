"use client";
import React, { useState, useEffect, useRef } from 'react';
import { AdjustmentsHorizontalIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ToggleButton from './Toggle.js';

export default function StayUtilBar() {

  const scrollContainerRef = useRef(null);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftChevron(scrollLeft > 0);
      setShowRightChevron(scrollLeft < scrollWidth - clientWidth);
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll(); // Initial check

    return () => scrollContainer.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="sticky top-[100px] z-40 flex items-center justify-between w-full mx-auto px-5 lg:px-20 py-5 space-x-8 bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="relative flex space-x-14 items-center justify-between overflow-x-scroll scrollbar-hide">
        {showLeftChevron && (
          <button onClick={() => scroll('left')} className="absolute left-0 z-50 p-1 rounded-full border border-gray-2 hover:scale-105 hover:shadow-md bg-white/60 backdrop-blur-sm">
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
        )}
        <div ref={scrollContainerRef} className="flex space-x-14 justify-between overflow-x-scroll scrollbar-hide px-10">
          <div className="flex text-center items-center flex-col">
            <span className="material-symbols-outlined text-gray-600 text-3xl">Wheelchair_pickup</span> 
            <span className="text-sm">Accessible</span>
          </div>
          <div className="flex text-center items-center flex-col">
            <span className="material-symbols-outlined text-gray-600 text-3xl">House</span> 
            <span className="text-sm">House</span>
          </div>
          <div className="flex text-center items-center flex-col">
            <span className="material-symbols-outlined text-gray-600 text-3xl">Apartment</span> 
            <span className="text-sm">Apartment</span>
          </div>
          <div className="flex text-center items-center flex-col">
            <span className="material-symbols-outlined text-gray-600 text-3xl">Cabin</span> 
            <span className="text-sm">Cabin</span>
          </div>
          <div className="flex text-center items-center flex-col">
            <span className="material-symbols-outlined text-gray-600 text-3xl">holiday_village</span> 
            <span className="text-sm">EcoVIllage</span>
          </div>
          <div className="flex text-center items-center flex-col">
            <span className="material-symbols-outlined text-gray-600 text-3xl">Houseboat</span> 
            <span className="text-sm">Houseboat</span>
          </div>
          <div className="flex text-center items-center flex-col">
            <span className="material-symbols-outlined text-gray-600 text-3xl">nest_multi_room</span> 
            <span className="text-sm">Hostel</span>
          </div>
          <div className="flex text-center items-center flex-col">
            <span className="material-symbols-outlined text-gray-600 text-3xl">Camping</span> 
            <span className="text-sm">Campsite</span>
          </div>
          <div className="flex text-center items-center flex-col">
            <span className="material-symbols-outlined text-gray-600 text-3xl">Festival</span> 
            <span className="text-sm">Yurt</span>
          </div>
          <div className="flex text-center items-center flex-col">
            <span className="material-symbols-outlined text-gray-600 text-3xl">Castle</span> 
            <span className="text-sm">Castle</span>
          </div>
          <div className="flex text-center items-center flex-col">
            <span className="material-symbols-outlined text-gray-600 text-3xl">RV_hookup</span> 
            <span className="text-sm">RV</span>
          </div>
          <div className="flex text-center items-center flex-col">
            <span className="material-symbols-outlined text-gray-600 text-3xl">Agriculture</span> 
            <span className="text-sm">Farm</span>
          </div>
        </div>
        {showRightChevron && (
          <button onClick={() => scroll('right')} className="absolute right-0 z-50 p-1 rounded-full border border-gray-2 hover:scale-105 hover:shadow-md bg-white/60 backdrop-blur-sm">
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="hidden md:flex md:space-x-4">
        <div className="flex items-center space-x-2 border-2 px-3 py-3 rounded-xl hover:cursor-pointer">
          <AdjustmentsHorizontalIcon className="h-5 w-5" />
          <span className="text-sm">Filters</span>
        </div>

        <div className="flex items-center space-x-2 border-2 px-3 py-3 rounded-xl hover:cursor-pointer">
          <span className="text-sm">Show total w/taxes</span>
          <ToggleButton />
        </div>
      </div>
    </div>
  )
}
