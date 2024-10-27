import React, { useState, useEffect } from 'react';

function ProductAd() {
  // State for countdown
  const [time, setTime] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center lg:p-4 p-2">
      <div className="bg-black text-white flex flex-col lg:flex-row items-center justify-between p-6 md:p-10 rounded-lg shadow-lg w-full max-w-[1470px] h-auto lg:h-[500px]">
        {/* Left Section */}
        <div className="space-y-4 text-center lg:text-left">
          <p className="text-green-400 text-lg md:text-xl font-semibold">Categories</p>
          <h1 className="text-3xl md:text-4xl font-bold">Enhance Your Music Experience</h1>
          {/* Countdown Timer */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold">{time.hours.toString().padStart(2, '0')}</span>
              <span>Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold">{time.days.toString().padStart(2, '0')}</span>
              <span>Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold">{time.minutes.toString().padStart(2, '0')}</span>
              <span>Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold">{time.seconds.toString().padStart(2, '0')}</span>
              <span>Seconds</span>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">Buy Now!</button>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <img
            src="https://i.ibb.co.com/TLWz7nz/spec-removebg-preview.png"
            alt="Speaker"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductAd;
