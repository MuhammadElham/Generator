import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutGenerator = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center w-full">
      {/* part 1 */}
      <div className="w-full md:w-1/2 pb-8 md:pb-0">
        <h5 className="text-xs mb-2 font-bold opacity-0 animate-fadeIn">WHAT WE DO</h5>
        <div className="relative">
          <h2 className="text-4xl font-extrabold text-gray-800 pb-2 mb-6 md:mb-10 opacity-0 animate-slideInLeft">ABOUT GENERATOR CORNER</h2>
          <span className="absolute left-0 -bottom-1 w-12 h-1 bg-primary"></span>
        </div>
        <Link to="/about">
          <motion.h5
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg mb-3 font-semibold hover:text-primary hover:underline"
          >
            Leading Provider of Power Generation Solutions
          </motion.h5>
        </Link>
        <p className="text-sm text-gray-600 leading-[1.8] max-w-[90%] mb-6 opacity-0 animate-fadeIn delay-300">
          At Generator Corner, we pride ourselves on being a leading provider of reliable power solutions in Karachi. With years of experience in the industry, we have established ourselves as experts
          in generator maintenance, repair, and support services. Our commitment to excellence and customer satisfaction has made us a trusted name...
        </p>
        <Link to="/about">
          <button className="py-3 px-7 text-sm bg-primary text-white border-2 border-[#e6e6e6] transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-primary hover:border-primary">
            Read More
          </button>
        </Link>
      </div>
      {/* part 2 */}
      <div className="relative w-full md:w-1/2">
        {/* Gray Border Frame */}
        <div className="absolute top-4 left-4 w-4/5 h-full border-[20px] border-gray-300 -z-10 opacity-0 animate-fadeIn delay-500"></div>
        {/* Image */}
        <img className="max-w-full pt-16 pl-12 h-auto opacity-0 animate-fadeInUp delay-400" src="https://generatorcorner.com/wp-content/uploads/2018/11/sideimage.png" alt="Generator" />
      </div>
    </div>
  );
};

export default AboutGenerator;
