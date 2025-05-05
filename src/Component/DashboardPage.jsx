import image2 from '../assets/Vector.png';
import image1 from '../assets/vector (1).png';
import { FaSearch } from 'react-icons/fa';

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
      <div className="mt-[20px] flex items-center bg-gray-200 rounded-full px-2 py-2 w-full max-w-md">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search Store"
          className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
        />
      </div>

      {/* Optional: Welcome Message */}
      <h1 className="mt-8 text-3xl font-bold text-gray-800">
        Welcome to your dashboard, {mobile}!
      </h1>
    </div>
  );
};

export default DashboardPage;
