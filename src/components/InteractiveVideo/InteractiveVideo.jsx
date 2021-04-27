import React from "react";
import { Player } from 'video-react';
import config from "../../../data/SiteConfig";
import "./InteractiveVideo.css";

//InteractiveVideo component for potential more InteractiveVideo manipulation
function InteractiveVideo(props) {
  const { src, alt } = props;

  return (
        <Player
        playsInline
        poster="/assets/poster.png"
        src="/static/video/HT-Campaign.mp4"
      />
    );
}

export default InteractiveVideo;

