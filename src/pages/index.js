import React from "react"
import ViewPortView from '../components/viewPortView';
import Container from '../components/container';
import Button from '../components/button';

export default () => (
  <ViewPortView>
    <Container>
      <div className="logo">
        <h2>Terminal</h2>
      </div>
      <div 
        className="content"
        style={{
          width: "60%",
        }}
      >
        <span>Above header text</span>
        <h1>We build teams in emerging tech hubs around the world.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus in sunt aspernatur harum ea animi assumenda illo</p>
        <Button>Learn More</Button>
      </div>
    </Container>
    <img
      style={{
        position: "absolute",
      }}
      src="http://lorempixel.com/1000/1000/business/" 
      alt=""
    />
  </ViewPortView>
);
  
