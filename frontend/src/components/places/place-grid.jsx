import React from 'react';

import PlaceItem from './place-item';
import PropTypes from 'prop-types';
import './place-grid.css';

function PlaceGrid({ places }) {
  return (
    <ul className="place-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {places.map((place) => (
        <li key={place.id}>
          <PlaceItem {...place} />
        </li>
      ))}
    </ul>
  );
}

PlaceGrid.propTypes = {
  places: PropTypes.array.isRequired,
};

export default PlaceGrid;
