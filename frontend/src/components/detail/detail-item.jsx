import React, { useEffect, useState } from 'react';

import propTypes from 'prop-types';

import ListData from '../../data/list-data';
import LoadingSpinner from '../button/loading-spinner';

function DetailItem({ decodedName }) {
  const [placeData, setPlaceData] = useState(null);

  useEffect(() => {
    const selectedPlace = ListData.find(
      (item) =>
        item.name.trim().toLowerCase() === decodedName.trim().toLowerCase(),
    );
    if (selectedPlace) {
      setPlaceData(selectedPlace);
    } else {
      console.error('Place not found');
    }
  }, [decodedName]);

  if (!placeData) {
    return <LoadingSpinner />;
  }

  const { category, images } = placeData;

  return (
    <div className="w-full overflow-hidden rounded-xl shadow-lg md:w-1/2">
      <div className="flex justify-center">
        <img
          src={images}
          alt={decodedName}
          className="h-96 w-full object-cover"
        />
      </div>
      <div className="bg-white p-6">
        <h1 className="text-center text-3xl font-semibold">{decodedName}</h1>
        <p className="text-center text-xs text-gray-400">{placeData.ENG_NM}</p>
        <p className="mt-4 text-center text-gray-600">{category}</p>
      </div>
    </div>
  );
}

DetailItem.propTypes = {
  decodedName: propTypes.string.isRequired,
};

export default DetailItem;
