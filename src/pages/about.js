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
import { investors } from '../data';
import styles from './css/about.module.css';

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
        <FullBackgroundImage imgSrc={aboutFull} >
          <Container className={styles.aboutFull}>
            <HeaderTextBlock
              theme="white"
              headlineSize="h2"
              description="how we work"
              headline="We bring together companies and engineers."
              body="Terminal accelerates innovation by rethinking how the best companies and the most talented people partner in building the future."
              callout={{
                text: "Read the manifesto",
                link: "/manifesto"
              }}
            />
          </Container>
        </FullBackgroundImage>
      </Viewport>
    </div>
    <div id="team">
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
