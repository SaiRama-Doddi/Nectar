import React from 'react';
import Image from '../assets/Mask Group.png'

const NumberPage = () => {
  return (
    <div>
        <div>
            <img src={Image} alt="" />
        </div>
        <div className='ml-20'>
        <p className="text-2xl font-medium text-black">Get your Grociers</p>
        <p className="text-2xl font-medium text-black">with nectar</p>
        </div>
        <div>
            <input type="text" />
        </div>
    </div>
  )
}

export default NumberPage