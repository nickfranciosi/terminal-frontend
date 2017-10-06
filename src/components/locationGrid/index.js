import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import LocationCard from '../locationCard';
import styles from './style.module.css';

const LocationGrid = ({ locations = [], animateIn, className, style }) => (
  <div
    className={cn(styles.locationGrid, animateIn && styles.animate, className)}
    style={style}
  >
  {locations.map(location => (
    <LocationCard 
      {...location}
      className={styles.locationGridCard}
    />
  ))}
  </div>
);

LocationGrid.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    parentPlace: PropTypes.string,
    city: PropTypes.string,
    imgSrc: PropTypes.string,
    comingSoon: PropTypes.bool,
  })).isRequired,
}

export default LocationGrid;