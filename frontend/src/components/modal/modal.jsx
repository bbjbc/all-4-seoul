import React, { useState, useEffect } from 'react';

import { IoCloseOutline } from 'react-icons/io5';
import propTypes from 'prop-types';

function Modal({ children, onClose, height }) {
  const [isVisible, setIsVisible] = useState(true);
  height = height || 'h-[500px]';

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${isVisible ? 'animate-fadein' : 'animate-fadeout'}`}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        className={`relative flex ${height} transform flex-col rounded-lg bg-white p-8 pt-10`}
      >
        <button
          onClick={handleClose}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <IoCloseOutline size={35} />
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: propTypes.node.isRequired,
  onClose: propTypes.func.isRequired,
  height: propTypes.string,
};

export default Modal;
