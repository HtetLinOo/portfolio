import React from "react";
import { motion } from "framer-motion";
import Skills from "../components/Skills";

export default function SkillsSection() {
  const fadeUpAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeInOut",
    },
  };
  return (
    <>
      <span id="skills" className="anchor"></span>
      <section className="bg-white dark:bg-slate-900 py-10">
        <div className="container mx-auto">
          <motion.h2 variants={fadeUpAnimation} initial="hidden" whileInView="visible" exit="hidden" className="text-light dark:text-dark uppercase text-center text-3xl font-black ">
            Professional Skillset
          </motion.h2>
          <div className="py-10 px-2 max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Skills />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
