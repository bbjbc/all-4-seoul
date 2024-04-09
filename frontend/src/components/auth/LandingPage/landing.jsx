/* eslint-disable prettier/prettier */
import React from 'react';

function Landing() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* header */}
      <header className="py-4 text-center text-black">
        <h1 className="text-4xl font-bold">제목</h1>
        <h2 className="mt-2 text-xl">부제목</h2>
      </header>

      {/* section */}
      <section className="flex flex-col items-center justify-center">
        <h2 className="mt-8 text-2xl">섹션 1</h2>
        <div className="max-w-lg p-4 border rounded-lg shadow-lg t-4">
          <h3 className="mb-2 text-xl font-semibold">섹션 내부 기사 1</h3>
          <p>This is the content of Article 1.</p>
        </div>
        <div className="max-w-lg p-4 border rounded-lg shadow-lg t-4">
          <h3 className="mb-2 text-xl font-semibold">섹션 내부 기사 2</h3>
          <p>This is the content of Article 2.</p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <h2 className="mt-8 text-2xl">섹션 2</h2>
        <div className="max-w-lg p-4 border rounded-lg shadow-lg t-4">
          <h3 className="mb-2 text-xl font-semibold">섹션 내부 기사 1</h3>
          <p>This is the content of Article 1.</p>
        </div>
        <div className="max-w-lg p-4 border rounded-lg shadow-lg t-4">
          <h3 className="mb-2 text-xl font-semibold">섹션 내부 기사 2</h3>
          <p>This is the content of Article 2.</p>
        </div>
      </section>

      {/* aside */}
      <aside className="p-4 text-center text-black">
        <h2 className="mb-2 text-lg font-semibold">ASIDE</h2>
        <p>ASIDE</p>
      </aside>

      {/* footer */}
      <footer className="py-4 text-center text-black">
        <p>&copy; Footer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;
