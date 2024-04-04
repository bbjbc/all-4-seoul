import React from 'react';

import { FaArrowCircleUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-10 right-10 rounded-full bg-amber-700 text-yellow-300 shadow-md hover:text-yellow-100"
    >
      <FaArrowCircleUp size={44} />
    </button>
  );
}

export default ScrollToTopButton;
