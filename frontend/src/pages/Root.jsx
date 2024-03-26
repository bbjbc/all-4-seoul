import React from 'react';

import { Outlet } from 'react-router-dom';

import NavBar from '../components/navigation/main-navigation';
import TypePickButton from '../components/button/type-pick-button';

function RootLayout() {
  return (
    <>
      <NavBar />
      <TypePickButton />
      <main className="text-center">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
