import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './style.module.css';
import logoImage from '../../assets/images/LogoMainColor.png';
import TextAnimate from '../textAnimate';

const Header = () => (
    
      <Link 
        className={styles.container}
        to="/"
      >
      <TextAnimate
        triggerOnMount
        startDelay={0}
        timingClass={styles.second}
      >
        <img src={logoImage} />
      </TextAnimate>
    </Link>
   
);

export default Header;

