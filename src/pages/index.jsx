import React from "react";
import { Helmet } from "react-helmet";
import ServiceStepBubbles from "../components/ServiceStepsBubbles/ServiceStepBubbles";
import Section from "../components/Section/Section";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import Spacer from "../components/Spacer/Spacer";
import Layout from "../layout";
import config from "../../data/SiteConfig";

function HomePage() {
  return (
    <Layout>
      <div className="home-container">
        <Helmet title={`${config.siteTitle}`} />
        <SectionContainer name="service-section" width="boxed">
          <Section title="How it Works" class="how-it-works" width="100">
            <ServiceStepBubbles
              number="1"
              title="JOIN OUR NETWORK"
              description="Get started by completing our brief online questionnaire for retail dietitians to see if you qualify. "
              color="#657cbd"
            />
            <ServiceStepBubbles
              number="2"
              title="RECEIVE A QUARTERLY BOX"
              description="Each quarter, we’ll ship a new box of better-for-you products to try for free. We even cover shipping."
              color="#ffdb70"
            />
            <ServiceStepBubbles
              number="3"
              title="EVALUATE THE PRODUCTS"
              description="We’ll send a short survey asking you to rate the nutritional benefits as well as the taste of the products."
              color="#f69382"
            />
          </Section>
        </SectionContainer>

        <SectionContainer name="more-info-section" width="boxed">
          <Spacer />
          <Section
            hasImage="true"
            imageSrc="/static/img/5268_NECNIB_Hero-Shot_2.png"
            title="What’s in the box?"
            description="Every season we’ll curate a box of great-tasting, better-for-you snacks and beverages for you to sample along with product information detailing the ingredients and dietary information. We source products that fit a range of dietary preferences from all natural to gluten free and protein rich."
            width="49"
            padding="25px"
          ></Section>
          <Section
            hasImage="true"
            imageSrc="/static/img/092920_NN_Box-Photos_V1-temp.png"
            title="Why participate?"
            description="Your customers and clients are hungry for product recommendations to help them achieve their dietary goals and make grocery shopping easier. Our mission is to help you get to know the better-for-you products available in your retailer by sampling healthy products."
            width="49"
            padding="25px"
          ></Section>

          <Spacer />
        </SectionContainer>

        <SectionContainer name="form-section" width="boxed">
          <Section width="100"
            title="Join Now"
          >
          </Section>
        </SectionContainer>
      </div>
    </Layout>
  );
}

export default HomePage;
