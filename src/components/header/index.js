import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './style.module.css';
import logoImage from '../../assets/images/LogoMainColor.png';
import TextAnimate from '../textAnimate';
import Reveal from 'react-reveal';
// import Logo from '../logo';
const Header = () => (
    <Reveal effect="animated fadeInUp">
      <Link 
        className={styles.container}
        to="/"
      >
        <img src={logoImage} />
        {/* <Logo /> */}
    </Link>
   </Reveal>
);

export default Header;

