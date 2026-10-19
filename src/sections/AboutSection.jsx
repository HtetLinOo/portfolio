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
            University of Computer Studies, Pyay を卒業後、Web開発に携わってきました。Java、JavaScript、PHPを中心に、React、TypeScript、Spring Boot、Node.js、MySQLなどを用いたWebシステムの開発・改修・テストを経験しています。チームメンバーと連携しながら、仕様を理解し、使いやすく保守しやすいシステムをつくることを大切にしています。
          </motion.p>
        </div>
      </section>
    </>
  );
}
