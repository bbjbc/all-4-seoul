import React from 'react';

import Typewriter from 'typewriter-effect';

import SectionAnime from './section-animation';
import SectionContents from './section-contents';

function Section() {
  return (
    <>
      {/* 섹션 0 */}
      <div className="relative mt-12 flex min-h-screen flex-col items-center justify-center">
        <section className="absolute inset-0 ml-40 flex items-center">
          <div className="w-1/2 text-left">
            <Typewriter
              options={{
                strings: [
                  '<h1 class="text-7xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white"><Strong>All 4 Seoul</Strong>에 </br>오신 것을 </br>환영합니다</h1>',
                ],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
              }}
            />
          </div>
        </section>
      </div>

      {/* 섹션 컴포넌트 */}
      {SectionContents.map((section, index) => (
        <SectionAnime key={index}>
          <div className="relative mt-20 flex min-h-screen flex-col">
            <section className="mb-20 flex flex-col">
              <div
                className={`flex flex-wrap justify-center overflow-hidden ${index === 0 || index === 2 ? 'flex-row-reverse' : ''}`}
              >
                <div className="mx-20 max-w-lg flex-grow p-4 text-white">
                  <h3 className="my-20 text-left text-6xl font-semibold leading-tight">
                    {section.title}
                  </h3>
                  <p className="text-left text-xl leading-normal">
                    {section.description}
                  </p>
                </div>
                <div className="mb-8 max-w-lg flex-grow overflow-hidden">
                  <img
                    src={section.image}
                    alt={`섹션 ${index + 1}`}
                    className="max-h-200 max-w-200 h-auto rounded-2xl"
                  />
                </div>
              </div>
            </section>
          </div>
        </SectionAnime>
      ))}
    </>
  );
}

export default Section;
