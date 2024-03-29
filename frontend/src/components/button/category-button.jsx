import React from 'react';

import propTypes from 'prop-types';

function CategoryButton({ icon: Icon, text }) {
  return (
    <button className="flex items-center rounded-full border-2 border-gray-600 bg-zinc-100 px-3 py-1 text-center shadow-xl hover:bg-slate-200">
      <Icon size={20} />
      <span className="ml-1">{text}</span>
    </button>
  );
}

CategoryButton.propTypes = {
  icon: propTypes.elementType.isRequired,
  text: propTypes.string.isRequired,
};

export default CategoryButton;
