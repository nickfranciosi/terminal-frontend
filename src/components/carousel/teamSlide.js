import React from 'react';
import styles from './slide.module.css';

const TeamSlide = ({name, title, image}) => (
  <div className={styles.slide}>
    <img className={styles.image} src={image} alt={name}/>
    <div className={styles.info}>
        <h4 className={styles.name}>{name}</h4>
        <h5 className={styles.title}>{title}</h5>
    </div>
  </div>
);

export default TeamSlide;