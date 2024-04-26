import React from 'react';
import { useLocation } from 'react-router-dom';

import MyPageNav from './mypage-nav';
import MyPageContent from './mypage-content';

function MyPageLayout() {
  const location = useLocation();

  return (
    <div className="mb-6 mt-20 items-center">
      <MyPageNav />
      <MyPageContent currentPath={location.pathname} />
    </div>
  );
}

export default MyPageLayout;
