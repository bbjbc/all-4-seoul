import React from 'react';

import propTypes from 'prop-types';

import { FaRegWindowClose } from 'react-icons/fa';

function PlaceOverlay({ place, id }) {
  return (
    <div className="absolute w-80 animate-fadein rounded-lg border border-gray-300 bg-white shadow-md">
      <div className="rounded-t-md bg-red-500 px-4 py-2 font-bold text-white">
        <a
          href={place.place_url}
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-300 hover:underline"
        >
          {place.place_name}
        </a>
        <button
          id={id}
          className="absolute right-2 top-2 text-white hover:text-orange-300"
        >
          <FaRegWindowClose size={23} />
        </button>
      </div>
      <div className="p-4">
        {place.road_address_name ? (
          <div title={place.road_address_name} className="text-sm">
            {place.road_address_name}
          </div>
        ) : (
          ''
        )}

        {place.address_name ? (
          <div title={place.address_name} className="text-sm">
            (지번 : {place.address_name})
          </div>
        ) : (
          ''
        )}
        <div className="text-sm text-green-600">{place.phone}</div>
      </div>
    </div>
  );
}

PlaceOverlay.propTypes = {
  place: propTypes.object,
  id: propTypes.string,
};

export default PlaceOverlay;
