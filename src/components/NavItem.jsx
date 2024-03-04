import React from "react";

export default function NavItem() {
  const navItems = ["About", "Experiences", "Projects", "Skills", "Contact"];
  return (
    <>
      <ul className="flex items-center justify-start gap-8 font-semibold text-black dark:text-white">
        {navItems.map((nav, index) => (
          <li key={index}>{nav}</li>
        ))}
      </ul>
    </>
  );
}
