import React from "react";
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import "./style.css";
function Theme() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const handlechangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <div className="contianer" data-theme={theme}>
      <div className=" theme-box ">
        <p> The Theme is : {theme}</p>
        <button onClick={handlechangeTheme}>Change Theme</button>
      </div>
    </div>
  );
}

export default Theme;
