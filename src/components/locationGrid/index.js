import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";
import LocationCard from "../locationCard";

const LocationGrid = ({ locations = [], className, style }) => (
  <div
    className={cn("LocationGrid", className)}
    style={{
      display: "flex",
      ...style,
    }}
  >
  {locations.map(location => (
    <LocationCard 
      {...location}
      style={{
        flex: 1,
      }}
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