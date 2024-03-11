import React from "react";
import Logo from "./Logo";
import Sns from "./Sns";

export default function Footer() {
  return (
    <footer className=" bg-neutral-900 dark:bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between py-20 px-5">
          <Logo />
          <Sns />
        </div>
        <div className="pb-10 flex justify-center items-center text-light dark:text-dark text-md font-bold">&copy;2024&nbsp;Htet Lin Oo</div>
      </div>
    </footer>
  );
}
