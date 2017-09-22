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
    {children}
  </Link>
);

export default Button;