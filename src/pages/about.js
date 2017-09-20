import React from "react";
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import ViewPortView from '../components/viewPortView';
import Container from '../components/container';
import CalloutLink from '../components/calloutLink';
import FullBackgroundImage from '../components/fullBackgroundImage';
import aboutFull from '../assets/images/aboutFull.jpg';
import Carousel from '../components/carousel';
import InvestorGrid from '../components/investorGrid';
import Footer from '../components/footer';
import Header from '../components/header';
import HeaderTextBlock from '../components/headerTextBlock';
import SubMenu from '../components/subMenu';

const investors = [
  {name: "NEA1", icon: require('../assets/images/investors/nea-ventures.png')},
  {name: "NEA2", icon: require('../assets/images/investors/nea-ventures.png')},
  {name: "NEA3", icon: require('../assets/images/investors/nea-ventures.png')},
  {name: "NEA4", icon: require('../assets/images/investors/nea-ventures.png')},
  {name: "NEA5", icon: require('../assets/images/investors/nea-ventures.png')},
  {name: "NEA6", icon: require('../assets/images/investors/nea-ventures.png')},
  {name: "NEA7", icon: require('../assets/images/investors/nea-ventures.png')},
  {name: "NEA8", icon: require('../assets/images/investors/nea-ventures.png')},
];

export default () => (
  <div>
    <Header />
    <ViewPortView>
      <Container>
        <HeaderTextBlock 
          description="Tristique Parturient"
          headline="Get to know us a little better."
          body="Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem magna mollis euismod."
        />
      </Container>
      <SubMenu />
    </ViewPortView>
    <div id="overview">
      <ViewPortView>
        <FullBackgroundImage src={aboutFull}>
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
      </ViewPortView>
    </div>
    <div id="team">
      <Container>
        <div
        style={{
            textAlign: "center",
          }}
        >
          {/* <Carousel /> */}
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
  
