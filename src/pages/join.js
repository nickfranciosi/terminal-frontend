import React from 'react';
import cn from 'classnames';
import Viewport from '../components/viewport';
import Container from '../components/container';
import LoadingScreen from '../components/loadingScreen';
import AngledImage from '../components/angledImage';
import FullBackgroundImage from '../components/fullBackgroundImage';
import Header from '../components/header';
import InvestorGrid from '../components/investorGrid';
import JobFilter from '../components/jobFilter';
import ScrollListener from '../components/scrollListener';
import Button from '../components/button';
import Footer from '../components/footer';
import Author from '../components/author';
import HeaderTextBlock from '../components/headerTextBlock';
import CenterTextBlock from '../components/centerTextBlock';
import SingleHeading from '../components/singleHeading';
import IconGrid from '../components/iconGrid';
import ImageBar from '../components/imageBar';
import GridImage from '../components/gridImage';
import SubMenu from '../components/subMenu';
import QuoteBlockImage from '../components/quoteBlockImage';
// import Carousel from '../components/carousel';
import mastheadImage from '../assets/images/mast-cropped.jpg';
import employeeBg from '../assets/images/employeeBg.jpg';
import leftColImage from '../assets/images/partner/leftColImage.jpg';
import rightColTopImage from '../assets/images/partner/rightColTopImage.jpg';
import rightColBottomImage from '../assets/images/partner/rightColBottomImage.jpg';
import abeAvatar from '../assets/images/avatars/AbrahamSquare.jpg';
import aboutFull from '../assets/images/aboutFull.jpg';

import styles from "./css/home.module.css";
import { investors, amenities, locations, imageBar, jobs } from "../data";

class JoinPage extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      showLoader: false,
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
      <div className="darkTheme">
        {/* preload the image */}
        <img src={aboutFull} style={{
          display: "none",
        }}/>
        <div className={styles.darkBg}>
          <Header darkTheme/>
          <Viewport className={styles.masthead}>
            <Container>
              <HeaderTextBlock
                description="Start a new career"
                headline="Join the team"
                body="Terminal builds elite engineering teams to solve the toughest challenges of tomorrow."
                className={styles.headerBlock}
                hideCallout
                callout={{
                  text: "Find a position",
                  link: "/",
                }}
              />
              <AngledImage src={aboutFull} className={styles.darkAngle}/>
            </Container>
            <SubMenu
              darkTheme
              menu={[
                {name: "benefits", link: "benefits"}, 
                {name: "testimonials", link: "testimonials"},
                {name: "open positions", link: "open-positions"},
              ]}
              callout={{
                text: "Find a position",
                link: "/",
              }}
            />
          </Viewport>
          <Container>
            <ScrollListener offset={650} onEnter={this.triggerTop}>
              <div id="benefits">
                <CenterTextBlock
                  description="Cursus Etiam Vehicula"
                  headline="Hard problems. Amazing benefits."
                  body="Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod."
                  className={styles.locationCenterBlock}
                  animate={this.state.topAnimation}
                />
              </div>
            </ScrollListener>
          </Container>
          <ImageBar images={imageBar} style={{
            marginBottom: 118,
          }}/>
          <Container className={styles.bioContainer}>
            <IconGrid data={amenities} />
          </Container>
          <QuoteBlockImage 
            imgSrc={employeeBg}
            style={{
              height: "90vh",
              marginBottom: 118,
            }}
            description="What our employees are saying"
            quote="People come together here to build some amazing technology.&rdquo;"
          />
          <ScrollListener offset={650} onEnter={this.triggerBottom}>
          <div id="open-positions">
            <Container>
              <CenterTextBlock
                description="Open roles"
                headline="Apply for an open position"
                body="Or send us a note to learn more."
                className={styles.applyBlock}
                animate={this.state.bottomAnimation}
              />
              <JobFilter jobs={jobs} />
            </Container>
          </div>
          </ScrollListener>
          <Footer darkTheme/>
        </div>
      </div>
    )
  }
}

export default JoinPage;
