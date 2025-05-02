import React,{useState,useEffect} from 'react'
import image from '../assets/Group.png'

const SplashScreen = () => {

    const [style, setStyle] = useState({
        opacity: 0,
        transform: "scale(0.8)",
        transition: "opacity 1.5s ease-out, transform 1.5s ease-out",
      });
    
      useEffect(() => {
        // Trigger the animation after a short delay
        const timeout = setTimeout(() => {
          setStyle({
            opacity: 1,
            transform: "scale(1)",
            transition: "opacity 1.5s ease-out, transform 1.5s ease-out",
          });
        }, 100); // small delay to ensure rendering first
    
        return () => clearTimeout(timeout);
      }, []);
  return (
    <div className="min-h-screen bg-[#53B175] sm:bg-green-200 flex items-center justify-center" style={style}>
        <img src={image} alt="logo" />
        <div className='pl-4'>
            <p className="text-5xl font-medium text-white">nectar</p>
             <p className="text-md font-light tracking-wide text-white">online grocerist</p>
        </div>
    </div> 
  )
}

export default SplashScreen