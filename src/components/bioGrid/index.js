import React from 'react';
import PropTypes from 'prop-types';
import BioBlock from "../bioBlock";
import styles from './style.module.css';

const BioGrid = ({ team = [] }) => (
  <div className={styles.container}>
    {team.map(i => <BioBlock {...i}  key={i.name}/>)}
  </div>
);

BioGrid.propTypes = {
  team: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
}

export default BioGrid;