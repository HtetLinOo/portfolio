import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
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
      <span id="about" className="anchor"></span>
      <section className="bg-white dark:bg-slate-900 py-10">
        <div className="container mx-auto">
          <motion.h2 variants={fadeUpAnimation} initial="hidden" whileInView="visible" exit="hidden" className="text-light dark:text-dark uppercase text-center lg:text-3xl text-2xl font-black ">
            About
          </motion.h2>
          <motion.p variants={fadeUpAnimation} initial="hidden" whileInView="visible" exit="hidden" className="max-w-3xl mx-auto text-lg break-words text-lightsec dark:text-dark px-5 py-10">
            I'm Htet Lin Oo, a passionate Full Stack web developer with a degree from the University of Computer Studies, Pyay. With 4 years of experience in the web development field, I bring my expertise in HTML, CSS, JavaScript (including jQuery), React.js, Next.js, Alpine.js, Node.js, Express.js, MongoDB, PHP, WordPress, and Cloud Technologies to craft dynamic web applications. As a highly motivated learner and enthusiastic team player, I'm eager to contribute my skills, continuously learn, and collaborate towards achieving success.
          </motion.p>
        </div>
      </section>
    </>
  );
}
