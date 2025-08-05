"use client";
import React, { useState, useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { TollFreeNumber } from './TollFreeNum';

interface ButtonCallProps {
  phoneNumber?: string;
  text?: string;
}

const ButtonCall: React.FC<ButtonCallProps> = ({
  phoneNumber = TollFreeNumber,
  text = "Call Now"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration errors by only showing after component mounts
  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Don't render anything on server side to prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Mobile/Tablet Bottom Fixed Button */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-500 ease-out ${isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0 pointer-events-none'
        }`}>
        <div className="bg-[#A50035] text-white px-4 py-3 shadow-lg rounded-full">
          <button
            className="w-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 hover:bg-red-700"
            onClick={handleCall}
            aria-label={`Call ${phoneNumber}`}
          >
            <FaPhoneAlt className="text-xl mr-3 animate-pulse" />
            <span className="mr-2">{phoneNumber}</span>
            <span>- Call Now</span>
          </button>
        </div>
      </div>

      {/* Desktop Floating Button */}
      <div className={`fixed bottom-6 right-6 z-50 hidden lg:flex flex-col items-end transition-all duration-500 ease-out ${isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-24 opacity-0 pointer-events-none'
        }`}>
        <div className={`flex items-center transition-transform duration-200 ${isHovered ? 'scale-105' : 'scale-100'
          }`}>
          {/* Phone number tooltip */}
          <div className={`bg-white text-blue-800 font-bold py-2 px-4 rounded-l-lg shadow-lg mr-1 transition-all duration-300 ${isHovered
              ? 'opacity-100 translate-x-0 pointer-events-auto'
              : 'opacity-0 translate-x-5 pointer-events-none'
            }`}>
            {phoneNumber}
          </div>
          {/* Call button */}
          <button
            className="bg-[#A50035] hover:bg-red-700 rounded-full text-white font-bold py-3 px-4 shadow-lg flex items-center transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCall}
            aria-label={`Call ${phoneNumber}`}
          >
            <FaPhoneAlt className="text-xl mr-2 animate-pulse" />
            <span className="hidden sm:inline">{text}</span>
            <span className="sm:hidden">Call</span>
          </button>
        </div>
        {/* Support badge */}
        <div className={`bg-yellow-100 text-sm font-medium text-gray-800 px-3 py-1 rounded-lg shadow mt-2 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
          Toll-Free 24/7 Support
        </div>
      </div>
    </>
  );
};

export default ButtonCall;