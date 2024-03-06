import React, { useState } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import NavMobile from "./NavMobile";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const closeMenu = () => {
    setToggle(false);
  };
  return (
    <header>
      <div className="fixed z-50 w-full shadow-md bg-white dark:bg-slate-900 px-3 lg:px-8 py-6 text-xl ">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-8 cursor-pointer">
            <NavBar />
            <NavMobile toggle={toggle} closeMenu={closeMenu} />
            <button onClick={handleToggle} className={`menu-btn ${toggle ? "open" : ""} lg:hidden`}>
              <span className="btn-line"></span>
              <span className="btn-line"></span>
              <span className="btn-line"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
