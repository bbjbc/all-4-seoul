import React, { useState, useEffect } from 'react';

import { FaUserCircle } from 'react-icons/fa';
import MyPageButton from './mypage-button';
import MypagePhrase from './mypage-phrase';
import { getUserInfo } from '../../lib/get-user-info';

function MyPageNav() {
  const [userName, setUserName] = useState('피어나');

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const currentUser = await getUserInfo();
        const name = currentUser ? currentUser.userName : '피어나';
        setUserName(name);
      } catch (error) {
        console.error('사용자 정보를 가져오는 데 실패했습니다.', error);
      }
    }
    fetchUserInfo();
  }, []);

  return (
    <>
      <main className="relative z-10 rounded-lg bg-white p-4 py-10 shadow-2xl">
        <div className="mb-4 flex flex-col items-center gap-4">
          <FaUserCircle className="mr-2 text-3xl" size={70} />
          <div className="font-gmarketbold text-xl">{userName}</div>
        </div>
        <div className="relative z-10 mb-6">
          <MyPageButton to="/mypage">내 정보</MyPageButton>
          <hr className="my-2 border-gray-200" />
          <MyPageButton to="/mypage/comment">내 댓글</MyPageButton>
          <hr className="my-2 border-gray-200" />
          <MyPageButton to="/mypage/bookmarked">내 북마크</MyPageButton>
          <hr className="my-2 border-gray-200" />
          <MyPageButton to="/mypage/change-info">내 정보 변경</MyPageButton>
        </div>
        <div className="mt-4">
          <MypagePhrase />
        </div>
      </main>
    </>
  );
}

export default MyPageNav;
