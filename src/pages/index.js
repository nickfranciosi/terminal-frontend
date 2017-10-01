import React from 'react';
import cn from 'classnames';
import Viewport from '../components/viewport';
import Container from '../components/container';
import LoadingScreen from '../components/loadingScreen';
import AngledImage from '../components/angledImage';
import FullBackgroundImage from '../components/fullBackgroundImage';
import Header from '../components/header';
import InvestorGrid from '../components/investorGrid';
import ScrollListener from '../components/scrollListener';
import Button from '../components/button';
import Footer from '../components/footer';
import HeaderTextBlock from '../components/headerTextBlock';
import CenterTextBlock from '../components/centerTextBlock';
import SingleHeading from '../components/singleHeading';
import BioGrid from '../components/bioGrid';
import LocationGrid from '../components/LocationGrid';
// import Carousel from '../components/carousel';
import mastheadImage from '../assets/images/mast-cropped.jpg';
import aboutFullMobile from '../assets/images/aboutFull.jpg';
import aboutFullDesktop from '../assets/images/aboutFullNarrow.jpg';
import galleryPlaceholder from '../assets/images/Slideshow-placeholder.png';
import styles from "./css/home.module.css";
import { investors, team, locations } from "../data";

class IndexPage extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      showLoader: true,
      topAnimation: false,
      middleAnimation: false,
      bottomAnimation: false,
    }

    this.triggerTop = this.triggerTop.bind(this);
    this.triggerMiddle = this.triggerMiddle.bind(this);
    this.triggerBottom = this.triggerBottom.bind(this);
  }

  handleDone = () => {
    setTimeout(() => {
      this.setState({ showLoader: false});
    }, 1700)
  }

  triggerTop() {
    this.setState({
      topAnimation: true,
    });
  }

  triggerMiddle() {
    this.setState({
      middleAnimation: true,
    });
  }

  triggerBottom() {
    this.setState({
      bottomAnimation: true,
    });
  }
  

  render() {
    return(
      <div>
        {/* preload the image */}
        <img src={mastheadImage} style={{
          display: "none",
        }}/>
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
                  link: "mailto:stdin@terminal.io",
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
            <ScrollListener offset={650} onEnter={this.triggerTop}>
              <div>
                <CenterTextBlock
                  description="Our offices span the globe"
                  headline="Tap into global talent"
                  body="All the benefits of adding a new location with none of the hassle. We help you scale your team."
                  className={styles.manifestoCenterBlock}
                  animate={this.state.topAnimation}
                />
              </div>
            </ScrollListener>
          </Container>
          <LocationGrid locations={locations} className={styles.locationGridSection}/>
          <Container>
            <h3>Image Grid Here</h3>
          </Container>
          <Footer />
        </div>
      }
      </div>
    )
  }
}

export default IndexPage;
