import React from "react";
import { Helmet } from "react-helmet";
import ServiceStepBubbles from "../components/ServiceStepsBubbles/ServiceStepBubbles";
import Section from "../components/Section/Section";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import InteractiveVideo from "../components/InteractiveVideo/InteractiveVideo";
import Spacer from "../components/Spacer/Spacer";
import Layout from "../layout";
import config from "../../data/SiteConfig";

function VideoPage() {
  return (
    <Layout>
      <div className="video-container">
        <Helmet title={`${config.siteTitle}`} />
        <SectionContainer name="service-section" width="boxed">

          <InteractiveVideo
            
          />

        </SectionContainer>

      </div>
    </Layout>
  );
}

export default VideoPage;
