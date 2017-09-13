import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const AngledImage = ({ src }) => (
  <div className={styles.imageWrap}>
    <img className={styles.image} src={src} alt="" />
  </div>
);

export default AngledImage;