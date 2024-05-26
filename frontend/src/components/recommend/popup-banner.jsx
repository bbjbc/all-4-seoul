import React, { useEffect, useState } from 'react';

import propTypes from 'prop-types';

import { IoIosArrowDown } from 'react-icons/io';
import popupImg from '../../assets/popup.png';

function PopupBanner({ onClose }) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(true);

    const autoCloseTimeout = setTimeout(() => {
      setIsShown(false);
      setTimeout(onClose, 500);
    }, 10000); // 팝업 노출 이후 10초 후에 자동으로 닫힘

    return () => clearTimeout(autoCloseTimeout);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-0 left-0 z-20 w-1/3 rounded-t-xl bg-amber-700 p-4 text-white shadow-lg transition-transform duration-500 ease-in-out ${isShown ? 'animate-popupShow' : 'animate-popupHide'}`}
    >
      <div className="flex items-center justify-between border-b border-white p-2">
        <h2 className="text-xl">☆안내 팝업 지나갑니다☆</h2>
        <button
          onClick={() => {
            setIsShown(false);
            setTimeout(onClose, 500);
          }}
          className="rounded-full bg-orange-300 px-2 py-1 hover:bg-red-400"
        >
          <IoIosArrowDown size={20} />
        </button>
      </div>
      <div className="p-2 text-center">
        <img
          src={popupImg}
          alt="popup"
          className="mx-auto h-96 w-96 rounded-full pb-3"
        />
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
