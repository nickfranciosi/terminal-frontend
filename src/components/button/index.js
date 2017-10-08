import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Link from "gatsby-link"
import styles from './style.module.css';

const Button = ({ children, to, style, className }) => (
  <a 
    className={cn(styles.base, className)}
    href={to}
    style={style}
  >
    <div className={styles.text}>
      {children}
    </div>
  </a>
);

export default Button;