import React from 'react';
import styles from './style.module.css';

const ViewPortView = ({ children, style }) => (
  <div 
    className={styles.container}
    style={style}
  >
    {children}
  </div>
);


export default ViewPortView;