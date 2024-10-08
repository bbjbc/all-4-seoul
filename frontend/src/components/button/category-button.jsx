import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CategoryButton({ icon: Icon, text, id, order }) {
  const [isFocused, setIsFocused] = useState(false);

  const focusHandler = () => {
    setIsFocused(!isFocused);
  };

  const blurHandler = () => {
    setIsFocused(false);
  };

  return (
    <button
      className={`flex flex-col items-center space-y-2 rounded-lg border-2 border-gray-600 bg-blue-50 px-1 py-2 text-center shadow-xl hover:bg-cyan-300 ${isFocused ? 'focus:bg-yellow-100' : ''}`}
      id={id}
      data-order={order}
      onClick={focusHandler}
      onBlur={blurHandler}
    >
      <Icon size={20} />
      <span>{text}</span>
    </button>
  );
}

CategoryButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string,
  order: PropTypes.string,
};

export default CategoryButton;
