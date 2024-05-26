import React from 'react';

import propTypes from 'prop-types';

import { IoMdClose, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function RightSheet({ isOpen, onClose }) {
  return (
    <div
      className={`fixed right-0 top-[52px] z-50 h-full w-4/12 transform rounded-l-3xl border bg-white transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="flex items-center justify-between border-b border-gray-300 p-4">
        <h2 className="text-lg font-semibold">회원님의 Today&apos;s PICK!</h2>
        <button
          onClick={onClose}
          className="hover:animate-swing text-gray-600 hover:text-gray-800"
        >
          <IoMdClose size={26} />
        </button>
      </div>
      <div className="relative z-50 h-full p-4 text-left">
        <p className="text-gray-600">
          회원님을 고려한 추천 리스트입니다. <br />
          오늘의 추천을 확인해보세요!
        </p>

        <button
          className="absolute right-full top-1/2 rounded-l-xl bg-amber-500 px-1 py-2 text-white shadow-lg hover:bg-amber-400"
          onClick={onClose}
        >
          {isOpen ? (
            <IoIosArrowForward size={26} />
          ) : (
            <IoIosArrowBack size={26} />
          )}
        </button>
      </div>
    </div>
  );
}

RightSheet.propTypes = {
  isOpen: propTypes.bool,
  onClose: propTypes.func,
};

export default RightSheet;
