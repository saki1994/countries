import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Country from "./Country/Country";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light"; // Default to light if no theme is saved
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme); // Apply the theme to the body
    localStorage.setItem("theme", theme); // Save theme in localStorage
  }, [theme]);

  const setThemeHandler = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <NavBar theme={theme} setThemeHandler={setThemeHandler} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home theme={theme} />} />
          <Route path=":country" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
