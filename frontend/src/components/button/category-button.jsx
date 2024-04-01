import React from 'react';
import PropTypes from 'prop-types';

function CategoryButton({ icon: Icon, text, onClick }) {
  return (
    <button
      className="flex items-center rounded-full border-2 border-gray-600 bg-zinc-100 px-3 py-1 text-center shadow-xl hover:bg-slate-200 focus:bg-yellow-100"
      onClick={onClick}
    >
      <Icon size={20} />
      <span className="ml-1">{text}</span>
    </button>
  );
}

CategoryButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CategoryButton;
