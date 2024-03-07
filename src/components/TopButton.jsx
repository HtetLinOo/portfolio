import React, { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function TopButton() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <div className="fixed cursor-pointer bottom-28 lg:bottom-32 right-6 lg:right-14 py-4 lg:py-6 px-2 lg:px-3 rounded-lg border-slate-95 bg-light dark:bg-darksec">
          <FaArrowUpLong className="text-white dark:text-white text-lg lg:text-3xl" onClick={handleScrollTop} />
        </div>
      )}
    </>
  );
}
