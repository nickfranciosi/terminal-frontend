import React from 'react';
import cn from 'classnames';
import { scroller } from 'react-scroll';
import Viewport from '../components/viewport';
import Container from '../components/container';
import LoadingScreen from '../components/loadingScreen';
import AngledImage from '../components/angledImage';
import FullBackgroundImage from '../components/fullBackgroundImage';
import Header from '../components/header';
import InvestorGrid from '../components/investorGrid';
import ScrollListener from '../components/scrollListener';
import JobFilter from '../components/jobFilter';
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
import mastheadImageJoin from '../assets/images/red-room-tall.jpg';
import employeeBg from '../assets/images/employeeBg.jpg';
import leftColImage from '../assets/images/partner/leftColImage.jpg';
import rightColTopImage from '../assets/images/partner/rightColTopImage.jpg';
import rightColBottomImage from '../assets/images/partner/rightColBottomImage.jpg';
import abeAvatar from '../assets/images/avatars/AbrahamSquare.jpg';
import aboutFull from '../assets/images/aboutFull.jpg';

import styles from "./css/home.module.css";
import { investors, amenities, locations, imageBar } from "../data";

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
        <div className={styles.darkBg}>
          <Header darkTheme/>
          <Viewport className={styles.masthead}>
            <Container>
              <HeaderTextBlock
                description="START A NEW JOURNEY"
                headline="Join the team"
                body="Don&rsquo;t just work, build the future. Join a high-growth startup team and tackle new challenges everyday."
                className={styles.headerBlock}
                hideCallout
                callout={{
                  text: "Find a position",
                  link: "#open-positions",
                }}
              />
              <AngledImage src={mastheadImageJoin} className={styles.darkAngle}/>
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
                action: () => {
                  scroller.scrollTo('open-positions', {
                    duration: 1000,
                    delay: 100,
                    smooth: true,
                    offset: -190,
                  })
                },
              }}
            />
          </Viewport>
          <div id="benefits">
            <Container>
              <ScrollListener offset={650} onEnter={this.triggerTop}>
              
                  <CenterTextBlock
                    description="OUR OFFICES SPAN THE GLOBE"
                    headline="Hard problems. Amazing benefits."
                    body="Worry about nailing that next release and let us make everything else easy."
                    className={styles.locationCenterBlock}
                    animate={this.state.topAnimation}
                  />
              </ScrollListener>
            </Container>
            <ImageBar images={imageBar} className={styles.imgBar}/>
            <Container className={styles.bioContainer}>
              <IconGrid data={amenities} />
            </Container>
          </div>
          <div  className={styles.quoteContainer}>
            <ScrollListener offset={650} onEnter={this.triggerMiddle}>
              <QuoteBlockImage 
                imgSrc={employeeBg}
                style={{
                  height: "90vh",
                }}
                animate={this.state.middleAnimation}
                className={styles.quoteWidth}
                description="WHAT OUR ENGINEERS ARE SAYING"
                quote="People come together here to build some amazing technology.&rdquo;"
              />
            </ScrollListener>
          </div>
          <ScrollListener offset={600} onEnter={this.triggerBottom}>
            <div id="open-positions">
              <Container>
                <CenterTextBlock
                  description="Open roles"
                  headline="Apply for an open position"
                  body="Use the filters below to find the perfect role."
                  className={styles.applyBlock}
                  animate={this.state.bottomAnimation}
                />
                <JobFilter />
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
