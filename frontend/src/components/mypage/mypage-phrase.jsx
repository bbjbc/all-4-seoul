import React from 'react';

function MypagePhrase() {
  const message = `
  올포서울은 서울시의 다양한 정보를 제공하는 사이
  트입니다. 사용자의 편의를 위해 노력하겠습니다.
  `;

  return (
    <>
      <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="text-md mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
            올포서울에 오신 것을 환영합니다!
          </h5>
          <p className="mb-3 whitespace-pre-line text-sm font-normal text-gray-700 dark:text-gray-400">
            {message}
          </p>
        </div>
      </div>
    </>
  );
}

export default MypagePhrase;
