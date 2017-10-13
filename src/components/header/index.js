import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Link from 'gatsby-link';
import styles from './style.module.css';
import logoMain from '../../assets/images/Terminal-logo.svg';
import logoWhite from '../../assets/images/logoWhite.svg';
import TextAnimate from '../textAnimate';
import ScrollLock from '../scrollLock';
import Button from '../button';
import MobileMenuToggle from '../mobileMenuToggle';
import Container from '../container';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenuOpen: false,
    }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
    })
  }

  render() {
    const { darkTheme, darkMenu } = this.props;
    return (
      <div className={cn(styles.container, darkTheme && styles.dark)}>
        <Link 
          to="/"
          className={styles.logoLink}
        >
          <TextAnimate
            triggerOnMount
            startDelay={0}
            timingClass={styles.first}
          >
            <img className={styles.image} src={darkTheme ? logoWhite : logoMain} />
          </TextAnimate>
        </Link>
        <div className={cn(styles.menu, darkMenu && styles.darkMenu)}>
          <Link  className={styles.mainLink} exact activeClassName={styles.active}to="/">Partner</Link>
          <Link className={styles.mainLink} activeClassName={styles.active} to="/join">Join</Link>
          <Link className={cn(styles.subLink, styles.topSub)} activeClassName={styles.active} to="/locations">Locations</Link>
          <Link className={styles.subLink} activeClassName={styles.active} to="/about">About</Link>
        </div>
        <div className={styles.mobileMenuToggleWrapper}>
          <MobileMenuToggle 
            onClick={this.toggleMobileMenu} 
            isOpen={this.state.mobileMenuOpen} 
            darkTheme={darkTheme}
          />
        </div>
        {this.state.mobileMenuOpen &&
          <div className={styles.mobileMenu}>
            <div>
              <TextAnimate
                triggerOnMount
                startDelay={0}
                timingClass={styles.mobileAnimate}
              >
                <Link  className={styles.mobileLink} exact activeClassName={styles.active}to="/">Partner</Link>
              </TextAnimate>
              <TextAnimate
                triggerOnMount
                startDelay={0}
                timingClass={styles.mobileAnimate}
              >
                <Link className={styles.mobileLink} activeClassName={styles.active} to="/join">Join</Link>
              </TextAnimate>
              <TextAnimate
                triggerOnMount
                startDelay={0}
                timingClass={styles.mobileAnimate}
              >
              <Link className={styles.mobileLink} activeClassName={styles.active} to="/locations">Locations</Link>
              </TextAnimate>
              <TextAnimate
                triggerOnMount
                startDelay={0}
                timingClass={styles.mobileAnimate}
              >
              <Link className={styles.mobileLink} activeClassName={styles.active} to="/about">About</Link>
              </TextAnimate>
              <div  className={styles.mobileCallout}>
                <TextAnimate
                  triggerOnMount
                  startDelay={0}
                  timingClass={styles.mobileAnimate}
                >
                  <Button
                    to="/"
                  >
                    Request an appointment
                  </Button>
                </TextAnimate>
                <TextAnimate 
                triggerOnMount
                startDelay={0}
                timingClass={styles.mobileAnimate}
              >  
                <a
                  href="#"
                  className={styles.secondaryCallout}
                  target="_blank"
                >
                  Open Roles
                </a>
              </TextAnimate>
              </div>
            </div>
            <ScrollLock />
          </div>
        }
      </div>
    );
  }
}

export default Header;

