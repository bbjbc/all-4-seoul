import React from 'react';

import propTypes from 'prop-types';

function FilterButton({ onClick, isActive, filteredName }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg p-2 text-lg font-semibold transition-all duration-200 ease-in-out hover:bg-orange-300 ${
        isActive ? 'bg-orange-100' : ''
      }`}
    >
      {filteredName}
    </button>
  );
}

FilterButton.propTypes = {
  onClick: propTypes.func.isRequired,
  isActive: propTypes.bool.isRequired,
  filteredName: propTypes.string.isRequired,
};

export default FilterButton;
