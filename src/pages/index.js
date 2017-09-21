import React from "react"
import ViewPortView from '../components/viewPortView';
import Container from '../components/container';
import LoadingScreen from '../components/loadingScreen';
import AngledImage from '../components/angledImage';
import Header from '../components/header';
import HeaderTextBlock from '../components/headerTextBlock';
import mastheadImage from '../assets/images/mast-cropped.jpg';

class IndexPage extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      showLoader: true,
    }

  }

  handleDone = () => {
    setTimeout(() => {
      this.setState({ showLoader: false});
    }, 2750)
  }

  render() {
    return(
      <div>
      { this.state.showLoader ?
        <LoadingScreen done={this.handleDone}/> :
        <div>
        <Header />
          <ViewPortView>
            <Container>
              <HeaderTextBlock 
                description="Tristique Parturient"
                headline="We build teams in emerging tech hubs around the world."
                body="Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem magna mollis euismod."
                callout={{
                  text: "Learn More",
                  link: "/about",
                }}
              />
              <AngledImage src={mastheadImage} />
            </Container>
          </ViewPortView>
        </div>
      }
      </div>
    )
  }
}

export default IndexPage;
