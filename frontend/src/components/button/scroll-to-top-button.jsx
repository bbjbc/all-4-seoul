import React from 'react';

import propTypes from 'prop-types';

import { FaArrowCircleUp } from 'react-icons/fa';

function ScrollToTopButton({ isVisible }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 ${
        isVisible ? 'animate-slidein' : 'animate-fadeout'
      } rounded-full bg-amber-700 text-yellow-300 shadow-md hover:text-yellow-100`}
    >
      <FaArrowCircleUp size={44} />
    </button>
  );
}

ScrollToTopButton.propTypes = {
  isVisible: propTypes.bool,
};

export default ScrollToTopButton;
