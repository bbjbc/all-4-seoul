import React, { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { useAuthWithCookies } from '../hooks/use-auth-with-cookies';
import MyPageNav from '../components/mypage/mypage-nav';
import BackgroundLayout from '../components/mypage/background-layout';

function MyPageLayout() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthWithCookies();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      <BackgroundLayout>
        <div className="flex h-screen w-full items-center justify-center">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="mt-4 flex h-[500px] items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="w-2/6 p-4">
                <MyPageNav />
              </div>
              <div className="w-4/6 p-4">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </BackgroundLayout>
    </>
  );
}

export default MyPageLayout;
