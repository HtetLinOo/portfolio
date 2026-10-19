import React from "react";
import { motion } from "framer-motion";
import Skills from "../components/Skills";

const viewport = { once: true, amount: 0.15, margin: "0px 0px -8% 0px" };
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function SkillsSection() {
  return (
    <>
      <span id="skills" className="anchor"></span>
      <section className="bg-white dark:bg-slate-900 py-10">
        <div className="container mx-auto px-5">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-light dark:text-dark uppercase text-center lg:text-3xl text-2xl font-black"
          >
            Professional Skillset
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="py-10 px-2 max-w-3xl mx-auto"
          >
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Skills />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
