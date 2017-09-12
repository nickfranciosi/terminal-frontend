import React from "react"
import ViewPortView from '../components/viewPortView';
import Container from '../components/container';
import Button from '../components/button';
import logo from '../assets/images/LogoMainColor.png';

export default () => (
  <div>
    <div 
        className="logo"
        style={{
          maxWidth: 120,
          marginLeft: 87,
          marginTop: 70,
        }}
      >
        <img src={logo} alt="Terminal Logo"/>
    </div>
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
            We build teams in emerging tech hubs around the world.
          </h1>
          <p
          style={{
              marginBottom: 73,
            }}
          >
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem magna mollis euismod.
          </p>
          <Button>Learn More</Button>
        </div>
      </Container>
    </ViewPortView>
  </div>
);
  
