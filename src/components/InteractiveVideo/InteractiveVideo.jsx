import React from "react";
import { Player, ControlBar } from 'video-react';
import config from "../../../data/SiteConfig";
import "./InteractiveVideo.css";

//InteractiveVideo component for potential InteractiveVideo manipulation
function InteractiveVideo(props) {
  const { src, alt } = props;

  return (
        <Player playsInline poster="/assets/poster.png" src="/static/video/HT-Campaign.mp4">
          <ControlBar autoHide={false} className="my-class" />
        </Player>
    );
}

export default InteractiveVideo;

