import React from "react";
import { motion } from "framer-motion";

const logos = [
  "https://generatorcorner.com/wp-content/uploads/2018/11/logo-1-1.png",
  "https://generatorcorner.com/wp-content/uploads/2018/11/logo-7.png",
  "https://generatorcorner.com/wp-content/uploads/2018/11/logo-8.png",
  "https://generatorcorner.com/wp-content/uploads/2018/11/logo-6.png",
  "https://generatorcorner.com/wp-content/uploads/2018/11/logo-3.png",
  "https://generatorcorner.com/wp-content/uploads/2018/11/logo-4.png",
  "https://generatorcorner.com/wp-content/uploads/2018/11/logo-2.png",
  "https://generatorcorner.com/wp-content/uploads/2018/11/logo-8.png",
  "https://generatorcorner.com/wp-content/uploads/2018/11/logo-10.png",
  "https://generatorcorner.com/wp-content/uploads/2018/11/logo-11.png",
  "https://generatorcorner.com/wp-content/uploads/2018/11/logo-9.png",
];

const Slider = () => {
  return (
    <div className="py-14 bg-white">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-12">
        Our Partners
      </h2>
      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex space-x-4 sm:space-x-10"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="h-14 sm:h-24 mx-2 sm:mx-4"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
