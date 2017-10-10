import React from 'react';
import cn from 'classnames';
import styles from './style.module.css';

const GridImage = ({src, animate, attribution, className, style}) => {
  const wrapperClasses = cn({
    [className]: className,
    [styles.container]: true,
    [styles.animate]: animate,
  })
  return (
    <div className={wrapperClasses} style={style}>
      <img src={src} className={styles.image} />
      <p className={styles.attribution}>{attribution}</p>
    </div>
  );
}

export default GridImage;