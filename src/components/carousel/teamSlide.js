import React from 'react';
import styles from './slide.module.css';

const TeamSlide = ({name, title, image}) => (
  <div className={styles.slide}>
    <div 
      className={styles.imageContainer}
      style={{
        backgroundImage: `url(${image})`,
      }} 
    />
    <div className={styles.info}>
        <h4 className={styles.name}>{name}</h4>
        <h5 className={styles.title}>{title}</h5>
    </div>
  </div>
);

export default TeamSlide;