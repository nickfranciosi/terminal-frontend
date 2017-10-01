import React from 'react';
import cn from 'classnames';
import styles from './style.module.css';

const FullBackgroundImage = ({ children, className, imgSrc}) => (
  <div 
    className={cn(styles.container, className)}
    style={{
      backgroundImage: `url(${imgSrc})`,
    }}
  > 
        {children}
  </div>
);


export default FullBackgroundImage;


