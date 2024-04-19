import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from './footer';
import Header from './header';
import Typewriter from 'typewriter-effect';
import s0 from '../../assets/landingpage/서울0.jpg';
import s1 from '../../assets/landingpage/서울1.png';
import s2 from '../../assets/landingpage/서울2.png';
import s3 from '../../assets/landingpage/서울3.jpg';
import s4 from '../../assets/landingpage/서울4.jpg';
import { motion, useAnimation } from 'framer-motion'; // useAnimation import 추가
import { useInView } from 'react-intersection-observer';

function Section({ children }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 250 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-cols-1">
      <Header />
      <div className="relative">
        <div
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-80"
          style={{
            backgroundImage: `url(${s0})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        {/* 섹션 0 */}
        <div className="relative mt-12 flex min-h-screen flex-col items-center justify-center">
          <section>
            <div className="absolute inset-0 ml-40 flex items-center">
              <div className="w-1/2 text-left">
                <Typewriter
                  className=""
                  options={{
                    strings: [
                      '<h1 class="text-7xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white"><Strong>All 4 Seoul</Strong>에 </br>오신 것을 </br>환영합니다</h1>',
                    ],
                    autoStart: true,
                    loop: true,
                    skipAddStyles: true,
                    wrapperClassName: 'typing-wrapper',
                    cursorClassName: 'typing-cursor',
                  }}
                />
              </div>
            </div>
          </section>
        </div>

        {/* 섹션 1 */}
        <Section>
          <div className="relative mt-20 flex min-h-screen flex-col">
            <section className="mb-20 flex flex-col ">
              <div className="flex flex-wrap justify-center overflow-hidden">
                <div className="mx-20 max-w-lg flex-grow p-4 text-white">
                  <h3 className="my-20 text-left text-6xl font-semibold leading-tight">
                    서울의 <br />
                    핫플레이스 <br />
                    알려드림
                  </h3>
                  <p className="text-left text-xl leading-normal">
                    서울의 유명한 핫플레이스들의 <br />
                    각종 정보들을 제공합니다
                    <br />
                    여러분들이 방문하고싶거나 알아보고 싶은 <br />
                    서울의 핫플을 직접 찾아볼 수 있습니다
                  </p>
                </div>
                <div className="mb-8 max-w-lg flex-grow overflow-hidden">
                  <img
                    src={s1}
                    alt="섹션 1"
                    className="max-h-200 max-w-200 h-auto rounded-lg"
                  />
                </div>
              </div>
            </section>
          </div>
        </Section>

        {/* 섹션 2 */}
        <Section>
          <div className="relative mt-20 flex min-h-screen flex-col">
            <section className="mb-20 flex flex-col">
              <div className="flex flex-row-reverse flex-wrap justify-center overflow-hidden">
                <div className="mx-20 max-w-lg flex-grow p-4 text-white">
                  <h3 className="my-20 text-left text-6xl font-semibold leading-tight">
                    복잡하지 않을까? <br />
                    걱정 NO NO
                  </h3>
                  <p className="text-left text-xl leading-normal">
                    각 장소들에 대해 실시간으로 <br />
                    인구수와 혼잡도 정보를 제공함으로 <br />
                    사용자 여러분들에게 편의를 만족시킵니다
                  </p>
                </div>
                <div className="mx-20 mb-8 max-w-lg overflow-hidden">
                  <img
                    src={s2}
                    alt="섹션 2"
                    className="max-h-200 max-w-200 rounded-lg"
                  />
                </div>
              </div>
            </section>
          </div>
        </Section>

        {/* 섹션 3 */}
        <Section>
          <div className="relative mt-20 flex min-h-screen flex-col">
            <section className="mb-20 flex flex-col">
              <div className="over flow-hidden flex flex-wrap justify-center text-center">
                <div className="mx-20 max-w-lg flex-grow p-4 text-white">
                  <h3 className="my-20 text-left text-6xl font-semibold leading-tight">
                    주차장 주유소
                    <br />
                    어쩌지? <br />
                    알려드림
                  </h3>
                  <p className="text-left text-xl leading-normal">
                    문화시설 및 관광명소들과 내가 가려는 곳 주변 <br />
                    주차장, 주유소는 어디있는지 모두 알려드립니다 <br />
                    서울 어디든 가고 싶은 곳을 편하게 찾을 수 있습니다
                  </p>
                </div>
                <div className="mx-20 mb-8 max-w-lg overflow-hidden">
                  <img
                    src={s3}
                    alt="섹션 3"
                    className="max-h-200 max-w-200 rounded-lg"
                  />
                </div>
              </div>
            </section>
          </div>
        </Section>

        {/* 섹션 4 */}
        <Section>
          <div className="relative mt-20 flex min-h-screen flex-col">
            <section className="mb-20 flex flex-col">
              <div className="flex flex-row-reverse justify-center overflow-hidden">
                <div className="mx-20 max-w-lg flex-grow p-4 text-white">
                  <h3 className="my-20 text-left text-6xl font-semibold leading-tight">
                    날씨까지? <br />
                    알려드림
                  </h3>
                  <p className="text-left text-xl leading-normal">
                    각종 장소들의 날씨도 알려드립니다
                    <br />
                    편하게 정보들을 찾아보세요
                  </p>
                </div>
                <div className="mx-20 mb-8 max-w-lg flex-grow overflow-hidden">
                  <img
                    src={s4}
                    alt="섹션 4"
                    className="max-h-200 max-w-200 rounded-lg"
                  />
                </div>
              </div>
            </section>
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
