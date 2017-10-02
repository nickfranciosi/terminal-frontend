import React from "react";
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import Viewport from '../components/viewport';
import Container from '../components/container';
import CalloutLink from '../components/calloutLink';
import FullBackgroundImage from '../components/fullBackgroundImage';
import aboutFull from '../assets/images/aboutFull.jpg';
// import Carousel from '../components/carousel';
import InvestorGrid from '../components/investorGrid';
import Footer from '../components/footer';
import Header from '../components/header';
import HeaderTextBlock from '../components/headerTextBlock';
import { investors } from "../data";

export default () => (
  <div>
    <Header />
    <div 
      style={{
        paddingTop: "20%",
      }}
    >
      <Container>
        <HeaderTextBlock
          description="Learn more"
          headline="Get to know us"
          body="A look into the mission and team behind Terminal."
        />
      </Container>
    </div>
    <div id="overview">
      <Viewport>
        <FullBackgroundImage imgSrc={aboutFull}>
          <Container>
            <Reveal effect="animated fadeInUp">
              <HeaderTextBlock
                theme="white"
                headlineSize="h2"
                headline="We bring together companies and engineers."
                body="Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus fringilla."
                callout={{
                  text: "Read the manifesto",
                  link: "/manifesto"
                }}
              />
            </Reveal>
          </Container>
        </FullBackgroundImage>
      </Viewport>
    </div>
    <div id="team">
      <Container>
        <div
        style={{
            textAlign: "center",
          }}
        >
          {/* <Carousel slideData={} /> */}
        </div>
      </Container>
     <Container>
        <div
          style={{
            marginBottom: "112px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginTop: "100px",
              marginBottom: "60px",
            }}
          >
            <h3>Trusted by the world’s best investors</h3>
          </div>
          <InvestorGrid investors={investors} />
        </div>
      </Container>
    </div>
    <Footer />
  </div>
);
