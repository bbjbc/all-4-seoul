import React, { useState, useEffect } from 'react';

import KakaoMap from '../components/map/kakao-map';
import RightSheet from '../components/recommend/right-sheet';
import PopupBanner from '../components/recommend/popup-banner';

function HomePage() {
  const [isRightSheetOpen, setIsRightSheetOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // 3초 후 버튼 등장
    const buttonTimeout = setTimeout(() => {
      setIsButtonVisible(true);
    }, 3000);

    // 5초 후 팝업 등장
    const popupTimeout = setTimeout(() => {
      setIsPopupVisible(true);
    }, 5000);

    return () => {
      clearTimeout(buttonTimeout);
      clearTimeout(popupTimeout);
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
          className="animate-slideinAndBounce fixed bottom-6 right-6 z-10 rounded-full bg-amber-500 px-4 py-2 text-white shadow-lg hover:bg-amber-400"
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
