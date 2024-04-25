import React from 'react';

import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import NavBar from '../components/navigation/main-navigation';
import TypePickButton from '../components/button/type-pick-button';

function RootLayout() {
  const location = useLocation();

  const isLandingPage = location.pathname === '/';
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
