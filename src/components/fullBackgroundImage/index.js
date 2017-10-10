import React from 'react';
import cn from 'classnames';
import styles from './style.module.css';

const FullBackgroundImage = ({ children, gradient, animateIn, className, imgSrc,style}) => (
  <div 
    className={cn(styles.container, animateIn && styles.animate, className)}
    style={{
      backgroundImage: `url(${imgSrc})`,
      ...style,
    }}
  > 
    {gradient &&
      <div className={styles.gradient} />
    }
    <div style={{
      width: "100%",
      zIndex: 10,
    }}>
      {children}  
    </div>
  </div>
);


export default FullBackgroundImage;


