import React from "react";
import { Link } from "react-router-dom";

const AboutGenerator = () => {
  return (
    <div className="flex items-center w-full">
      {/* part 1 */}
      <div className="w-1/2">
        <h5 className="text-xs mb-2 font-bold">WHAT WE DO</h5>
        <div className="relative">
            <h2 className="text-4xl font-extrabold text-gray-800 pb-2 mb-6 md:mb-10">ABOUT GENERATOR CORNER</h2>
            <span className="absolute left-0 -bottom-1 w-12 h-1 bg-orange-400"></span>
        </div>
        <Link to='/about'><h5 className="text-lg mb-3 font-semibold">Leading Provider of Power Generation Solutions</h5></Link>
        <p className="text-sm text-gray-600 leading-[1.8] max-w-[90%] mb-6">At Generator Corner, we pride ourselves on being a leading provider of reliable power solutions in Karachi. With years of experience in the industry, we have established ourselves as experts in generator maintenance, repair, and support services. Our commitment to excellence and customer satisfaction has made us a trusted name...</p>
        <Link to='/about'><button className="py-3 px-7 text-sm border-2 border-[#e6e6e6]">Read More</button></Link>
      </div>
      {/* part 2 */}
      <div className="relative w-1/2">
        {/* Gray Border Frame */}
            <div className="absolute top-4 left-4 w-4/5 h-full border-[20px] border-gray-300 -z-10"></div>
        {/* Image */}
            <img className="max-w-full pt-16 pl-12 h-auto" src="https://generatorcorner.com/wp-content/uploads/2018/11/sideimage.png" alt="Generator" />
</div>

    </div>
  );
};

export default AboutGenerator;
