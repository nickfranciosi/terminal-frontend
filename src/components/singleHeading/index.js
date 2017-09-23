import React from 'react';
import SentenceAnimator from '../sentenceAnimator';
import styles from './style.module.css';

const SingleHeading = ({ children }) => (
  <div className={styles.container}>
    <h3 className={styles.headline}>
      <SentenceAnimator triggerOnScroll>
        {children}
      </SentenceAnimator>
    </h3>
  </div>
);

export default SingleHeading;

