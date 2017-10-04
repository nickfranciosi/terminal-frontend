import React from 'react';
import styles from './style.module.css';

const JobListItem = ({ title, company, place }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.details}>
        <p>{company}</p>
        <p>{place}</p>
      </div>
    </div>
  );
}

export default JobListItem;