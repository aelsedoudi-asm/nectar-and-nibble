import React from "react";
import Image from "../Image/Image";
import "./Section.css";

//General Section container/holder
function Section(props) {
  const {
    children,
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
  } = props;

  if (hasImage) {
    return (
      <div
        class="section"
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
        <Image src={imageSrc} alt={imageAlt} />
        <h2 class="section-title">{title}</h2>
        <p class="section-description">{description}</p>
        <div class="section-internal">{children}</div>
      </div>
    );
  } else {
    return (
      <div
        class="section"
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
