import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Button = ({ children }) => (
  <button className={styles.base}>
    {children}
  </button>
);

export default Button;