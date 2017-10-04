import React from 'react';
import cn from 'classnames';
import styles from './style.module.css';

const ImageBar = ( {images = [], style, className}) => {
  return (
    <div className={cn(styles.container, className)} style={style}>
      {images.map((image, i) => <img src={image} key={i} />)}
    </div>
  );
}

export default ImageBar;