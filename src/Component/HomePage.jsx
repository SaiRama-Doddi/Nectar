import React from 'react'
import image from '../assets/8140 1.png'
import logo from '../assets/Group.png'

const HomePage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center " 
      style={{ backgroundImage: `url(${image})` }}
    >
   
       
      <img src={logo} alt="logo" className="h-15 w-15"/>
      <p className="text-5xl font-medium text-white mt-4">welcome</p>
      <p className="text-5xl font-medium text-white mt-4">to our store</p>
      <p className="text-md font-light tracking-wide text-white mt-4">Get your groceries faster</p>
      <button className="bg-[#53B175] text-white text-md font-medium rounded-md w-[300px] h-[65px] mt-5 cursor-pointer">
        Get Started
      </button>

    </div>
  )
}

export default HomePage
