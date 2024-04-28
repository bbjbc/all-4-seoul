import React from 'react';

import MyPageButton from './mypage-button';

function MyPageNav() {
  return (
    <div className="relative z-10 rounded-lg bg-gray-100 px-2 py-1 font-gmarketbold shadow-lg">
      <div className="flex justify-center gap-3">
        <MyPageButton to="/mypage">내 정보</MyPageButton>
        <MyPageButton to="/mypage/comment">내 댓글</MyPageButton>
        <MyPageButton to="/mypage/bookmarked">내 북마크</MyPageButton>
        <MyPageButton to="/mypage/change-info">내 정보 변경</MyPageButton>
      </div>
    </div>
  );
}

export default MyPageNav;
