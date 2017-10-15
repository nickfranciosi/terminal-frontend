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
import mastheadImagePartner from '../assets/images/mast-cropped.jpg';
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
      topAnimation: false,
      middleAnimation: false,
      bottomAnimation: false,
    }

    this.triggerTop = this.triggerTop.bind(this);
    this.triggerMiddle = this.triggerMiddle.bind(this);
    this.triggerBottom = this.triggerBottom.bind(this);

    console.log(props.data);
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
      <div>
        <Header />
        <Viewport className={styles.masthead}>
          <Container>
            <HeaderTextBlock
              description={content.description}
              headline={content.headline}
              body={content.body}
              className={styles.headerBlock}
              hideCallout
              callout={{
                link: 'mailto:stdin@terminal.io',
                text: "Request an appointment",
              }}
            />
            <AngledImage src={mastheadImagePartner} />
          </Container>
          <SubMenu 
            menu={[
              {name: "locations", link: "locations"}, 
              {name: "services", link: "services"},
              {name: "testimonials", link: "testimonials"},
            ]}
            callout={{
              text: "Request an appointment",
              link: "mailto:stdin@terminal.io",
            }}
          />
        </Viewport>
        <div id="locations">
        <Container>
          <ScrollListener offset={650} onEnter={this.triggerTop}>
            <div >
              <CenterTextBlock
                description={content.secondBlockDescriptionText}
                headline={content.secondBlockHeadline}
                body={content.secondBlockBody}
                className={cn(styles.locationCenterBlock, styles.home)}
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
                    description={content.thirdBlockDescription}
                    headline={content.thirdBlockHeadline}
                    body={content.thirdBlockBody}
                    className={styles.gridTextBlock}
                    animate={this.state.middleAnimation}
                  />
                </ScrollListener>
                <GridImage 
                  src={leftColImage} 
                  animate={this.state.middleAnimation}
                  attribution="Our engineers have the experience to hit the ground running."/>
              </div>

            </div>
            <div className={styles.rightColumn}>
                <GridImage src={rightColTopImage}
                animate={this.state.middleAnimation}
                attribution="Your team will use the tools of your organization to stay connected." className={styles.gridRightTop} />
                <GridImage
                animate={this.state.middleAnimation}
                src={rightColBottomImage} 
                attribution="We work with a variety of technologies including VR, AR, and more."/>
            </div>
          </div>
        </Container>
        <ScrollListener offset={600} onEnter={this.triggerBottom}>
          <QuoteBlockImage 
            style={{
              marginBottom: "-60px",
            }}
            className={styles.quoteImageHome}
            imgSrc={homeQuote}
            description={content.quoteDescription}
            quote={content.quote}
            animate={this.state.bottomAnimation}
            author={{
              avatar: content.authorAvatar.url,
              name: content.authorName,
              description: content.authorDescription,
            }}
          />
        </ScrollListener>
        <Footer />
      </div>
    )
  }
}

export const query = graphql`
query PartnerPageQuery {
  wordpressPage(id: { eq: "317460cd-6bab-5eb3-b08f-105b99c98a49" }) {
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
      authorName
      authorDescription
      authorAvatar {
        url
      }
    }
  }
}
`

export default IndexPage;
