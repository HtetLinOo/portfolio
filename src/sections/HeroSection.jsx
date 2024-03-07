import React from "react";
import HeroText from "../components/HeroText";
import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="h-dvh w-full">
      <div className="bg-white dark:bg-slate-900">
        <div className="flex flex-col-reverse justify-center gap-5 lg:justify-normal lg:flex-row h-dvh items-center relative pt-10 px-3 lg:px-8">
          <HeroText />
          <div className="w-3/5 md:w-2/5 ">
            <motion.img
              initial={{ y: -300 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
              }}
              src="/mv_human.png"
              alt="human"
            />
          </div>
        </div>
        {/* <BsArrowDown className="text-5xl absolute bottom-0 animate-bounce inset-x-2/4 text-light dark:text-darksec" /> */}
      </div>
    </section>
  );
}
