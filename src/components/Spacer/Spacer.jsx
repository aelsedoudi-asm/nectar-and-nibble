import React from "react";
import "./Spacer.css";

// Circles with some icon/number in it to show steps or service showcase
function Spacer(props) {
  const { height, color, opacity, topMargin, bottomMargin } = props;

  return ( 
    <div class="spacer" style={{color: color, height: height, marginTop: topMargin + 'px' , marginBottom: bottomMargin + 'px', opacity: opacity }}>
    </div>
  );
}

export default Spacer;
