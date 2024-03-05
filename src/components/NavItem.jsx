import React from "react";

export default function NavItem() {
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
    <>
      <ul className="flex items-center justify-start gap-8 font-semibold text-lightsec dark:text-dark">
        {navItems.map((nav, index) => (
          <li key={index}>
            <a href={nav.url}>{nav.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
