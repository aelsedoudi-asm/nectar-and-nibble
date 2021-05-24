import React from "react";
import config from "../../../data/SiteConfig";
import "./Image.css";

//image component for potential more image manipulation
function Image(props) {
  const { src, alt, width, height, align, padding, isLink, linkSrc, linkTarget } = props;

  //Site-wide section margin
  const defaultMargin = "150";
  const defaultAlt = config.siteTitle
  let finalAlt;
  let finalAlign

  //Defaulting to site name for alt text
  alt ? finalAlt = {alt} : finalAlt = defaultAlt
  //Defaulting to left text align
  // textAlign ? finalAlign = {margin} : finalAlign = defaultAlign

  if (isLink) {
    return (
        <div class="image container" text-align={align} padding={padding} style={{}}>
          <a href={linkSrc} target={linkTarget}><img width={width} height={height} src={src} alt={alt}></img></a>
        </div>
      );
    } else {
      return (
        <div class="image container" padding={padding} style={{}}>
          <img width={width} height={height} src={src} alt={alt}></img>
        </div>
     );
    }
}

export default Image;

