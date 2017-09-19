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
    <ViewPortView>
      <Container>
        <div 
          className="content"
          style={{
            width: "60%",
          }}
        >
          <span
            style={{
              display: "inline-block",
              marginBottom: 37,
            }}
          >
            Tristique Parturient
          </span>
          <h1
          style={{
              marginBottom: 30,
            }}
          >
          Get to know us a little better.
          </h1>
          <p
          style={{
              marginBottom: 73,
            }}
          >
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem magna mollis euismod.
          </p>
        </div>
      </Container>
      <SubMenu />
    </ViewPortView>
    <div id="overview">
      <ViewPortView>
        <FullBackgroundImage src={aboutFull}>
          <Container>
            <Reveal effect="animated fadeInUp">
              <div
                className="content"
                style={{
                  width: "50%",
                }}
              >
                <h2 
                  style={{
                    color: "#fff",
                    marginBottom: 30,
                  }}
                >
                  We bring together companies and engineers.
                </h2>
                <p
                  style={{
                    color: "#fff",
                    opacity: 1,
                    marginBottom: 37,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus fringilla.
                </p>
                <CalloutLink
                  to="/manifesto"
                >
                  Read the manifesto
                </CalloutLink>
              </div>
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
      <div
        style={{
          width: "90%",
          margin: "0 auto",
        }}
      >
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
      </div>
    </div>
    <Footer />
  </div>
);
  
