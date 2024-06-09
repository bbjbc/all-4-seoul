import React, { useEffect, useState } from 'react';

import propTypes from 'prop-types';

import { IoIosArrowDown } from 'react-icons/io';
import RecommendContent from './recommend-content';

function PopupBanner({ onClose }) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(true);

    const autoCloseTimeout = setTimeout(() => {
      setIsShown(false);
      setTimeout(onClose, 700);
    }, 10000); // 팝업 노출 이후 10초 후에 자동으로 닫힘

    return () => clearTimeout(autoCloseTimeout);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-0 left-0 z-20 w-[25%] rounded-t-xl bg-green-600 bg-opacity-70 p-4 text-white shadow-lg backdrop-blur transition-transform duration-500 ease-in-out ${isShown ? 'animate-popupShow' : 'animate-popupHide'}`}
    >
      <div className="flex items-center justify-between border-b border-white p-2">
        <h2 className="text-xl">☆추천 팝업 지나갑니다☆</h2>
        <button
          onClick={() => {
            setIsShown(false);
            setTimeout(onClose, 700);
          }}
          className="rounded-full bg-orange-300 px-2 py-1 hover:bg-red-400"
        >
          <IoIosArrowDown size={20} />
        </button>
      </div>
      <div className="p-2">
        <RecommendContent />
        <span>
          회원님을 위해서 장소를 추천해 드릴게요! <br />
          (팝업을 닫으시고 오른쪽 하단 버튼을 눌러보세요!)
        </span>
      </div>
    </div>
  );
}

PopupBanner.propTypes = {
  onClose: propTypes.func,
};

export default PopupBanner;
