import React from "react";
import "./SectionContainer.css";

//General Section container/holder
function SectionContainer(props) {
  const { children, width, name, padding, textAlign } = props;

  //Site-wide section padding
  const defaultPadding = "100px";
  let finalPadding;

  //Site-wide section default alignment
  const defaultAlign = "center";
  let finalAlign;

  //Defaulting to set above padding if there's no user input
  padding ? (finalPadding = { padding }) : (finalPadding = defaultPadding);

  //Defaulting to left text align
  textAlign ? (finalAlign = { textAlign }) : (finalAlign = defaultAlign);

  return (
    <div class="full-bleed-bg">
      <div
        class={ ["section-container", width, name].join(' ')}
        style={{
          paddingTop: finalPadding,
          paddingBottom: finalPadding,
          textAlign: finalAlign,
        }}
      >
        {children}
      </div>
    </div>
  );
  
}

export default SectionContainer;
