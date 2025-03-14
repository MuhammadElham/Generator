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
    <section className="mt-20 py-16 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Why Trust Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We are a trusted provider with a proven track record of excellence.
        </p>

        {/* Certifications & Awards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center mb-12">
          <img src={certi_1} alt="Certification 1" className="h-32 sm:h-56 mx-auto" />
          <img src={certi_1} alt="Certification 2" className="h-32 sm:h-56 mx-auto" />
          <img src={certi_1} alt="Certification 3" className="h-32 sm:h-56 mx-auto" />
          <img src={certi_1} alt="Certification 4" className="h-32 sm:h-56 mx-auto" />
        </div>

        {/* Counters */}
        <div className="flex flex-wrap justify-center gap-10">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
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
