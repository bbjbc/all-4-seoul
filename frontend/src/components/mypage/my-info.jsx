import React from 'react';

import { useUser } from '../../state/user-context';

function MyInfoPage() {
  const { userInfo } = useUser();

  const birthDate = userInfo ? new Date(userInfo.birth) : null;

  const formatDate = (date) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <div className="relative z-10 flex w-full animate-slidein flex-col items-center justify-center">
      <div className="my-10 flex h-[500px] w-full flex-col items-center justify-start overflow-y-auto rounded-xl bg-white py-4 shadow-lg">
        <h2 className="my-5 ml-5 text-right text-3xl font-semibold">
          기본 정보
        </h2>
        {userInfo ? (
          <table className="mt-6 w-full table-fixed text-lg">
            <tbody>
              <tr className="border-b">
                <td className="py-3">ID :</td>
                <td className="py-3 text-left">{userInfo.id}</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Name :</td>
                <td className="py-3 text-left">{userInfo.name}</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">BIRTH :</td>
                <td className="py-3 text-left">{formatDate(birthDate)}</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">MBTI :</td>
                <td className="py-3 text-left">{userInfo.mbti}</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">GENDER :</td>
                <td className="py-3 text-left">{userInfo.gender}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p className="text-lg">로그인이 필요합니다.</p>
        )}
      </div>
    </div>
  );
}

export default MyInfoPage;
