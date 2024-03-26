import React from 'react';

import { Outlet } from 'react-router-dom';

import KakaoMap from '../components/map/kakao-map';
import NavBar from '../components/navigation/main-navigation';

function RootLayout() {
  return (
    <>
      <NavBar />
      <KakaoMap />
      <main className="m-[2rem] text-center">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
