import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { title: "Web Development (HTML, CSS, JavaScript)", value: 95 },
  { title: "React, Angular, Vue.js", value: 90 },
  { title: "Python, Django, Flask, Node, Express", value: 92 },
  { title: "Artificial Intelligence & Machine Learning", value: 88 },
  { title: "Data Science & Analytics", value: 85 },
  { title: "Cloud Solutions & Software Architecture", value: 90 },
];

export default function SkillsSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-white px-4 md:px-8" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white/90 p-10 sm:p-14 rounded-2xl shadow-2xl"
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm uppercase tracking-widest text-gray-500 mb-2 border-b-2 border-red-500 inline-block"
        >
          Skills
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-12"
        >
          Explore the Technical Expertise That Drives Our Innovation.
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">{skill.title}</span>
                <span className="text-gray-700 font-semibold">{skill.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-red-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: loaded ? `${skill.value}%` : "0%" }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}