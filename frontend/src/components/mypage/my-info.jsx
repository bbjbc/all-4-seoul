import React from 'react';

function MyInfoPage() {
  const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

  // 생일을 날짜 객체로 변환
  const birthDate = storedUserInfo ? new Date(storedUserInfo.birth) : null;

  // 날짜 객체를 "년-월-일" 형식으로 변환
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
        {storedUserInfo ? (
          <table className="mt-6 w-full table-fixed text-lg">
            <tbody>
              <tr className="border-b">
                <td className="py-3">ID :</td>
                <td className="py-3 text-left">{storedUserInfo.id}</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Name :</td>
                <td className="py-3 text-left">{storedUserInfo.name}</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">BIRTH :</td>
                <td className="py-3 text-left">{formatDate(birthDate)}</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">MBTI :</td>
                <td className="py-3 text-left">{storedUserInfo.mbti}</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">GENDER :</td>
                <td className="py-3 text-left">{storedUserInfo.gender}</td>
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
