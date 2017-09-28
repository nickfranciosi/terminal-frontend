import React from 'react';
import classNames from 'classnames';
import styles from './style.module.css';

const Container = ({ children, className, style }) => (
  <div 
    className={classNames(styles.container, className)}
    style={style}
  >
    {children}
  </div>
);


export default Container;