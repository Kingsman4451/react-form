import React from "react";

const Input = ({ type, placeholder, lang, theme, val, set }) => {
  return (
    <>
      <input
        className={`${
          theme === "dark" ? "dark-input" : ""
        } form-control w-50 w-md-75 mx-auto mb-3`}
        type={type}
        placeholder={placeholder}
        value={val}
        onChange={(e) => set(e.target.value)}
      ></input>
    </>
  );
};

export default Input;
