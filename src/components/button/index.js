import React from 'react';
import PropTypes from 'prop-types';
import Link from "gatsby-link"
import styles from './style.module.css';

const Button = ({ children, to, style }) => (
  <a 
    className={styles.base}
    href={to}
    style={style}
  >
    <div className={styles.defaultBackground}/>
    <div className={styles.hoverBackground}/>
    <div className={styles.text}>
      {children}
    </div>
  </a>
);

export default Button;