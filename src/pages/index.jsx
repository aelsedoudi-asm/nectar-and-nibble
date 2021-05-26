import React from "react";
import { Helmet } from "react-helmet";
import ServiceStepBubbles from "../components/ServiceStepsBubbles/ServiceStepBubbles";
import Section from "../components/Section/Section";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import Button from "../components/Button/Button";
import Layout from "../layout";
import config from "../../data/SiteConfig";

function HomePage() {
  return (
    <Layout>
      <div className="home-container">
        <Helmet title={`${config.siteTitle}`}>
        <script src="https://alliancesalesinc.activehosted.com/f/embed.php?id=8" type="text/javascript" charset="utf-8"></script> 
        </Helmet>
        <SectionContainer 
          name="header-banner" 
          width="full" 
          height="400px" 
          padding="0" 
          backgroundImage="/static/img/header-banner-full.jpg"
        />   
        <SectionContainer width="boxed" padding="0">
          <Section
          name="campaign-badge-section"
          hasImage="true"
          imageSrc="/static/img/8406-HNM-Campaign-Badge-2x.png"
          width="100"
          padding="25px"
          >
          </Section>
        </SectionContainer>

        <SectionContainer name="more-info-section" width="boxed" padding="25">
          <Section
            name="sweepstakes-section"
            hasImage="true"
            imageSrc="/static/img/CoolerTitle.png"
            width="49"
            padding="25px"
          >
          <div id="activeCampaign-form" className="_form_8"></div>
          </Section>
          <Section
            name="sweepstakes-section"
            hasImage="true"
            imageSrc="/static/img/YETI-hero-shot-8x8.png"
            width="49"
            padding="25px"
          ></Section>
        </SectionContainer>

        <SectionContainer name="rules-section" width="boxed" padding="25">
          <Section
            description="Stock up on these hiking snacks to fuel your next adventure and enter to win a YETI Roadie Cooler, valued at $199! Enter your name and email address above before the contest ends on June 29th!"
            width="100"
            padding="25px"
            margin="0px auto"
          ></Section>
        </SectionContainer>

        <SectionContainer name="brand-section" width="boxed" padding="25">
          <Section
            hasImage="true"
            imageSrc="/static/img/HNM-Product-Hero-Shot-2.png"
            width="100"
            padding="25px"
          ></Section>
        </SectionContainer>

        <SectionContainer name="brand-logo-section" width="boxed" padding="25">
          <Section
            hasImage="true"
            imageSrc="/static/img/bottlingCoLogo-2.png"
            isLink="true"
            linkSrc="https://www.cforce.com/"
            linkTarget="_blank"
            width="19"
            padding="25px"
          ></Section>
          <Section
            hasImage="true"
            imageSrc="/static/img/NuSkool_MCTCollagenBar_Logo.png"
            isLink="true"
            linkSrc="https://nuskoolsnacks.com/"
            linkTarget="_blank"
            width="19"
            padding="25px"
          ></Section>
          <Section
            hasImage="true"
            imageSrc="/static/img/KiTu_Super-Coffee-Logo_K-1.png"
            isLink="true"
            linkSrc="https://drinksupercoffee.com/"
            linkTarget="_blank"
            width="19"
            padding="25px"
          ></Section>
          <Section
            hasImage="true"
            imageSrc="/static/img/NOKA-Logo.png"
            isLink="true"
            linkSrc="https://www.nokaorganics.com/"
            linkTarget="_blank"
            width="19"
            padding="25px"
          ></Section>
          <Section
            hasImage="true"
            imageSrc="/static/img/Mush-logo-black.png"
            isLink="true"
            linkSrc="https://eatmush.com/"
            linkTarget="_blank"
            width="19"
            padding="25px"
          ></Section>
        </SectionContainer>

        <SectionContainer name="terms-section" width="boxed" padding="0">
          <Section
            description="To enter, you must be over the age of 18, and limit of five entries per person. Upon entering this promotion, you agree to the official rules. To be eligible for entry you acknowledge this promotion is in no way sponsored, endorsed or administered by, or associated with, YETI, Facebook, or Instagram. Winner will be announced on or after June 29th, 2021. To qualify for additional entries, share this link and tag three people who also meet eligibility requirements. By entering the contest, you agree to sign up for Huckleberry’s Natural Market E-blast."
            width="100"
            padding="50px"
            margin="0px auto"
          ></Section>
        </SectionContainer>

      </div>
    </Layout>
  );
}

export default HomePage;
