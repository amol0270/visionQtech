// src/components/ToolCard.jsx

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ToolCard = ({ tool }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="block bg-white text-black rounded-xl p-5 shadow-lg hover:shadow-2xl transition"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.h3
        className="text-xl font-bold mb-1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {tool.name}
      </motion.h3>

      <motion.p
        className="text-gray-700 italic mb-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {tool.subtitle}
      </motion.p>

      <motion.p
        className="text-sm text-gray-600"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        {tool.description.slice(0, 100)}...
      </motion.p>

      <motion.div
        className="flex justify-end mt-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <button
          onClick={() => navigate(`/tools/${tool.id}`)}
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-3 py-1.5 rounded-full shadow-md transition-transform duration-200 hover:scale-105"
        >
          See More
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ToolCard;