import React from "react"
import ViewPortView from '../components/viewPortView';
import Container from '../components/container';
import Button from '../components/button';
import LoadingScreen from '../components/loadingScreen';
import AngledImage from '../components/angledImage';
import Header from '../components/header';
import mastheadImage from '../assets/images/homeAngle.png';

class IndexPage extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      showLoader: true,
    }
  }

  render() {
    return(
      <div>
      { this.state.showLoader ?
        <LoadingScreen done={() => this.setState({ showLoader: false })}/> :
        <div>
        <Header />
          <ViewPortView>
            <Container>
              <div 
                className="content"
                style={{
                  width: "50%",
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
                zIndex: -1,
                height: "100%",
              }}>
                <AngledImage src={mastheadImage} />
              </div>
            </Container>
          </ViewPortView>
        </div>
      }
      </div>
    )
  }
}

export default IndexPage;
