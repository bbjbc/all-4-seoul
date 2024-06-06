import React from 'react';

import { Link } from 'react-router-dom';

import propTypes from 'prop-types';

function RecommendGrid({ item }) {
  const { name, category, description, reviews, averagePrice, imageUrl } = item;

  return (
    <div className="rounded-lg bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <Link to={`/list/${name}`}>
        <img
          src={imageUrl}
          alt={name}
          className="mb-4 h-40 w-full rounded-t-lg object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="flex flex-row items-baseline gap-2">
          <h2 className="mb-2 text-xl font-semibold text-black hover:text-blue-600">
            {name}
          </h2>
          <p className="mb-2 text-sm text-gray-600">{category}</p>
        </div>
        <p className="mb-4 text-gray-800">{description}</p>
        <div className="text-sm text-gray-500">
          <p>
            리뷰 개수: {reviews} / 평균 가격: {averagePrice}
          </p>
        </div>
      </Link>
    </div>
  );
}

RecommendGrid.propTypes = {
  item: propTypes.object,
};

export default RecommendGrid;
