import React from 'react';

import PropTypes from 'prop-types';

function PlaceItem({ name, category, images }) {
  return (
    <article className="flex flex-col items-center rounded-xl bg-white shadow-xl">
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
