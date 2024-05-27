import React, { useState, useEffect } from 'react';

import KakaoMap from '../components/map/kakao-map';
import RightSheet from '../components/recommend/right-sheet';
import PopupBanner from '../components/recommend/popup-banner';

function HomePage() {
  const [isRightSheetOpen, setIsRightSheetOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // 3초 후 버튼 등장
  useEffect(() => {
    const buttonTimeout = setTimeout(() => {
      setIsButtonVisible(true);
    }, 3000);

    return () => {
      clearTimeout(buttonTimeout);
    };
  }, []);

  // 30초마다 팝업 띄움
  useEffect(() => {
    const popupInterval = setInterval(() => {
      setIsPopupVisible(true);
    }, 30000);

    return () => {
      clearTimeout(popupInterval);
    };
  }, []);

  const toggleRightSheet = () => {
    setIsRightSheetOpen(!isRightSheetOpen);
  };

  const closePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="relative h-screen">
      <KakaoMap />

      {isButtonVisible && (
        <button
          className="animate-gradientandBounceandslidein hover:animate-gradientandBounceandslidein fixed bottom-6 right-6 z-10 rounded-full bg-gradient-to-r from-amber-600 via-yellow-500 to-red-500 px-4 py-2 text-white shadow-2xl hover:from-amber-600 hover:via-amber-300 hover:to-red-400"
          onClick={toggleRightSheet}
        >
          Today&apos;s PICK!
        </button>
      )}

      <RightSheet isOpen={isRightSheetOpen} onClose={toggleRightSheet} />

      {isPopupVisible && <PopupBanner onClose={closePopup} />}
    </div>
  );
}

export default HomePage;
