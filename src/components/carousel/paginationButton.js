import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './pagination.module.css';
import chevronLeft from '../../assets/images/icons/chevronLeft.svg';
import chevronRight from '../../assets/images/icons/chevronRight.svg';

const PaginationButton = ({ onClick, type }) => {
  const paginationClasses = classNames({
    [styles.pagination]: true,
    [styles[`${type}`]]:true,
  });
  return (
    <button
      className={paginationClasses}
      onClick={onClick}
    >
      <div className={styles.defaultBackground}/>
      <div className={styles.hoverBackground}/>
      <img src={type === "next" ? chevronRight : chevronLeft} />
    </button>
  )
}
  

export default PaginationButton;