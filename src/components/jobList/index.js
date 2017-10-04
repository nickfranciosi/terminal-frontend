import React from 'react';
import styles from './style.module.css';
import JobListItem from '../jobListItem';

const JobList = ({ jobs }) => {
  return (
    <div className={styles.listContainer}>
      { jobs.map(job => <JobListItem {...job} />)}
    </div>
  );
}


export default JobList;