import React, { useState, useEffect } from 'react';
import image from '../assets/Group.png';

const SplashScreen = () => {
  const [style, setStyle] = useState({
    opacity: 0,
    transform: 'scale(0.8)',
    transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStyle({
        opacity: 1,
        transform: 'scale(1)',
        transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
      });
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#53B175] flex flex-col sm:flex-row items-center justify-center px-4"
      style={style}
    >
      <img
        src={image}
        alt="logo"
        className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-contain"
      />
      <div className="sm:pl-6 mt-4 sm:mt-0 text-center sm:text-left">
        <p className="text-4xl sm:text-5xl font-medium text-white">nectar</p>
        <p className="text-sm sm:text-md font-light tracking-wide text-white">online grocerist</p>
      </div>
    </div>
  );
};

export default SplashScreen;
