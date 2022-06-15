import React from "react";
import Language from "../Content/Language";

const content = Language();
const Header = ({ lang, theme, setLang, setTheme }) => {
  const selectedLanContent = content[lang];

  const handleSetLang = (e) => {
    localStorage.setItem("lang", e.target.value);
    setLang(e.target.value);
  };

  const handleSetTheme = (e) => {
    localStorage.setItem("theme", e.target.value);
    setTheme(e.target.value);
  };

  return (
    <>
      <header className="header pt-4">
        <select
          className={`${theme === "dark" ? "dark-select" : ""} select me-3`}
          id="language"
          onChange={handleSetLang}
        >
          <option value="en" selected={lang === "en"}>
            {selectedLanContent.langEng}
          </option>
          <option value="uz" selected={lang === "uz"}>
            {selectedLanContent.langUz}
          </option>
        </select>
        <select
          className={`${theme === "dark" ? "dark-select" : ""} select me-3`}
          id="theme"
          onChange={handleSetTheme}
        >
          <option value="light" selected={theme === "light"}>
            {selectedLanContent.themeLight}
          </option>
          <option value="dark" selected={theme === "dark"}>
            {selectedLanContent.themeDark}
          </option>
        </select>
      </header>
    </>
  );
};

export default Header;
