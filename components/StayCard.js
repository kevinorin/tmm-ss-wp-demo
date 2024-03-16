// StayCard.js
import React from 'react';

export default function StayCard({ title, location, nightlyRate, cleaningFee, imageUrl, imageAlt }) {
  return (
    <div className="overflow-hidden cursor-pointer">
      <img className="w-full rounded-xl " src={imageUrl} alt={imageAlt || "Stay image"} />
      <div className="px-3 py-4">
        <div className="flex text-base items-center justify-between">
          <h3 className="grow font-bold truncate">{title}</h3>
          <span className="material-symbols-outlined text-md text-black">star</span> 5.0
        </div>

        <p className="text-gray-700 text-base truncate my-2">{location}</p>

        <div className="flex text-base lg:text-sm xl:text-base items-center justify-between">
          <p className="flex items-center">
            <span className="material-symbols-outlined text-blue-600 mr-1">nights_stay</span> 
            <span className="font-bold">${nightlyRate} <span className="pl-1 font-normal">night</span></span> 
          </p>
          <p className="flex items-center">
            <span className="material-symbols-outlined text-green-600 mr-1">cleaning</span> 
            <span className="text-gray-700">${cleaningFee}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
