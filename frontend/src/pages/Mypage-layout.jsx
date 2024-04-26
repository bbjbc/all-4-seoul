import React from 'react';

import { Outlet } from 'react-router-dom';

import MyPageNav from '../components/mypage/mypage-nav';
import BackgroundLayout from '../components/mypage/background-layout';

function MyPageLayout() {
  return (
    <>
      <BackgroundLayout>
        <div className="mb-6 mt-20 w-3/5">
          <MyPageNav />
          <Outlet />
        </div>
      </BackgroundLayout>
    </>
  );
}

export default MyPageLayout;
