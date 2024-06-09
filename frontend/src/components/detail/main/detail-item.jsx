import React, { useEffect, useState } from 'react';

import propTypes from 'prop-types';

import ListData from '../../../data/list-data';
import LoadingSpinner from '../../button/loading-spinner';
import quokka from '../../../assets/quokka.gif';

function DetailItem({ decodedName, setIsLoading }) {
  const [placeData, setPlaceData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const selectedPlace = ListData.find(
        (item) =>
          item.name.trim().toLowerCase() === decodedName.trim().toLowerCase(),
      );
      if (selectedPlace) {
        setPlaceData(selectedPlace);
        setIsLoading(false);
      } else {
        console.error('Place not found');
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [decodedName, setIsLoading]);

  if (!placeData) {
    return (
      <div className="mt-20 flex flex-col items-center justify-center">
        <img src={quokka} alt="로딩중" className="h-80 w-80 object-cover" />
        <LoadingSpinner text="text-4xl" height="h-12" width="w-12" />
      </div>
    );
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
  setIsLoading: propTypes.func.isRequired,
};

export default DetailItem;
