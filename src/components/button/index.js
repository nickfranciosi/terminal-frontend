import React from 'react';
import PropTypes from 'prop-types';
import Link from "gatsby-link"
import styles from './style.module.css';

const Button = ({ children, to, style }) => (
  <a 
    className={styles.base}
    href={to}
    style={style}
    target="_blank"
  >
    <div className={styles.text}>
      {children}
    </div>
  </a>
);

export default Button;