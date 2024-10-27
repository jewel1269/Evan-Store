import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { FaTshirt, FaLaptop, FaHome, FaCapsules, FaBicycle, FaBaby, FaAppleAlt, FaHeartbeat, FaMale } from 'react-icons/fa';

const HeroWithBanner = () => {
  return (
    <div className="flex flex-col md:flex-row rounded-xl">
      {/* Sidebar for larger screens */}
      <div className="hidden md:block w-1/4 bg-slate-50 p-4 rounded-xl">
      <ul className="space-y-4">
        <li className="flex items-center cursor-pointer hover:text-gray-700">
          <FaTshirt className="mr-2" /> Woman's Fashion
        </li>
        <li className="flex items-center cursor-pointer hover:text-gray-700">
          <FaMale className="mr-2" /> Men's Fashion
        </li>
        <li className="flex items-center cursor-pointer hover:text-gray-700">
          <FaLaptop className="mr-2" /> Electronics
        </li>
        <li className="flex items-center cursor-pointer hover:text-gray-700">
          <FaHome className="mr-2" /> Home & Lifestyle
        </li>
        <li className="flex items-center cursor-pointer hover:text-gray-700">
          <FaCapsules className="mr-2" /> Medicine
        </li>
        <li className="flex items-center cursor-pointer hover:text-gray-700">
          <FaBicycle className="mr-2" /> Sports & Outdoor
        </li>
        <li className="flex items-center cursor-pointer hover:text-gray-700">
          <FaBaby className="mr-2" /> Baby's & Toys
        </li>
        <li className="flex items-center cursor-pointer hover:text-gray-700">
          <FaAppleAlt className="mr-2" /> Groceries & Pets
        </li>
        <li className="flex items-center cursor-pointer hover:text-gray-700">
          <FaHeartbeat className="mr-2" /> Health & Beauty
        </li>
      </ul>
      </div>

      {/* Icon-based category menu for mobile */}
      <div className="flex md:hidden overflow-x-auto space-x-4 bg-slate-50 p-4 rounded-xl">
        <div className="flex flex-col items-center text-sm">
          <FaTshirt className="text-xl mb-1" />
          <span>Women's</span>
        </div>
        <div className="flex flex-col items-center text-sm">
          <FaTshirt className="text-xl mb-1" />
          <span>Men's</span>
        </div>
        <div className="flex flex-col items-center text-sm">
          <FaLaptop className="text-xl mb-1" />
          <span>Electronics</span>
        </div>
        <div className="flex flex-col items-center text-sm">
          <FaHome className="text-xl mb-1" />
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center text-sm">
          <FaCapsules className="text-xl mb-1" />
          <span>Medicine</span>
        </div>
        <div className="flex flex-col items-center text-sm">
          <FaBicycle className="text-xl mb-1" />
          <span>Sports</span>
        </div>
        <div className="flex flex-col items-center text-sm">
          <FaBaby className="text-xl mb-1" />
          <span>Baby</span>
        </div>
        <div className="flex flex-col items-center text-sm">
          <FaAppleAlt className="text-xl mb-1" />
          <span>Groceries</span>
        </div>
        <div className="flex flex-col items-center text-sm">
          <FaHeartbeat className="text-xl mb-1" />
          <span>Health</span>
        </div>
      </div>

      {/* Banner with Swiper */}
      <div className="w-full md:w-3/4 bg-black p-4 md:p-8 text-white rounded-xl">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full rounded-xl"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row justify-center items-center relative h-full">
              <div className="text-center md:text-left md:w-1/2">
                <div className="text-2xl md:text-3xl font-semibold mb-2">iPhone 14 Series</div>
                <div className="text-4xl md:text-5xl font-bold mb-4">Up to 10% off Voucher</div>
                <button className="mt-4 px-4 md:px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black">
                  Shop Now →
                </button>
              </div>
              <div className="mt-4 md:mt-0 md:absolute md:top-0 md:right-8 p-3 rounded-xl">
                <img
                  src="https://jdcorporateblog.com/wp-content/uploads/2022/09/iphone-poster-1.jpg"
                  alt="iPhone 14"
                  className="w-60 md:w-80 rounded-xl"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row justify-center items-center relative h-full">
              <div className="text-center md:text-left md:w-1/2">
                <div className="text-2xl md:text-3xl font-semibold mb-2">Samsung Galaxy S23</div>
                <div className="text-4xl md:text-5xl font-bold mb-4">Exclusive 15% off</div>
                <button className="mt-4 px-4 md:px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black">
                  Shop Now →
                </button>
              </div>
              <div className="mt-4 md:mt-0 md:absolute md:top-0 md:right-8 p-3 rounded-xl">
                <img
                  src="https://path/to/samsung-image.png"
                  alt="Samsung Galaxy S23"
                  className="w-60 md:w-80 rounded-xl"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroWithBanner;
