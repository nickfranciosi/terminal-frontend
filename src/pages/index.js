import React from "react"
import ViewPortView from '../components/viewPortView';
import Container from '../components/container';
import Button from '../components/button';
import AngledImage from '../components/angledImage';
import mastheadImage from '../assets/images/homeAngle.png';

export default () => (
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
          <Button to="/about/">Learn More</Button>
        </div>
        <div style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          height: "100%",
        }}>
          <AngledImage src={mastheadImage} />
        </div>
      </Container>  
    </ViewPortView>
);
  
