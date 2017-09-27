import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

export default ({ children, className,style }) => (
  <span 
    className={classNames(styles.reset, className)}
    style={style}
  >
    {children}
  </span>
);