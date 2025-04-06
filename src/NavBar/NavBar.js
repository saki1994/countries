import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import "./NavBar.scss";

function NavBar({ theme, setThemeHandler }) {
  return (
    <header className="header-section">
      <h2>Where in the world?</h2>

      <nav id="navbar">
        <button className="nav-dark-mode" onClick={setThemeHandler}>
          {theme === "light" ? (
            <>
              <MdDarkMode /> Dark Mode
            </>
          ) : (
            <>
              <MdLightMode className="light-mode-icon" /> Light Mode
            </>
          )}
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
