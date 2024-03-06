import React from "react";

export default function Button({ children, url }) {
  return (
    <>
      <a href={url} className="rounded text-xl font-normal text-white bg-light px-5 py-2 dark:bg-darksec">
        {children}
      </a>
    </>
  );
}
