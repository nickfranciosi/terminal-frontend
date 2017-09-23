import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './pagination.module.css';


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
      {type === "next" ? ">" : "<"}
    </button>
  )
}
  

export default PaginationButton;