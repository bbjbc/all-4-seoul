import React from 'react';

import { IoCloseOutline } from 'react-icons/io5';

import PropTypes from 'prop-types';

function Modal({ children, onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className="relative flex flex-col rounded-lg bg-white p-16">
        <button
          onClick={onClose}
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
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
