import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const AngledImage = ({ src }) => (
  <div className={styles.imageOuter}>
    <div className={styles.image} style={{backgroundImage: `url('${src}')`}} />
  </div>
);

export default AngledImage;
