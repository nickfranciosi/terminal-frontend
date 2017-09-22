import React from 'react';
import classNames from 'classnames';
import styles from './style.module.css';

const Viewport = ({ children, style, className }) => (
  <div
    className={classNames(styles.container, className)}
    style={style}
  >
    {children}
  </div>
);


export default Viewport;
