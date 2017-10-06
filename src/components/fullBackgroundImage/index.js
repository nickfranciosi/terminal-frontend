import React from 'react';
import cn from 'classnames';
import styles from './style.module.css';

const FullBackgroundImage = ({ children, animateIn, className, imgSrc}) => (
  <div 
    className={cn(styles.container, animateIn && styles.animate, className)}
    style={{
      backgroundImage: `url(${imgSrc})`,
    }}
  > 
    {children}
  </div>
);


export default FullBackgroundImage;


