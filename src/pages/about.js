import React from "react";
import Reveal from 'react-reveal';
import cn from 'classnames';
import 'animate.css/animate.css';
import Viewport from '../components/viewport';
import Container from '../components/container';
import CalloutLink from '../components/calloutLink';
import CenterTextBlock from '../components/centerTextBlock';
import FullBackgroundImage from '../components/fullBackgroundImage';
import ScrollListener from '../components/scrollListener';
import aboutFull from '../assets/images/aboutFull.jpg';
import InvestorGrid from '../components/investorGrid';
import Footer from '../components/footer';
import Header from '../components/header';
import HeaderTextBlock from '../components/headerTextBlock';
import SecondaryTextBlock from '../components/secondaryTextBlock';
import { investors } from '../data';
import styles from './css/about.module.css';

class AboutPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      animateTop: false,
      animateBottom: false,
    }

    this.triggerAnimate = this.triggerAnimate.bind(this);
  }

  triggerAnimate(level) {
    this.setState({
      [`animate${level}`]: true,
    });
  }

  render() {
    return (
        <div>
        <Header darkMenu/>
        <div 
          style={{
          paddingTop: "20%",
          minHeight: 400,
          display: "flex",
          alignItems: "flex-end",
        }}
        >
          <Container>
            <HeaderTextBlock
              description="Learn more"
              headline="Get to know us"
              body="A look into the mission and team behind Terminal."
              className={styles.header}
            />
          </Container>
        </div>
        <div id="overview" className={styles.aboutFull}>
          <ScrollListener offset={350} onEnter={() => this.triggerAnimate("Top")}>
            <Viewport>
              <FullBackgroundImage 
                imgSrc={aboutFull} 
                animateIn 
                className={styles.aboutFullFlex}
                gradient
              >
                
                  <Container >
                    <SecondaryTextBlock
                      theme="white"
                      headlineSize="h2"
                      description="how we work"
                      headline="We’re solving the talent shortage problem"
                      body="Terminal accelerates innovation by rethinking how the best companies and the most talented people partner in building the future."
                      animate={this.state.animateTop}
                      callout={{
                        text: "Read the manifesto",
                        link: "https://medium.com/@terminal/announcing-terminal-c2a271cf7249",
                      }}
                    />
                  </Container>
              </FullBackgroundImage>
            </Viewport>
          </ScrollListener>
        </div>
        <div id="team">
          <ScrollListener offset={650} onEnter={() => this.triggerAnimate("Bottom")}>
            <Container>
                <CenterTextBlock
                  description="VENTURE CAPITAL"
                  headline="Trusted by the world&rsquo;s best investors"
                  className={cn(styles.headerNoButton, styles.investorHeadline)}
                  animate={this.state.animateBottom}
                />
              <InvestorGrid investors={investors} />
            </Container>
          </ScrollListener>
        </div>
        <Footer />
      </div>
    )
  }
}

export default AboutPage;
