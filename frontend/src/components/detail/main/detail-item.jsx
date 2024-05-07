import React, { useEffect, useState } from 'react';

import propTypes from 'prop-types';

import ListData from '../../../data/list-data';
import LoadingSpinner from '../../button/loading-spinner';

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

  const { category, images, ENG_NM } = placeData;

  return (
    <div className="relative h-full w-full">
      <img
        src={images}
        alt={decodedName}
        className="absolute z-0 h-full w-full object-cover"
        style={{
          maskImage:
            'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))',
        }}
      />
      <div className="absolute z-10 flex h-full w-full flex-col items-start justify-center space-y-8 bg-gradient-to-l from-transparent to-black pl-40 opacity-80">
        <h1 className="text-center text-8xl font-bold text-white">
          {decodedName}
        </h1>
        <p className="text-center text-2xl text-white">{ENG_NM}</p>
        <p className="text-center text-5xl text-white">{category}</p>
      </div>
    </div>
  );
}

DetailItem.propTypes = {
  decodedName: propTypes.string.isRequired,
};

export default DetailItem;
