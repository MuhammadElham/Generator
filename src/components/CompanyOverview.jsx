import { motion } from "framer-motion";
import React from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CompanyOverview = () => {
  return (
    <motion.div
      className="text-gray-600 py-14 text-base px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p variants={fadeInUp} className="text-lg leading-relaxed">
        At <b className="text-gray-900">Generator Corner,</b> we pride ourselves on being a leading provider of reliable power solutions in Karachi. With years of experience, we have established ourselves as experts in generator maintenance, repair, and support services.
      </motion.p>
      
      <motion.h3 variants={fadeInUp} className="text-gray-900 font-bold text-xl py-5">Our Mission:</motion.h3>
      <motion.p variants={fadeInUp}>To deliver exceptional generator services and solutions that ensure uninterrupted power and maximize efficiency for our clients.</motion.p>
      
      <motion.h3 variants={fadeInUp} className="text-gray-900 font-bold text-xl py-5">Our Vision:</motion.h3>
      <motion.p variants={fadeInUp}>To be the preferred choice for generator solutions by enhancing our services and maintaining high standards of quality and professionalism.</motion.p>
      
      <motion.h3 variants={fadeInUp} className="text-gray-900 font-bold text-xl py-5">Our Services:</motion.h3>
      <motion.ul variants={fadeInUp} className="space-y-2 list-disc list-inside">
        <li><b>Generator Maintenance:</b> Regular maintenance for efficiency.</li>
        <li><b>Generator Repair:</b> Quick and effective fixes.</li>
        <li><b>Rental Solutions:</b> Short-term power needs covered.</li>
        <li><b>Parts & Spares:</b> Genuine parts for reliability.</li>
      </motion.ul>
      
      <motion.h3 variants={fadeInUp} className="text-gray-900 font-bold text-xl py-5">Why Choose Us?</motion.h3>
      <motion.ul variants={fadeInUp} className="space-y-2 list-disc list-inside">
        <li><b>Experienced Professionals:</b> Skilled technicians with deep expertise.</li>
        <li><b>Customer-Centric Approach:</b> Tailored solutions for your needs.</li>
        <li><b>Reliable Services:</b> Ensuring seamless operation.</li>
        <li><b>Comprehensive Solutions:</b> From maintenance to parts supply.</li>
        <li><b>State-of-the-Art Equipment:</b> Advanced technology for optimal performance.</li>
      </motion.ul>
      
      <motion.h3 variants={fadeInUp} className="text-gray-900 font-bold text-xl py-5">Our Commitment</motion.h3>
      <motion.p variants={fadeInUp}>We strive for excellence, trust, and reliability in all our services, continuously improving to exceed customer expectations.</motion.p>
    </motion.div>
  );
};

export default CompanyOverview;
