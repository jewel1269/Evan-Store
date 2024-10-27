import React from "react";
import HeroWithBanner from "../HeroSection/HeroWithBanner";
import FlashSale from "../FlashSele/FlashSale";
import BestSellingProducts from "../BestSellingProducts/BestSellingProducts";
import ProductAd from "../ProductAd/ProductAd";
import ProductGallery from "../ProductGallery/ProductGallery";
import NewArrivalGallery from "../NewArrivalGallery/NewArrivalGallery";
import Features from "../Features/Features";

const HomePageContant = () => {
  return (
    <div>
      <HeroWithBanner />
      <FlashSale />
      <BestSellingProducts />
      <ProductAd />
      <ProductGallery />
      <NewArrivalGallery />
      <Features/>
    </div>
  );
};

export default HomePageContant;
