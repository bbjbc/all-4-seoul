import React from 'react';

import PropTypes from 'prop-types';

import { FaUserCircle } from 'react-icons/fa';
import MyPageButton from './mypage-button';
import MypagePhrase from './mypage-phrase';

function MyPageNav({ username }) {
  return (
    <>
      <main className="relative z-10 rounded-lg bg-white p-4 py-10 shadow-2xl">
        <div className="mb-4 flex flex-col items-center gap-4">
          <FaUserCircle className="mr-2 text-3xl" size={70} />
          <div className="font-gmarketbold text-xl">{username}</div>
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

MyPageNav.propTypes = {
  username: PropTypes.string.isRequired,
};

export default MyPageNav;
