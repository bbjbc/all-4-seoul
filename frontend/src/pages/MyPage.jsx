import React from 'react';

import MyPageLayout from '../components/mypage/mypage-layout';
import BackgroundLayout from '../components/mypage/background-layout';

function MyPage() {
  return (
    <BackgroundLayout>
      <MyPageLayout />
    </BackgroundLayout>
  );
}

export default MyPage;
