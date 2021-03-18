import React from "react";
import "./ServiceStepBubbles.css";

// Circles with some icon/number in it to show steps or service showcase
function ServiceStepBubbles(props) {
  const { number, title, description, color, icon } = props;
  let headerDecider;

  // This is for deciding if it's a number/letter input or an icon
  // Icon functionality still needs to be setup, maybe FA?
  if (number){
    headerDecider = <h1>{number}</h1>
  } else {
    headerDecider = <h2>{icon}</h2>
  }

  return ( 
    <div class="service-step">
      <div class="header-container" style={{backgroundColor: color}}>{headerDecider}</div>
      <h5 class="service-title" style={{color: color}}>{title}</h5>
      <span class="service-description">{description}</span>
    </div>
  );
}

export default ServiceStepBubbles;
