import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const AngledImage = ({ src, style }) => (
  <div className={styles.container} style={style}>
    <div className={styles.imageWrap}>
      <img className={styles.image} src={src} alt="" />
    </div>
  </div>
);

export default AngledImage;