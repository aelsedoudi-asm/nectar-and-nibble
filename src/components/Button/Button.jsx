import React from "react";
import config from "../../../data/SiteConfig";
import "./Button.css";

//button component for general site buttons
function Image(props) {
  const { link, text, borderRadius, padding } = props;

  return (
      <a href={link} style={{}}>
        <button>{text}</button>
      </a>
    );
}

export default Button;

