import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import {
  FaTshirt,
  FaLaptop,
  FaHome,
  FaCapsules,
  FaBicycle,
  FaBaby,
  FaAppleAlt,
  FaHeartbeat,
  FaMale,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HeroWithBanner = () => {
  return (
    <div className="flex flex-col lg:h-80 md:flex-row rounded-xl">
      {/* Sidebar for larger screens */}
      <div className="hidden md:block w-1/4 bg-slate-50 p-4 rounded-xl">
        <ul className="space-y-4">
          <NavLink
            to={"/shop/WomansFashion"}
            className="flex items-center  cursor-pointer hover:underline hover:text-red-600 "
          >
            <FaTshirt className="mr-2" /> Woman's Fashion
          </NavLink>
          <NavLink
            to={"/shop/MensFashion"}
            className="flex items-center cursor-pointer hover:underline hover:text-red-600 "
          >
            <FaMale className="mr-2" /> Men's Fashion
          </NavLink>
          <NavLink
            to={"/shop/Electronics"}
            className="flex items-center cursor-pointer hover:underline hover:text-red-600 "
          >
            <FaLaptop className="mr-2" /> Electronics
          </NavLink>
          <NavLink
            to={"/shop/HomeLifestyle"}
            className="flex items-center cursor-pointer hover:underline hover:text-red-600 "
          >
            <FaHome className="mr-2" /> Home & Lifestyle
          </NavLink>
          <NavLink
            to={"/shop/BabysToys"}
            className="flex items-center cursor-pointer hover:underline hover:text-red-600 "
          >
            <FaBaby className="mr-2" /> Baby's & Toys
          </NavLink>
          <NavLink
            to={"/shop/HealthBeauty"}
            className="flex items-center cursor-pointer hover:underline hover:text-red-600 "
          >
            <FaHeartbeat className="mr-2" /> Health & Beauty
          </NavLink>
        </ul>
      </div>

      {/* Icon-based category menu for mobile */}
      <div className="flex md:hidden overflow-x-auto space-x-4 bg-slate-50 p-4 rounded-xl">
        <NavLink
          to="/shop/WomansFashion"
          className="flex flex-col items-center text-sm"
        >
          <FaTshirt className="text-xl mb-1" />
          <span>Women's</span>
        </NavLink>
        <NavLink
          to="/shop/MensFashion"
          className="flex flex-col items-center text-sm"
        >
          <FaMale className="text-xl mb-1" />
          <span>Men's</span>
        </NavLink>
        <NavLink
          to="/shop/Electronics"
          className="flex flex-col items-center text-sm"
        >
          <FaLaptop className="text-xl mb-1" />
          <span>Electronics</span>
        </NavLink>
        <NavLink
          to="/shop/HomeLifestyle"
          className="flex flex-col items-center text-sm"
        >
          <FaHome className="text-xl mb-1" />
          <span>Lifestyle</span>
        </NavLink>
  
        <NavLink
          to="/shop/BabysToys"
          className="flex flex-col items-center text-sm"
        >
          <FaBaby className="text-xl mb-1" />
          <span>Baby's</span>
        </NavLink>
        <NavLink
          to="/shop/HealthBeauty"
          className="flex flex-col items-center text-sm"
        >
          <FaHeartbeat className="text-xl mb-1" />
          <span>Health</span>
        </NavLink>
      </div>

      {/* Banner with Swiper */}
      <div className="w-full md:w-3/4 from-bg-rose-400 to bg-gray-300  p-4 md:p-8 text-black rounded-xl">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          className="lg:h-full  rounded-xl"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row justify-center items-center relative h-full">
              <div className="text-center md:text-left md:w-1/2">
                <div className="text-2xl md:text-3xl font-semibold mb-2">
                  iPhone 16 Series
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-4">
                  Up to 10% off Voucher
                </div>
                <NavLink to={"/shop"}>
                  <button className="mt-4 px-4 md:px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black">
                    Shop Now →
                  </button>
                </NavLink>
              </div>
              <div className="mt-4 md:mt-0 md:absolute md:top-0 md:right-8 p-3 rounded-xl">
                <img
                  src="https://i.ibb.co.com/TmpGj5X/app-removebg-preview.png"
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
                <div className="text-2xl md:text-3xl font-semibold mb-2">
                  Samsung Galaxy S23
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-4">
                  Exclusive 15% off
                </div>
                <NavLink to={"/shop"}>
                  <button className="mt-4 px-4 md:px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black">
                    Shop Now →
                  </button>
                </NavLink>
              </div>
              <div className="mt-4 md:mt-0 md:absolute md:top-0 md:right-8 p-3 rounded-xl">
                <img
                  src="https://i.ibb.co.com/qpyf9bD/sam-removebg-preview.png"
                  alt="Samsung Galaxy S23"
                  className="w-60 md:w-80 h-full rounded-xl"
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
