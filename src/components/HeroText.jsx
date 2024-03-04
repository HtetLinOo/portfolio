import React from "react";
import { ReactTyped } from "react-typed";

export default function HeroText() {
  return (
    <>
      <div className="h-dvh w-full px-8">
        <div className="flex items-center h-dvh w-full font-bold text-7xl ">
          <ReactTyped strings={["Hey! I'm Htet Lin Oo"]} typeSpeed={40} backSpeed={50} attr="placeholder">
            <input type="text" className="placeholder:text-black dark:placeholder:text-white dark:bg-slate-900" />
          </ReactTyped>
        </div>
      </div>
    </>
  );
}
