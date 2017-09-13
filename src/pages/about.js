import React from "react"
import ViewPortView from '../components/viewPortView';
import Container from '../components/container';
import FullBackgroundImage from '../components/fullBackgroundImage';
import aboutFull from '../assets/images/aboutFull.jpg';

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
    </ViewPortView>
    <ViewPortView>
      <FullBackgroundImage src={aboutFull}>
        <Container>
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
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus fringilla.
            </p>
          </div>
        </Container>
      </FullBackgroundImage>
    </ViewPortView>
  </div>
);
  
