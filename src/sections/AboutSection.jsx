import React from "react";

export default function AboutSection() {
  return (
    <>
      <span id="about" className="anchor"></span>
      <section className="bg-white dark:bg-slate-900 py-10">
        <div className="container mx-auto">
          <h2 className="text-lightsec dark:text-dark uppercase text-center text-3xl font-black ">About</h2>
          <p className="max-w-3xl mx-auto text-lg break-words text-lightsec dark:text-dark px-5 py-10">I'm Htet Lin Oo, a passionate Full Stack web developer with a degree from the University of Computer Studies, Pyay. I bring my expertise in HTML, CSS, JavaScript (including jQuery), React.js, Next.js, Alpine.js, Node.js, Express.js, MongoDB, PHP, WordPress, and Cloud Technologies to craft dynamic web applications. As a highly motivated learner and enthusiastic team player, I'm eager to contribute my skills, continuously learn, and collaborate towards achieving success.</p>
        </div>
      </section>
    </>
  );
}
