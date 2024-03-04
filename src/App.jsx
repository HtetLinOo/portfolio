import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <button className="bg-gray-300 dark:bg-gray-800 px-4 py-2 rounded-md m-4 text-black dark:text-white" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <h1 className="text-3xl font-bold underline text-black dark:text-yellow-300">Hello world!</h1>
    </div>
  );
}

export default App;
