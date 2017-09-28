import React from 'react';
import classNames from 'classnames';
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
// import Carousel from '../components/carousel';
import mastheadImage from '../assets/images/mast-cropped.jpg';
import aboutFullMobile from '../assets/images/aboutFull.jpg';
import aboutFullDesktop from '../assets/images/aboutFullNarrow.jpg';
import galleryPlaceholder from '../assets/images/Slideshow-placeholder.png';
import styles from "./css/home.module.css";
import { investors, team } from "../data";

class IndexPage extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      showLoader: true,
      topAnimation: false,
      bottomAnimation: false,
    }

    this.triggerTop = this.triggerTop.bind(this);
    this.triggerBottom = this.triggerBottom.bind(this);
  }

  handleDone = () => {
    setTimeout(() => {
      this.setState({ showLoader: false});
    }, 1700)
  }

  // triggerAnimation(location) {
  //   if(!this.state[location]) {
  //     this.setState({
  //       [location]: true,
  //     });
  //   }
  // }

  triggerTop() {
    this.setState({
      topAnimation: true,
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
            <ScrollListener offset={650} onEnter={this.triggerTop}>
              <div>
                <CenterTextBlock
                  description="We help you succeed"
                  headline="Gain access to top talent around the world"
                  body="Terminal accelerates innovation by rethinking how the best companies and the most talented people partner in building the future."
                  callout={{
                    text: "Read the manifesto",
                    link: "/manifesto",
                  }}
                  animate={this.state.topAnimation}
                />
              </div>
            </ScrollListener>
          </Container>
          <div className={styles.aboutFull}>
            <FullBackgroundImage 
              srcMobile={aboutFullMobile} 
              srcDesktop={aboutFullDesktop} 
            />
          </div>
          <Container>
            <ScrollListener onEnter={this.triggerBottom} offset={650}>
              <div>
                <CenterTextBlock
                  description="Founding Members"
                  headline="Meet the Terminal team"
                  className={styles.investorHeader}
                  animate={this.state.bottomAnimation}
                />
              </div>
            </ScrollListener>
            <div style={{ 
              marginBottom: 96,
            }}>
              <BioGrid team={team} />
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
