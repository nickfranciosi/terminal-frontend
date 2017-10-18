import React from 'react';
import PropTypes from 'prop-types';
import IconBlock from "../iconBlock";
import styles from './style.module.css';

const IconGrid = ({ data = [] }) => (
  <div className={styles.container}>
    {data.map(i => <IconBlock {...i}  key={i.headline}/>)}
  </div>
);

IconGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
}

export default IconGrid;