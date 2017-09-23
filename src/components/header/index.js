import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './style.module.css';
import logoImage from '../../assets/images/LogoMainColor.png';
import Logo from '../logo';
const Header = () => (
    <Link 
      className={styles.container}
      to="/"
    >
      <img src={logoImage} />
      {/* <Logo /> */}
   </Link>
);

export default Header;

