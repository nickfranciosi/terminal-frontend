import React from 'react';
import styles from './style.module.css';

const ImageBar = ( {images = []}) => {
  return (
    <div className={styles.container}>
      {images.map((image, i) => <img src={image} key={i} />)}
    </div>
  );
}

export default ImageBar;