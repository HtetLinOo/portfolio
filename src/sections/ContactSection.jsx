import React from "react";
import { motion } from "framer-motion";
import { MailForm } from "../components/MailForm";

export default function ContactSection() {
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
      <span id="contact" className="anchor"></span>
      <section className="bg-white dark:bg-slate-900 py-10">
        <div className="container max-w-3xl mx-auto">
          <motion.h2 variants={fadeUpAnimation} initial="hidden" whileInView="visible" exit="hidden" className="text-light dark:text-dark uppercase text-center lg:text-3xl text-2xl font-black ">
            Contact
          </motion.h2>
          <MailForm />
        </div>
      </section>
    </>
  );
}
