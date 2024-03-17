import React, { useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import DarkMode from "./DarkMode";

export default function NavMobile({ toggle, closeMenu }) {
  const controls = useAnimation();
  const navItems = [
    {
      name: "About",
      url: "#about",
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

  useEffect(() => {
    controls.start({
      width: toggle ? "100%" : 0,
      height: toggle ? "100vh" : 0,
      opacity: toggle ? 1 : 0,
    });
  }, [toggle, controls]);

  return (
    <AnimatePresence>
      {toggle && (
        <motion.div className="nav-mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.ul className="w-full h-screen bg-white dark:bg-slate-900 fixed top-20 left-0 flex flex-col items-center py-16 text-3xl text-center gap-8 font-semibold text-lightsec dark:text-dark " animate={controls}>
            {navItems.map((nav, index) => (
              <motion.li key={index} initial={{ opacity: 0, scale: 0.3, x: -50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.2, delay: index * 0.1 }} onClick={closeMenu}>
                <a href={nav.url}>{nav.name}</a>
              </motion.li>
            ))}
            <motion.div initial={{ opacity: 0, scale: 0.3, x: -50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.5 }} className="flex justify-center">
              <DarkMode />
            </motion.div>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
