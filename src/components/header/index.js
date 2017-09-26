import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './style.module.css';
import logoImage from '../../assets/images/LogoMainColor.png';
import TextAnimate from '../textAnimate';
import Reveal from 'react-reveal';
// import Logo from '../logo';
const Header = () => (
    
      <Link 
        className={styles.container}
        to="/"
      >
      <TextAnimate triggerOnMount><img src={logoImage} /></TextAnimate>
        {/* <Logo /> */}
    </Link>
   
);

export default Header;

