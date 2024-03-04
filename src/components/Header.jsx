import React from "react";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <>
      <div className="fixed w-full shadow-md bg-white dark:bg-slate-900 px-8 py-10 text-xl ">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-8 cursor-pointer">
            <NavItem />
            <DarkMode />
          </div>
        </div>
      </div>
    </>
  );
}
