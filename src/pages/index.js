import React from 'react';
import cn from 'classnames';
import Viewport from '../components/viewport';
import Container from '../components/container';
import LoadingScreen from '../components/loadingScreen';
import AngledImage from '../components/angledImage';
import FullBackgroundImage from '../components/fullBackgroundImage';
import Header from '../components/header';
import InvestorGrid from '../components/investorGrid';
import JobListItem from '../components/jobListItem';
import ScrollListener from '../components/scrollListener';
import Button from '../components/button';
import Footer from '../components/footer';
import Author from '../components/author';
import HeaderTextBlock from '../components/headerTextBlock';
import CenterTextBlock from '../components/centerTextBlock';
import SingleHeading from '../components/singleHeading';
import QuoteBlockImage from '../components/quoteBlockImage';
import LocationGrid from '../components/locationGrid';
import GridImage from '../components/gridImage';
import SubMenu from '../components/subMenu';
import mastheadImage from '../assets/images/mast-cropped.jpg';
import aboutFull from '../assets/images/aboutFull.jpg';
import homeQuote from '../assets/images/homeQuote.jpg';
import leftColImage from '../assets/images/partner/leftColImage.jpg';
import rightColTopImage from '../assets/images/partner/rightColTopImage.jpg';
import rightColBottomImage from '../assets/images/partner/rightColBottomImage.jpg';
import abeAvatar from '../assets/images/avatars/AbrahamSquare.jpg';


import styles from "./css/home.module.css";
import { investors, team, locations, imageBar } from "../data";

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
        {/* preload the images */}
        <img src={mastheadImage} style={{
          display: "none",
        }}/>
        <img src={aboutFull} style={{
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
                className={styles.headerBlock}
                hideCallout
                callout={{
                  link: '/',
                  text: "Request an appointment",
                }}
              />
              <AngledImage src={mastheadImage} />
            </Container>
            <SubMenu 
              menu={[
                {name: "locations", link: "locations"}, 
                {name: "services", link: "services"},
                {name: "testimonials", link: "testimonials"},
              ]}
              callout={{
                text: "Request an appointment",
                link: "/",
              }}
            />
          </Viewport>
          <div id="locations">
          <Container>
            <ScrollListener offset={650} onEnter={this.triggerTop}>
              <div >
                <CenterTextBlock
                  description="OUR CAMPUSES SPAN THE GLOBE"
                  headline="Tap into global talent"
                  body="All the benefits of adding a new location with none of the hassle. We help you scale your team."
                  className={styles.locationCenterBlock}
                  animate={this.state.topAnimation}
                />
              </div>
            </ScrollListener>
          </Container>
          </div>
          <LocationGrid locations={locations} className={styles.locationGridSection}/>
          <Container className={styles.gridImageSection}>
            <div className="clearfix" id="services">
              <div className={styles.leftColumn}>
                <div>
                  <ScrollListener offset={500} onEnter={this.triggerMiddle}>
                    <CenterTextBlock
                      description="Meet your new team"
                      headline="We&rsquo;ll help you add the right people to grow your team."
                      body="Whether you are scaling your Front-End, DevOps, or Data Science teams, our talented technologists are ready to join and make an impact."
                      className={styles.gridTextBlock}
                      animate={this.state.middleAnimation}
                    />
                  </ScrollListener>
                  <GridImage src={leftColImage} attribution="Our engineers have the experience to hit the ground running."/>
                </div>

              </div>
              <div className={styles.rightColumn}>
                  <GridImage src={rightColTopImage} attribution="Your team will use the tools of your organization to stay connected." className={styles.gridRightTop} />
                  <GridImage src={rightColBottomImage} attribution="We work with a variety of technologies including VR, AR, and more."/>
              </div>
            </div>
          </Container>
          <QuoteBlockImage 
            style={{
              marginBottom: "-60px",
            }}
            imgSrc={homeQuote}
            quote="We were able to scale our team and scope of work without breaking a sweat.&rdquo;"
            author={{
              avatar: abeAvatar,
              name: "Jack Abraham",
              description: "CEO @Zenreach |  240 employees",
            }}
          />
          <Footer />
        </div>
      }
      </div>
    )
  }
}

export default IndexPage;
