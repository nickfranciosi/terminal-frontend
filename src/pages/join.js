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
import mastheadImageJoin from '../assets/images/red-room-tall.jpg';
import employeeBg from '../assets/images/employeeBg.jpg';
import leftColImage from '../assets/images/partner/leftColImage.jpg';
import rightColTopImage from '../assets/images/partner/rightColTopImage.jpg';
import rightColBottomImage from '../assets/images/partner/rightColBottomImage.jpg';
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
    const content = this.props.data.wordpressPage.acf;
    return(
      <div className="darkTheme">
        <div className={styles.darkBg}>
          <Header darkTheme/>
          <Viewport className={styles.masthead}>
            <Container>
              <HeaderTextBlock
                description={content.description}
                headline={content.headline}
                body={content.body}
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
                    description={content.secondBlockDescriptionText}
                    headline={content.secondBlockHeadline}
                    body={content.secondBlockBody}
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
                description={content.quoteDescription}
                quote={content.quote}
              />
            </ScrollListener>
          </div>
          <ScrollListener offset={600} onEnter={this.triggerBottom}>
            <div id="open-positions">
              <Container>
                <CenterTextBlock
                  description={content.thirdBlockDescription}
                  headline={content.thirdBlockHeadline}
                  body={content.thirdBlockBody}
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


export const query = graphql`
query JoinPageQuery {
  wordpressPage(id: { eq: "36a09538-df23-5231-89ea-6e5e96e29bfe" }) {
    id
    title
    acf{
      description
      headline
      body
      secondBlockDescriptionText
      secondBlockHeadline
      secondBlockBody
      thirdBlockDescription
      thirdBlockHeadline
      thirdBlockBody
      quote
      quoteDescription
    }
  }
}
`

export default JoinPage;
