import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function HeroText() {
  const [showRole, setShowRole] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const name = "Htet Lin Oo（テッ・リン・オー）です。";

  useEffect(() => {
    const timer = setTimeout(() => setShowRole(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="grid items-center font-bold text-3xl">
        <div className="txt-block">
          <h2 className="text-3xl lg:text-7xl text-light dark:text-dark leading-tight">
            {name.split("").map((character, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: index / 25 }}
                key={`${character}-${index}`}
              >
                {character}
              </motion.span>
            ))}
          </h2>

          {showRole && (
            <ReactTyped
              strings={["Webアプリケーションエンジニアです。"]}
              typeSpeed={42}
              showCursor={false}
              onComplete={() => setShowSummary(true)}
              className="block w-full py-3 text-lg lg:text-5xl leading-tight whitespace-normal break-words text-light dark:text-dark"
            />
          )}

          {showSummary && (
            <ReactTyped
              strings={["Java・React・TypeScript・JavaScript・PHPを用いた Webアプリケーション開発に携わっています。"]}
              typeSpeed={25}
              showCursor={false}
              className="block w-full py-2 text-base lg:text-2xl leading-relaxed whitespace-normal break-words font-normal text-lightsec dark:text-darksec"
            />
          )}
        </div>
      </div>
    </div>
  );
}
