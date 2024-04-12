import React from 'react';
import Footer from './footer';
import Header from './header';

import Typewriter from 'typewriter-effect';

import 서울0 from '../../../assets/landingpage/서울0.jpg';
import 서울1 from '../../../assets/landingpage/서울1.png';
import 서울2 from '../../../assets/landingpage/서울2.png';
import 서울3 from '../../../assets/landingpage/서울3.jpg';
import 서울4 from '../../../assets/landingpage/서울4.jpg';

function Landing() {
  const sections = [
    { title: '섹션 0', image: 서울0 },
    { title: '섹션 1', image: 서울1 },
    { title: '섹션 2', image: 서울2 },
    { title: '섹션 3', image: 서울3 },
    { title: '섹션 4', image: 서울4 },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      <Header />

      <div className="flex flex-col justify-between">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`section mt-12 flex flex-col items-center justify-center`}
            style={{ minHeight: `100vh` }} // 헤더의 높이를 고려하여 섹션의 최소 높이를 조정
          >
            {index === 0 ? (
              <section
                className="relative flex flex-col items-center justify-center text-center"
                style={{
                  backgroundImage: `url(${section.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.8, // 투명도
                  color: '#ffffff',
                  height: '100%',
                  width: '100%',
                }}
              >
                <div className="absolute left-0 ml-60 w-1/2 text-left">
                  <Typewriter
                    className=""
                    options={{
                      strings: [
                        '<h1 class="mb-6 text-7xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"><Strong>All 4 Seoul</Strong>에 </br>오신 것을 </br>환영합니다</h1>',
                      ],
                      autoStart: true,
                      loop: true,
                      skipAddStyles: true,
                      wrapperClassName: 'typing-wrapper',
                      cursorClassName: 'typing-cursor',
                    }}
                  />

                  {/* <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          '<h1 class="mb-6 text-7xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">All 4 Seoul에</h1>',
                        )
                        .pauseFor(100)
                        .typeString(
                          '<h1 class="mb-6 text-7xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">오신 것을</h1>',
                        )
                        .pauseFor(100)
                        .typeString(
                          '<h1 class="mb-6 text-7xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">환영합니다</h1>',
                        )

                        .start()
                        .pauseFor(100)
                        .callFunction(function (state) {
                          state.elements.cursor.style.display = 'none';
                        });
                    }}
                  /> */}
                </div>
              </section>
            ) : (
              // 섹션0이 아니면, 일반적인 섹션 형식을 유지
              <section
                className="mt-12 flex flex-col items-center justify-center"
                style={{ minHeight: `calc(100vh - 50px - 6rem)` }} // 6rem = Header와 Footer의 높이 합
              >
                <h2 className="text-4xl font-bold">{section.title}</h2>
                <div
                  className={`t-4 flex flex-wrap justify-center rounded-lg border p-4 shadow-lg ${
                    index % 2 !== 0 ? 'flex-row-reverse' : ''
                  }`}
                  style={{ maxWidth: '100%', minWidth: '300px' }} // 최소, 최대 너비 설정
                >
                  <div className="mx-2 mb-4 max-w-lg flex-grow rounded-lg border p-4 shadow-lg">
                    <h3 className="mb-2 text-xl font-semibold">
                      여기다가 제목이나 부제목 적어야징
                    </h3>
                    <p>여긴 내용 들어가야징</p>
                  </div>
                  <div className="mx-2 mb-4 max-w-lg flex-grow rounded-lg border p-4 shadow-lg">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="max-h-300 max-w-150 z-0 h-auto"
                    />
                  </div>
                </div>
              </section>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
