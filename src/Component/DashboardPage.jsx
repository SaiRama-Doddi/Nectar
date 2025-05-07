import image2 from '../assets/Vector.png'
import image1 from '../assets/Vector2.png'
import { FaSearch } from 'react-icons/fa';
import Slider from './Slider';
import GroceryProducts from '../Products/GroceryProducts';
import KitchenAccessories from '../Products/KitchenAccessories';


const DashboardPage = () => {
    return (
      <div className="h-screen overflow-y-auto bg-gray-100 flex flex-col pt-20">
        
        {/* Fixed Positioned Images */}
        <div className="relative h-0">
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
        </div>
  
        {/* Search Box */}
        <div className="flex justify-center items-center px-6 mb-4">
          <div className="flex items-center bg-gray-200 rounded-full px-4 py-2 w-full max-w-md">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search Store"
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>
  
        {/* Content (force scroll here) */}
        <div className="flex flex-col space-y-6 px-4 pb-10">
          <Slider />
          <GroceryProducts />
          <KitchenAccessories />
        </div>
      </div>
    );
  };
  
  
export default DashboardPage;
