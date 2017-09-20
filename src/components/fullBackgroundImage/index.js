import React from 'react';
import styles from './style.module.css';

const FullBackgroundImage = ({ children, src }) => (
  <div 
    className={styles.container}
    style={{
      backgroundImage: `url(${src})`,
    }}
  >
    <div className={styles.gradient} />
    {children}
  </div>
);


export default FullBackgroundImage;