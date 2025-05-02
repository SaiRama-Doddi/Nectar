import React, { useState, useEffect } from 'react';
import image from '../assets/Group.png';

const SplashScreen = () => {
  const [imgStyle, setImgStyle] = useState({
    opacity: 0,
    transform: 'translateX(50px) scale(0.8)', // from right
    transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
  });

  const [textStyle, setTextStyle] = useState({
    opacity: 0,
    transform: 'translateX(-50px) scale(0.8)', // from left
    transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImgStyle({
        opacity: 1,
        transform: 'translateX(0) scale(1)',
        transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
      });
      setTextStyle({
        opacity: 1,
        transform: 'translateX(0) scale(1)',
        transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-[#53B175] sm:bg-green-200 flex items-center justify-center">
      <img src={image} alt="logo" style={imgStyle} />
      <div className="pl-4" style={textStyle}>
        <p className="text-5xl font-medium text-white">nectar</p>
        <p className="text-md font-light tracking-wide text-white">online grocerist</p>
      </div>
    </div>
  );
};

export default SplashScreen;
