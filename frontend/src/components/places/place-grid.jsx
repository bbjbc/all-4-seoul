import React from 'react';

import PlaceItem from './place-item';
import PropTypes from 'prop-types';

function PlaceGrid({ places }) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {places.map((place) => (
        <li key={place.id} className="animate-slidein">
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
