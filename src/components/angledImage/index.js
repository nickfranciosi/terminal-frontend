import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const AngledImage = ({ src, style }) => (
  <div className={styles.imageOuter} style={style}>
    <div className={styles.image} style={{backgroundImage: `url('${src}')`}} />
  </div>
);

export default AngledImage;
