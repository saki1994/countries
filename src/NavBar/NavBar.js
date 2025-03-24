import { useEffect, useState } from "react"; 
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import "./NavBar.scss";

function NavBar({ theme, setThemeHandler }) {
  
 

  return (
    <nav id="navbar">
      <button className="nav-dark-mode" onClick={setThemeHandler}>
        {theme === "light" ? (
          <>
          <MdDarkMode  /> Dark Mode
        </>
        ) : (
          <>
          <MdLightMode className="light-mode-icon" /> Light Mode
        </>
        )}
      </button>
    </nav>
  );

}

export default NavBar;
