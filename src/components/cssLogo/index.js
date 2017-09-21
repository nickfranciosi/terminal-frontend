import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.module.css';

const CssLogo = ({ animate }) => {
  const wrapperClass = classNames({
    [styles.wrapper]: true,
    [styles.active]: animate,
  });
  return (
    <div className={styles.container}>
      <div className={wrapperClass}>
        <div className={styles.topLeft} />
        <div className={styles.middle} />
        <div className={styles.topRight} />
      </div>   
    </div>
  )
};

export default CssLogo;