import React from 'react';
import HeroWithBanner from '../HeroSection/HeroWithBanner';
import FlashSale from '../FlashSele/FlashSale';
import BestSellingProducts from '../BestSellingProducts/BestSellingProducts';
import ProductAd from '../ProductAd/ProductAd';

const HomePageContant = () => {
    return (
        <div>
            <HeroWithBanner/>
            <FlashSale/>
            <BestSellingProducts/>
          <ProductAd/>
            
        </div>
    );
};

export default HomePageContant;