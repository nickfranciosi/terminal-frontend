import React from 'react';
import styles from './style.module.css';

const FullBackgroundImage = ({ children, src }) => (
  <div 
    className={styles.container}
    style={{
      backgroundImage: `url(${src})`,
    }}
  >
    {children}
  </div>
);


export default FullBackgroundImage;