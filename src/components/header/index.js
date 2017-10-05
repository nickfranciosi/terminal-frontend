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
      </div> 
  </Container>
);

export default Header;

