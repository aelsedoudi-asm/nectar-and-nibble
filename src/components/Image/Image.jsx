import React from "react";
import config from "../../../data/SiteConfig";
import "./Image.css";

//image component for potential more image manipulation
function Image(props) {
  const { src, alt, width, height } = props;

  //Site-wide section margin
  const defaultMargin = "150";
  const defaultAlt = config.siteTitle
  let finalAlt;
  let finalAlign

  //Defaulting to site name for alt text
  alt ? finalAlt = {alt} : finalAlt = defaultAlt
  //Defaulting to left text align
  // textAlign ? finalAlign = {margin} : finalAlign = defaultAlign

  return (
      <div class="image container" style={{}}>
        <img width={width} height={height} src={src} alt={alt}></img>
      </div>
    );
}

export default Image;

