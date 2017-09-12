import React from "react"
import ViewPortView from '../components/viewPortView';
import Container from '../components/container';
import Button from '../components/button';
import logo from '../assets/images/LogoMainColor.png';

export default () => (
  <ViewPortView>
    <Container>
      <div 
        className="logo"
        style={{
          maxWidth: 120,
        }}
      >
        <img src={logo} alt="Terminal Logo"/>
      </div>
      <div 
        className="content"
        style={{
          width: "60%",
        }}
      >
        <span>Tristique Parturient</span>
        <h1>We build teams in emerging tech hubs around the world.</h1>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem magna mollis euismod.</p>
        <Button>Learn More</Button>
      </div>
    </Container>
  </ViewPortView>
);
  
