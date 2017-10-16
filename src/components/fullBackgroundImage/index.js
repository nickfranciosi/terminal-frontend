import React from 'react';
import { Parallax } from 'react-parallax';
import MediaQuery from 'react-responsive';
import styles from './style.module.css';

const FullBackgroundImage = ({ children, srcDesktop, srcMobile}) => (
  <MediaQuery maxWidth={650}>
    {(matches) => (
        <Parallax 
        bgImage={matches ? srcMobile : srcDesktop} 
        strength={200} 
        className={styles.container}
        disabled={matches}
      > 
        {children}
      </Parallax>
    )}
  </MediaQuery>
);


export default FullBackgroundImage;


