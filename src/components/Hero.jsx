import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // Main Container
    <div className="relative text-white h-[270px] md:h-[450px] lg:h-[600px] flex flex-col py-24 bg-cover bg-center -mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw]" style={{ backgroundImage: `url("https://generatorcorner.com/wp-content/uploads/2018/11/slider2.jpg")` }}>
      {/* Black Overlay */}
      <div className="absolute"></div>

      {/* Content */}
      <div className="relative top-[30px] md:top-[135px] lg:top-[220px] z-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex items-center gap-2 pb-3 md:pb-5">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">RELIABILITY IN EVERY DETAIL</h1>
        </div>
        <p className="text-sm md:text-base lg:text-lg sm:w-2/4">Depend on our meticulous operation and maintenance services. Enhancing reliability and minimizing downtime for your operations.</p>
      </div>
    </div>
  );
};

export default Hero;
