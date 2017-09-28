import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './style.module.css';
import logoImage from '../../assets/images/Terminal-logo.svg';
import TextAnimate from '../textAnimate';

const Header = () => (
    
      <Link 
        className={styles.container}
        to="/"
      >
      <TextAnimate
        triggerOnMount
        startDelay={0}
        timingClass={styles.first}
      >
        <img className={styles.image} src={logoImage} />
      </TextAnimate>
    </Link>   
   
);

export default Header;

