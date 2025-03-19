import React from "react";
import { motion } from "framer-motion";

const Logo = ({ logo, index }) => {
  return (
    <motion.div 
      className="w-full h-44 md:h-48 lg:h-56 shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,rgba(14,30,37,0.32)_0px_2px_16px_0px] 
                 p-6 bg-white rounded-lg transition-transform duration-300 
                 hover:scale-105 cursor-pointer flex items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
    >
      <img src={logo} alt={`Company Logo ${index}`} className="max-w-full max-h-full object-contain" />
    </motion.div>
  );
};

export default Logo;
