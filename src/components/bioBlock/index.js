import React from 'react';
import styles from './style.module.css';

const BioBlock = ({ image, name, bio }) => (
  <div className={styles.outer}>
    <div className={styles.container}>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <div>
          <h4>{name}</h4>
        </div>
        <div>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  </div>
);

export default BioBlock;