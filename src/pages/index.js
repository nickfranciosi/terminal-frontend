import React from 'react';
import classNames from 'classnames';
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
        <LoadingScreen done={() => this.handleDone()}/> :
        <div>
          <Header />
          <Viewport className={styles.masthead}>
            <Container>
              <HeaderTextBlock
                description="A network of the best engineers"
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
              />
              <AngledImage src={mastheadImage} />
            </Container>
          </Viewport>
          <Container>
            <CenterTextBlock
              description="Our mission"
              headline="We&rsquo;re solving the talent shortage problem."
              body="Terminal accelerates innovation by rethinking how the best companies and the most talented people partner in building the future."
              callout={{
                text: "Read the manifesto",
                link: "/manifesto",
              }}
            />
          </Container>
          <Viewport className={classNames(styles.masthead, styles.aboutFull)}>
            <FullBackgroundImage src={aboutFull} />
          </Viewport>
          <Container>
            <CenterTextBlock
              description="Founding Members"
              headline="Meet the Terminal team"
              style={{
                marginBottom: "18px",
              }}
            />
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
