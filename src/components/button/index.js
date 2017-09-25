import React from 'react';
import PropTypes from 'prop-types';
import Link from "gatsby-link"
import styles from './style.module.css';

const Button = ({ children, to, style }) => (
  <Link 
    className={styles.base}
    to={to}
    style={style}
  >
    <div className={styles.defaultBackground}/>
    <div className={styles.hoverBackground}/>
    <div className={styles.text}>
      {children}
      <div className={styles.arrow}>&rarr;</div>
    </div>
  </Link>
);

export default Button;