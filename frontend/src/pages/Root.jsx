import React from 'react';

import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import NavBar from '../components/navigation/main-navigation';
import TypePickButton from '../components/button/type-pick-button';

function RootLayout() {
  const location = useLocation();

  // 현재 경로가 랜딩 페이지인지 확인
  const isLandingPage = location.pathname === '/landing'; // 랜딩 페이지의 경로
  return (
    <>
      {!isLandingPage && (
        <>
          <TypePickButton />
          <NavBar />
        </>
      )}
      <main className="text-center">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
