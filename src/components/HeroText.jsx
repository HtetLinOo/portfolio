import React from "react";
import { ReactTyped } from "react-typed";
import Button from "./Button";
import { motion } from "framer-motion";

export default function HeroText({ url }) {
  const text = "Hi, I'm Htet Lin Oo".split("");

  return (
    <div className="w-full">
      <div className="grid items-center font-bold text-3xl ">
        <div className="txt-block">
          <h2 className="text-7xl text-light dark:text-dark">
            {/* Hi, I'm&nbsp;<span className="text-light dark:text-darksec">Htet Lin Oo</span> */}
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 15,
                }}
                key={i}
              >
                {el}
              </motion.span>
            ))}
          </h2>
          <ReactTyped strings={["A passionate Full Stack Web Developer", "A Software Engineer", "A Front End Engineer"]} typeSpeed={40} backSpeed={50} attr="placeholder" loop>
            <input type="text" className="focus:outline-none w-full py-5 placeholder:text-gray-600 dark:placeholder:text-white dark:bg-slate-900" />
          </ReactTyped>
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{
              duration: 1,
            }}
          >
            <Button url={"/resume"}>Resume</Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
