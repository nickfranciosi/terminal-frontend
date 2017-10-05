import React from 'react';
import PropTypes from 'prop-types';
import Scroll, { Link, animateScroll } from 'react-scroll'; 
import classNames from 'classnames';
import Sticky from 'react-stickynode';
import styles from './style.module.css';
import Button from '../button';
import Container from '../container';
import TabNavigation from '../tabNavigation';
import TextAnimate from '../textAnimate';
import upLogoMain from '../../assets/images/upLogoMain.svg';
import upLogoLight from '../../assets/images/upLogoLight.svg';

class SubMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stuck: false,
    }
    this.handleStickyStateChange = this.handleStickyStateChange.bind(this);
  }
  
  handleStickyStateChange = (status) => {
    this.setState({
      stuck: status.status === Sticky.STATUS_FIXED,
    })
  }

  render()  {
    let stickContainerClass = classNames({
      [styles.stickyContainer]: true,
      [styles.active]: this.state.stuck,
      [styles.dark]: this.props.darkTheme,
    });
    const { menu, callout, darkTheme } = this.props;
    const logo = darkTheme ? upLogoLight : upLogoMain;
    return (
     
      <Sticky 
        onStateChange={this.handleStickyStateChange}
        className={stickContainerClass}
        innerZ={100}
      >
        <div className={styles.outerBlock}>
          
          <img 
            src={logo}
            className={styles.logo}
            onClick={animateScroll.scrollToTop}
          />
          <Container className={styles.container}>
            <div className={styles.menu}>
              <TabNavigation 
                showLine={this.state.stuck}
                darkTheme={darkTheme}
                tabs={menu}
                animationClass={styles.third}
              />
            </div>
            <div className={styles.callout}>
              <TextAnimate
                triggerOnMount
                startDelay={0}
                timingClass={styles.third}
              >
              <Button to={callout.link}>{callout.text}</Button>
              </TextAnimate>
            </div>
          </Container>
        
        </div>
      </Sticky>
    )
  }
}

SubMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  })),
  callout: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
  })
}

export default SubMenu;