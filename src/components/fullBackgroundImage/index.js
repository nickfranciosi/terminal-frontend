import React from 'react';
import styles from './style.module.css';
import { Parallax } from 'react-parallax';

const FullBackgroundImage = ({ children, src }) => (
  <Parallax bgImage={src} strength={100} className={styles.container}> 
    {children}
  </Parallax>
);


export default FullBackgroundImage;