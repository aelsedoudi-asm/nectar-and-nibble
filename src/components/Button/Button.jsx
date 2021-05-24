import React from "react";
import config from "../../../data/SiteConfig";
import "./Button.css";

//button component for general site buttons
function Button(props) {
  const { link, text, borderRadius, padding, color } = props;

  return (
      <a href={link} >
        <button background-color={color} >{text}</button>
      </a>
    );
}

export default Button;

