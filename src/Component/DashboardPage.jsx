import image2 from '../assets/Vector.png'
import image1 from '../assets/Vector2.png'
import { FaSearch } from 'react-icons/fa';
import Slider from './Slider';

const DashboardPage = () => {
  const mobile = localStorage.getItem("userMobile");

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-20">

      {/* Positioned and interlinked images */}
      <img
        src={image1}
        alt="Rotated"
        className="absolute w-[12.79px] h-[11.43px] top-[58.29px] left-[167.16px] rotate-30"
      />
      <img
        src={image2}
        alt="Image 2"
        className="absolute w-[20.88px] h-[23.78px] top-[65.31px] left-[153.46px]"
      />

      {/* Search Box - placed after the images */}
      <div className="flex justify-center items-center p-6">
  <div className="flex items-center bg-gray-200 rounded-full px-4 py-2 w-full max-w-md">
    <FaSearch className="text-gray-500 mr-2" />
    <input
      type="text"
      placeholder="Search Store"
      className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
    />
  </div>
</div>



    <Slider/>
    </div>
  );
};

export default DashboardPage;
