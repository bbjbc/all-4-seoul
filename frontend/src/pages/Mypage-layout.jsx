import React, { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { useUser } from '../state/user-context';
import MyPageNav from '../components/mypage/mypage-nav';
import BackgroundLayout from '../components/mypage/background-layout';

function MyPageLayout() {
  const { isLoggedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const storedId = localStorage.getItem('id');
    if (!isLoggedIn && !storedId) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      <BackgroundLayout>
        <div className="mb-6 mt-20 w-1/2">
          <MyPageNav />
          <Outlet />
        </div>
      </BackgroundLayout>
    </>
  );
}

export default MyPageLayout;
