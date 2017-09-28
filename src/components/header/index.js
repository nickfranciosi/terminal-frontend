import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './style.module.css';
import logoImage from '../../assets/images/Terminal-logo.svg';
import TextAnimate from '../textAnimate';
import Container from '../container';

const Header = () => (
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
            <img className={styles.image} src={logoImage} />
          </TextAnimate>
        </Link>
      </div> 
  </Container>
);

export default Header;

