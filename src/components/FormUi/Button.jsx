import React from "react";
import Language from "../content/Language";

const content = Language();

const Button = ({ btn, type, lang, theme }) => {
  const selectedLanContent = content[lang];

  return (
    <>
      <button
        className={`${btn} ${
          theme === "dark" ? "dark-btn" : ""
        } btn d-inline w-25 mx-auto `}
        type={type}
      >
        {selectedLanContent.loginText}
      </button>
    </>
  );
};

export default Button;
