import React from "react";
import HeroText from "../components/HeroText";
import { BsArrowDown } from "react-icons/bs";

export default function HeroSection() {
  return (
    <>
      <div className="bg-white dark:bg-slate-900 relative">
        <HeroText />
        <BsArrowDown className="text-5xl absolute bottom-0 animate-bounce inset-x-2/4 text-light dark:text-darksec" />
      </div>
    </>
  );
}
