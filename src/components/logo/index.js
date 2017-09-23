import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.module.css';

const Logo = ({ animate }) => {
  const wrapperClass = classNames({
    [styles.wrapper]: true,
    [styles.active]: animate,
  });
  return (
    <div>
      <div className={styles.container}>
        <div className={wrapperClass}>
          <div className={styles.topLeft} />
          <div className={styles.middle} />
          <div className={styles.topRight} />
        </div>
        <h1 className={styles.text}>Terminal</h1>
      </div>
      
    </div>
  )
};

export default Logo;