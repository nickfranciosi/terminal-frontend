import React from 'react';
import styles from './style.module.css';

const ViewPortView = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);


export default ViewPortView;