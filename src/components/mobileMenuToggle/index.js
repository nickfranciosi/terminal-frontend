import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.module.css';

const MobileMenuToggle = ({ onClick, isOpen }) => {
  const wrapperClass = classNames({
    [styles.container]: true,
    [styles.ex]: isOpen,
  });
  return (
    <div className={wrapperClass} onClick={onClick}>
      <span />
      <span />
    </div>
  )
};

export default MobileMenuToggle;