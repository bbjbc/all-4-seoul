import React from 'react';

import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import propTypes from 'prop-types';

function HandleBackButton({ path }) {
  const navigation = useNavigate();

  const handleBack = () => {
    navigation(`/${path}`);
  };

  return (
    <div className="absolute left-32 top-20 z-50">
      <button
        className="text-md flex flex-row rounded-lg px-2 py-1 transition-all duration-200 ease-in-out hover:bg-slate-200"
        onClick={handleBack}
      >
        <IoArrowBack size={20} />
        뒤로가기
      </button>
    </div>
  );
}

HandleBackButton.propTypes = {
  path: propTypes.string,
};

export default HandleBackButton;
