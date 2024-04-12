import React from 'react';

import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

function PlaceItem({ name, category, images }) {
  const navigation = useNavigate();

  const handleClick = () => {
    const encodedName = encodeURIComponent(name);
    navigation(`/${encodedName}`);
    console.log(encodedName);
  };

  return (
    <article
      className="flex cursor-pointer flex-col items-center rounded-xl bg-white shadow-xl"
      onClick={handleClick}
      role="presentation"
    >
      <header className="h-auto w-auto overflow-hidden">
        <img
          src={images}
          alt={name}
          className="h-full w-full rounded-t-xl object-cover"
        />
      </header>
      <div className="p-4 text-center">
        <p className="text-sm text-gray-600">{category}</p>
        <h2 className="mt-2 text-xl font-semibold">{name}</h2>
      </div>
    </article>
  );
}

PlaceItem.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};

export default PlaceItem;
