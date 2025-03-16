import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // Main Container
    <div className="relative text-white h-[270px] md:h-[450px] lg:h-[600px] flex flex-col py-24 bg-cover bg-center -mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw]" style={{ backgroundImage: `url("https://generatorcorner.com/wp-content/uploads/2018/11/slider2.jpg")` }}>
      {/* Black Overlay */}
      <div className="absolute"></div>

      {/* Content */}
      <div className="relative top-[-10px] md:top-[110px] lg:top-[190px] z-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex items-center gap-2 pb-3 md:pb-5">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">RELIABILITY IN EVERY DETAIL</h1>
        </div>
        <p className="text-xs md:text-base lg:text-lg sm:w-4/5">Depend on our meticulous operation and maintenance services. Enhancing reliability and minimizing downtime for your operations.</p>
        <Link to="/contact">
          <button className="bg-orange-400 text-white border-2 border-orange-400 hover:bg-white hover:text-orange-400 hover:border-orange-400 w-auto max-w-fit tracking-wide my-4 transition-all duration-300 ease-in-out text-[10px] px-3 py-2  lg:text-[14px] lg:px-6 lg:py-3">CONTACT US</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
