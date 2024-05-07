import React, { useState } from 'react';

import propTypes from 'prop-types';

function PlaceSearchInput({ onSearchChange }) {
  const [searchInput, setSearchInput] = useState('');

  const inputChangeHandler = (event) => {
    setSearchInput(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={searchInput}
      onChange={inputChangeHandler}
      placeholder="찾기 어려우신가요? 원하시는 장소를 입력해보세요!"
      className="mb-8 w-96 rounded-lg border border-gray-300 p-2 focus:outline-gray-600"
    />
  );
}

PlaceSearchInput.propTypes = {
  onSearchChange: propTypes.func.isRequired,
};

export default PlaceSearchInput;
