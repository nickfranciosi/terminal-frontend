import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './style.module.css';
import logoMain from '../../assets/images/Terminal-logo.svg';
import logoWhite from '../../assets/images/logoWhite.svg';
import TextAnimate from '../textAnimate';
import Container from '../container';

const Header = ({ darkTheme }) => (
  <Container className={styles.outerContainer}>
      <div className={styles.container}>
        <Link 
          to="/"
          className={styles.link}
        >
          <TextAnimate
            triggerOnMount
            startDelay={0}
            timingClass={styles.first}
          >
            <img className={styles.image} src={darkTheme ? logoWhite : logoMain} />
          </TextAnimate>
        </Link>
        <div className={styles.menu}>
          <Link  className={styles.mainLink} to="/">Partner</Link>
          <Link className={styles.mainLink} to="/join">Join</Link>
          <Link className={styles.subLink} to="/about">About</Link>
          <Link className={styles.subLink}to="/locations">Locations</Link>
        </div>
      </div>
  </Container>
);

export default Header;

