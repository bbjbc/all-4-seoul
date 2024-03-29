import React from 'react';

import KakaoMap from '../components/map/kakao-map';
import MapCategory from '../components/map/map-category';

function HomePage() {
  return (
    <>
      <MapCategory />
      <KakaoMap />
    </>
  );
}

export default HomePage;
