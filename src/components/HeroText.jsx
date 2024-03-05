import React from "react";
import { ReactTyped } from "react-typed";

export default function HeroText() {
  return (
    <section className="sec-hero">
      <div className="h-dvh w-full px-8">
        <div className="grid items-center h-dvh w-full font-bold text-3xl ">
          <div className="txt-block">
            <h2 className="text-7xl mb-5 text-light dark:text-dark">
              Hi, I'm&nbsp;<span className="text-light dark:text-darksec">Htet Lin Oo</span>
            </h2>
            <ReactTyped strings={["A passionate Full Stack Web Developer", "A Software Engineer", "A Front End Engineer"]} typeSpeed={40} backSpeed={50} attr="placeholder" loop>
              <input type="text" className="focus:outline-none w-full py-5 placeholder:text-gray-600 dark:placeholder:text-white dark:bg-slate-900" />
            </ReactTyped>
          </div>
        </div>
      </div>
    </section>
  );
}
