import React from 'react';

import NavBar from '../components/navigation/main-navigation';

function ErrorPage() {
  return (
    <>
      <NavBar />
      <main className="flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="p-12 text-5xl font-bold text-red-900">
            에러가 발생했습니다!
          </h1>
          <p className="text-lg text-red-600">페이지를 찾을 수 없습니다.</p>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
