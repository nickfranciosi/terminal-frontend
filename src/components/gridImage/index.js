import React from 'react';
import styles from './style.module.css';

const GridImage = ({src, attribution, className, style}) => {
  return (
    <div className={className} style={style}>
      <img src={src} className={styles.image} />
      <p className={styles.attribution}>{attribution}</p>
    </div>
  );
}

export default GridImage;