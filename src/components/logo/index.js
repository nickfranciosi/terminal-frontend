import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './style.module.css';
import logo from '../../assets/images/LogoMainColor.png';

const Logo = () => (
    <Link 
      className={styles.container}
      to="/"
    >
      <img src={logo} />
   </Link>
);

export default Logo;

