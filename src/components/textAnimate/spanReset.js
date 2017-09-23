import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

export default ({ children, className, innerRef,style }) => (
  <span 
    className={classNames(styles.reset, className)}
    style={style}
    ref={innerRef}
  >
    {children}
  </span>
);