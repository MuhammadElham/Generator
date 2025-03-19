import { motion } from "framer-motion";

const Heading = ({ text }) => {
  return (
    <motion.h2
      className="text-center text-2xl sm:text-3xl font-bold mb-12"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {text}
    </motion.h2>
  );
};

export default Heading;
