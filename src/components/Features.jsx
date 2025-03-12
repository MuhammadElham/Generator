import { FaBolt, FaShippingFast, FaHeadset, FaTools } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaBolt className="text-yellow-500 text-4xl" />,
      title: "High-Efficiency Generators",
      description: "Our generators provide stable and efficient power for all needs.",
    },
    {
      icon: <FaShippingFast className="text-blue-500 text-4xl" />,
      title: "Global Shipping",
      description: "We deliver worldwide with fast and secure shipping options.",
    },
    {
      icon: <FaHeadset className="text-green-500 text-4xl" />,
      title: "24/7 Customer Support",
      description: "Our team is available round-the-clock to assist you.",
    },
    {
      icon: <FaTools className="text-red-500 text-4xl" />,
      title: "Custom Solutions",
      description: "Get tailored generator solutions for your specific needs.",
    },
  ];

  return (
    <div className="py-14 px-6 sm:px-16 text-gray-800">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-100 shadow-lg rounded-lg hover:scale-105 transition-all duration-300">
            {feature.icon}
            <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
            <p className="text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
