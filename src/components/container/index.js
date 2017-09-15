import React from 'react';
import styles from './style.module.css';

const Container = ({ children, style }) => (
  <div 
    className={styles.container}
    style={style}
  >
    {children}
  </div>
);


export default Container;