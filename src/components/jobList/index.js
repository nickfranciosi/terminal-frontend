import React from 'react';
import styles from './style.module.css';
import JobListItem from '../jobListItem';

const JobList = ({ jobs }) => {
  return (
    <div className={styles.listContainer}>
      { jobs.map((job, i) => <JobListItem {...job} key={`${job.title}${i}`} />)}
    </div>
  );
}


export default JobList;