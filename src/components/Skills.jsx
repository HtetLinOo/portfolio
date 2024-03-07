import React from "react";

export default function Skills() {
  const skills = [
    {
      src: "https://img.icons8.com/color/2x/html-5.png",
      name: "HTML5",
    },
    {
      src: "https://img.icons8.com/color/2x/css3.png",
      name: "CSS3",
    },
    {
      src: "https://img.icons8.com/color/2x/sass.png",
      name: "SASS",
    },
    {
      src: "https://img.icons8.com/color/2x/bootstrap.png",
      name: "Bootstrap",
    },
    {
      src: "https://img.icons8.com/color/2x/tailwindcss.png",
      name: "TailWind CSS",
    },
    {
      src: "https://img.icons8.com/color/2x/javascript.png",
      name: "JavaScript",
    },
    {
      src: "https://img.icons8.com/color/2x/nodejs.png",
      name: "Node.js",
    },
    {
      src: "https://img.icons8.com/color/2x/typescript.png",
      name: "TypeScript",
    },
    {
      src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
      name: "React",
    },
    {
      src: "https://img.icons8.com/color/2x/nextjs.png",
      name: "Next.js",
    },
    {
      src: "https://img.icons8.com/color/2x/express-js.png",
      name: "Express.js",
    },
    {
      src: "https://img.icons8.com/dusk/64/000000/php-logo.png",
      name: "PHP",
    },
    {
      src: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg",
      name: "MySQL",
    },
    {
      src: "https://img.icons8.com/color/48/000000/mongodb.png",
      name: "MongoDB",
    },
    {
      src: "https://img.icons8.com/color/48/000000/firebase.png",
      name: "Firebase",
    },
    {
      src: "https://img.icons8.com/color/48/000000/git.png",
      name: "Git",
    },
    {
      src: "https://img.icons8.com/color/48/000000/github.png",
      name: "GitHub",
    },
    {
      src: "https://img.icons8.com/color/48/000000/ubuntu.png",
      name: "Ubuntu",
    },
    {
      src: "https://img.icons8.com/color/2x/amazon-web-services.png",
      name: "AWS",
    },
  ];
  return (
    <>
      {skills.map((skill, index) => (
        <div className="flex flex-col justify-center gap-1 items-center w-32 h-32 shadow-lg rounded-full dark:bg-opacity-25" key={index}>
          <img src={skill.src} className="mx-auto w-14" alt={skill.name} />
          <span className="font-bold text-sm text-lightsec dark:text-dark">{skill.name}</span>
        </div>
      ))}
    </>
  );
}
