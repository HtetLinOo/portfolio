import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Sns() {
  return (
    <>
      <div className="flex items-center gap-5 text-3xl text-light dark:text-dark cursor-pointer">
        <a href="tel:09796954231">
          <FaPhone />
        </a>
        <a href="https://github.com/htetlinoo" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/htet-lin-oo-a07720178/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100008153656778&mibextid=ZbWKwL" target="_blank">
          <FaFacebook />
        </a>
      </div>
    </>
  );
}
