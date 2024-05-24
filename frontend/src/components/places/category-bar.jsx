import React from 'react';

import PropTypes from 'prop-types';

function CategoryBar({ categories, selectedCategory, changeCategory }) {
  return (
    <article className="my-8 flex w-full justify-center rounded-xl bg-white shadow-lg">
      {categories.map((cate) => (
        <button
          key={cate}
          className={`px-4 py-2 ${
            selectedCategory === cate
              ? 'font-semibold'
              : 'text-gray-800 hover:font-semibold hover:text-neutral-600'
          }`}
          onClick={() => changeCategory(cate)}
        >
          {cate}
        </button>
      ))}
    </article>
  );
}

CategoryBar.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,
};

export default CategoryBar;
