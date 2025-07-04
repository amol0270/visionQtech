// src/pages/ToolDetail.jsx

import { useParams } from "react-router-dom";
import tools from "./tools";
import HeaderImage from "./HeadImage";
import { motion } from "framer-motion";

const ToolDetail = () => {
  const { id } = useParams();
  const tool = tools.find((t) => t.id === id);

  if (!tool) return <p className="p-10">Tool not found</p>;

  return (
    <>
      <HeaderImage page={"Project"} page2={tool.name} />

      <div className="bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] p-8">
        <motion.div
          className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold text-gray-900">{tool.name}</h1>
            <h2 className="text-xl italic text-gray-500">{tool.subtitle}</h2>
          </motion.div>

          <motion.p
            className="text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {tool.description}
          </motion.p>

          <hr className="my-6" />

          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Key Features</h3>
            <div className="flex flex-wrap gap-2">
              {tool.features.map((feature, i) => (
                <motion.span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Use Cases</h3>
            <div className="flex flex-wrap gap-2">
              {tool.useCases.map((useCase, i) => (
                <motion.span
                  key={i}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                >
                  {useCase}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ToolDetail;