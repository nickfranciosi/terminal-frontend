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
    const content = this.props.data.wordpressPage.acf;
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
              description={content.description}
              headline={content.headline}
              body={content.body}
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
                      description={content.secondBlockDescriptionText}
                      headline={content.secondBlockHeadline}
                      body={content.secondBlockBody}
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
                  description={content.thirdBlockDescription}
                  headline={content.thirdBlockHeadline}
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

export const query = graphql`
query AboutPageQuery {
  wordpressPage(id: { eq: "8f4a73ae-3715-5f79-b05a-d6a2e1f51575" }) {
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
    }
  }
}
`

export default AboutPage;
