import React from "react";
import Image from "../Image/Image";
import "./Section.css";

//General Section container/holder
function Section(props) {
  const {
    children,
    name,
    title,
    description,
    width,
    margin,
    xMargins,
    yMargins,
    padding,
    hasImage,
    imageSrc,
    imageAlt,
    imageSize,
    isLink,
    linkSrc,
    linkTarget,
  } = props;

  //Prints HTML with an image if one is available , this is unncessary but it does check for the extras and leaves them off if they're not there
  //need to find a better way to do this 
  if (hasImage && isLink && !title && !description && !children) {
    return (
      <div
      class={ ["section", name].join(' ')}
        style={{
          width: width + "%",
          marginTop: yMargins,
          marginBottom: yMargins,
          marginLeft: xMargins,
          marginRight: xMargins,
          margin: margin,
          padding: padding,
        }}
      >
        <Image src= {imageSrc} alt={imageAlt} imageSize={imageSize} isLink={isLink} linkSrc={linkSrc} linkTarget={linkTarget}/>
      </div>
    );
  } else if (hasImage) {
    return (
      <div
      class={ ["section", name].join(' ')}
        style={{
          width: width + "%",
          marginTop: yMargins,
          marginBottom: yMargins,
          marginLeft: xMargins,
          marginRight: xMargins,
          margin: margin,
          padding: padding,
        }}
      >
        <Image src= {imageSrc} alt={imageAlt} imageSize={imageSize}/>
        <h2 class="section-title">{title}</h2>
        <p class="section-description">{description}</p>
        <div class="section-internal">{children}</div>
      </div>
    );
  } else {
    return (
      <div
        class={ ["section", name].join(' ')}
        style={{
          width: width + "%",
          marginTop: yMargins,
          marginBottom: yMargins,
          marginLeft: xMargins,
          marginRight: xMargins,
          margin: margin,
          padding: padding,
        }}
      >
        <h2 class="section-title">{title}</h2>
        <p class="section-description">{description}</p>
        <div class="section-internal">{children}</div>
      </div>
    );
  }
}

export default Section;
