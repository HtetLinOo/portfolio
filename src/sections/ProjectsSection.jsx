import React from "react";
import SwipperProjects from "../components/SwipperProjects";
import { motion } from "framer-motion";

export default function ProjectsSection() {
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
      <span id="projects" className="anchor"></span>
      <section className="bg-white dark:bg-slate-900 py-10">
        <div className="container mx-auto">
          <motion.h2 variants={fadeUpAnimation} initial="hidden" whileInView="visible" exit="hidden" className="text-light dark:text-dark uppercase text-center lg:text-3xl text-2xl font-black ">
            Projects
          </motion.h2>
          <div className="py-10 max-w-5xl mx-auto">
            <SwipperProjects />
          </div>
        </div>
      </section>
    </>
  );
}
