import React from "react";
import "./SectionContainer.css";

//General Section container/holder
function SectionContainer(props) {
  const { children, width, height, name, padding, backgroundImage, backgroundSize, backgroundPosition, textAlign } = props;

  //Site-wide section padding
  const defaultPadding = "100px";
  let finalPadding;

  //Site-wide section default alignment
  const defaultAlign = "center";
  let finalAlign;

  //Site-wide section default background size
  const defaultBackgroundSize = "cover";
  const defaultBackgroundPosition = "100% 100%"
  const defaultBackgroundImage = "none";
  let finalBackgroundSize;
  let finalBackgroundPosition;
  let finalBackgroundImage;

  //Defaulting to set above padding if there's no user input
  padding ? (finalPadding = { padding }) : (finalPadding = defaultPadding);

  //Defaulting to left text align
  textAlign ? (finalAlign = { textAlign }) : (finalAlign = defaultAlign);

  //Defaulting to default background settings
  backgroundSize ? (finalBackgroundSize = { backgroundSize}) : (finalBackgroundSize = defaultBackgroundSize);
  backgroundPosition ? (finalBackgroundPosition = { backgroundPosition}) : (finalBackgroundPosition = defaultBackgroundPosition);
  backgroundImage ? (finalBackgroundImage = `url(${backgroundImage})`) : (finalBackgroundImage = defaultBackgroundImage);

  return (
    <div class="full-bleed-bg">
      <div
        class={ ["section-container", width, name].join(' ')}
        style={{
          paddingTop: finalPadding,
          paddingBottom: finalPadding,
          textAlign: finalAlign,
          height: height,
          backgroundImage: finalBackgroundImage,
          backgroundSize: finalBackgroundSize,
          backgroundPosition: finalBackgroundPosition,
        }}
      >
        {children}
      </div>
    </div>
  );
  
}

export default SectionContainer;
