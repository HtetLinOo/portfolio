import React from "react";
import HeroText from "../components/HeroText";
import { BsArrowDown } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section className="h-dvh w-full">
      <div className="bg-white dark:bg-slate-900">
        <div className="flex h-dvh items-center relative pt-10 px-8">
          <HeroText />
          <div className="w-2/5">
            <img src="/mv_human.png" alt="human" />
          </div>
        </div>
        {/* <BsArrowDown className="text-5xl absolute bottom-0 animate-bounce inset-x-2/4 text-light dark:text-darksec" /> */}
      </div>
    </section>
  );
}
