import React from 'react';

import { useNavigate } from 'react-router-dom';

import propTypes from 'prop-types';
import { IoArrowBack } from 'react-icons/io5';

function DetailLayout({ children }) {
  const navigation = useNavigate();

  const handleBack = () => {
    navigation('/list');
  };

  return (
    <div className="flex h-screen">
      <div className="relative flex-grow animate-slidein">
        <div className="absolute left-32 top-20 z-50">
          <button
            className="text-md flex flex-row rounded-lg px-2 py-1 text-white transition-all duration-200 ease-in-out hover:bg-teal-700"
            onClick={handleBack}
          >
            <IoArrowBack size={20} />
            뒤로가기
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

DetailLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default DetailLayout;
