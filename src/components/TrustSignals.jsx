import React from "react";
import { motion } from "framer-motion";
import certi_1 from "../assets/Logo/certificate.webp";

const stats = [
  { id: 1, value: "100+", label: "Generators Provided" },
  { id: 2, value: "30+", label: "International Customers" },
  { id: 3, value: "50+", label: "Successful Projects" },
];

const TrustSignals = () => {
  return (
    <section className="mt-20 py-14 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Why Trust Us?
        </motion.h2>
        
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We are a trusted provider with a proven track record of excellence.
        </motion.p>

        {/* Certifications & Awards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center mb-12">
          {[certi_1, certi_1, certi_1, certi_1].map((cert, index) => (
            <motion.img
              key={index}
              src={cert}
              alt={`Certification ${index + 1}`}
              className="h-40 sm:h-56 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
          ))}
        </div>

        {/* Counters */}
        <div className="flex flex-wrap justify-center gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
            >
              <h3 className="text-5xl font-bold text-orange-500">{stat.value}</h3>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
