"use client";
import React, { useState } from 'react';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="relative inline-flex items-center w-12 h-6" onClick={() => setIsToggled(!isToggled)}>
      <input
        type="checkbox"
        className="opacity-0 absolute w-0 h-0"
        checked={isToggled}
        readOnly
      />
      <div className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition duration-300 ease-in-out ${isToggled ? 'bg-green-500' : 'bg-gray-300'}`}>
        <div className={`flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-sm transform transition-all duration-300 ease-in-out ${isToggled ? 'translate-x-8' : 'translate-x-1'}`}>
          {isToggled ? (
            <CheckIcon className="w-4 h-4 text-green-500" />
          ) : (
            <XMarkIcon className="w-4 h-4 text-gray-500" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ToggleButton;
