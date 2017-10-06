import React from 'react';
import cn from 'classnames';
import styles from './style.module.css';

const LocationCard = ({imgSrc, parentPlace, city, comingSoon, className, style }) => {
  return (
    <div 
      className={cn(styles.card, className)}
      style={{
        backgroundImage: `url(${imgSrc})`,
        ...style,
      }}
    >
      <div className={styles.textBlock}>
        <span>{parentPlace}</span>
        <h2>{city}</h2>
      </div>
      {comingSoon && <div className={styles.preview}><span>Coming soon</span></div>}
    </div>
  );
}

export default LocationCard;