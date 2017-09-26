import React from 'react';
import classNames from 'classnames';
import Waypoint from 'react-waypoint';
import Viewport from '../components/viewport';
import Container from '../components/container';
import LoadingScreen from '../components/loadingScreen';
import AngledImage from '../components/angledImage';
import FullBackgroundImage from '../components/fullBackgroundImage';
import Header from '../components/header';
import InvestorGrid from '../components/investorGrid';
import Button from '../components/button';
import Footer from '../components/footer';
import HeaderTextBlock from '../components/headerTextBlock';
import CenterTextBlock from '../components/centerTextBlock';
import SingleHeading from '../components/singleHeading';
import Carousel from '../components/carousel';
import mastheadImage from '../assets/images/mast-cropped.jpg';
import aboutFull from '../assets/images/aboutFull.jpg';
import galleryPlaceholder from '../assets/images/Slideshow-placeholder.png';
import styles from "./css/home.module.css";
import { investors, team } from "../data";

class IndexPage extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      showLoader: true,
      animateTop: false,
      animateBottom: false,
    }

    this.triggerAnimation = this.triggerAnimation.bind(this);
  }

  handleDone = () => {
    setTimeout(() => {
      this.setState({ showLoader: false});
    }, 2750)
  }

  triggerAnimation(location) {
    if(!this.state[location]) {
      this.setState({
        [location]: true,
      });
    }
  }
  

  render() {
    return(
      <div>
      { this.state.showLoader ?
        <LoadingScreen done={() => this.handleDone()}/> :
        <div>
          <Header />
          <Viewport className={styles.masthead}>
            <Container>
              <HeaderTextBlock
                description="Tap into global talent"
                headline="Bold ideas require brilliant minds"
                body="Terminal builds elite engineering teams to solve the toughest challenges of tomorrow."
                callout={{
                  text: "Request appointment",
                  link: "/",
                }}
                secondaryCallout={{
                  text: "Open roles",
                  link: "/",
                }}
                className={styles.headerBlock}
              />
              <AngledImage src={mastheadImage} />
            </Container>
          </Viewport>
          <Container>
            <Waypoint onEnter={() => this.triggerAnimation("animateTop")} topOffset={300}>
              <div>
                <CenterTextBlock
                  description="We help you succeed"
                  headline="Gain access to top talent around the world"
                  body="Terminal accelerates innovation by rethinking how the best companies and the most talented people partner in building the future."
                  callout={{
                    text: "Read the manifesto",
                    link: "/manifesto",
                  }}
                  animate={this.state.animateTop}
                />
              </div>
            </Waypoint>
          </Container>
          <div className={styles.aboutFull}>
            <FullBackgroundImage src={aboutFull} />
          </div>
          <Container>
            <Waypoint onEnter={() => this.triggerAnimation("animateBottom")} topOffset={300}>
              <div>
                <CenterTextBlock
                  description="Founding Members"
                  headline="Meet the Terminal team"
                  style={{
                    marginBottom: "18px",
                  }}
                  animate={this.state.animateBottom}
                />
              </div>
            </Waypoint>
            <div style={{ 
              marginBottom: 96,
              maxWidth: 1500,
            }}>
              <Carousel slideData={team} />
            </div>
            <div className={styles.investorSection}>
              <SingleHeading>Trusted by the world&rsquo;s best investors</SingleHeading>
              <InvestorGrid investors={investors} />
            </div>
          </Container>
          <Footer />
        </div>
      }
      </div>
    )
  }
}

export default IndexPage;
