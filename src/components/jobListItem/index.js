import React from 'react';
import styles from './style.module.css';

const JobListItem = ({ title, company, place, link }) => {
  return (
    <a className={styles.container} target="_blank" href={link}>
      <h3>{title}</h3>
      <div className={styles.details}>
        <p>{company}</p>
        <p>{place}</p>
      </div>
    </a>
  );
}

export default JobListItem;