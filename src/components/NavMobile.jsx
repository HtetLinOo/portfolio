import React from "react";
import DarkMode from "./DarkMode";
import { motion, AnimatePresence } from "framer-motion";

export default function NavMobile({ toggle, closeMenu }) {
  const navItems = [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Experiences",
      url: "#exp",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Skills",
      url: "#skills",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];
  return (
    <div className="nav-mobile">
      {toggle && (
        <AnimatePresence>
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: "easeInOut",
            }}
            className="w-full h-screen bg-white dark:bg-slate-900 fixed top-20 left-0"
          >
            <ul className="h-screen flex flex-col items-center py-16 text-3xl text-center gap-8 font-semibold text-lightsec dark:text-dark ">
              {navItems.map((nav, index) => (
                <li key={index} onClick={closeMenu}>
                  <a href={nav.url}>{nav.name}</a>
                </li>
              ))}
              <div className="flex justify-center">
                <DarkMode />
              </div>
            </ul>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
