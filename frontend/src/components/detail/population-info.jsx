import React from 'react';

import propTypes from 'prop-types';

import BarGraph from './bar-graph';
import { generateTime } from './dummy-data';
import populationInfo from '../../assets/detail-background/info.jpg';
import { IoMdTimer } from 'react-icons/io';
import { RxCountdownTimer } from 'react-icons/rx';

function PopulationInfo({ populationRef }) {
  const {
    timeData,
    futureMaxPopulation,
    futureMaxHour,
    pastMaxPopulation,
    pastMaxHour,
    futureHourDiff,
    pastHourDiff,
  } = generateTime();

  return (
    <main className="relative h-full w-full" ref={populationRef}>
      <img
        src={populationInfo}
        alt={populationInfo}
        className="absolute z-0 h-full w-full object-cover opacity-65"
      />
      <section className="flex items-center justify-center gap-10 pl-40 pr-16">
        <article className="relative top-32 z-10 h-auto w-2/3 rounded-lg bg-white p-5 shadow-lg">
          <p className="text-sm text-gray-700">
            ※ {new Date().toLocaleTimeString()} 기준
          </p>
          <h3 className="my-5 p-2 text-2xl font-extrabold text-indigo-800">
            실시간 인구 및 혼잡도 추이 전망
          </h3>
          <BarGraph data={timeData} />
        </article>
        <article className="relative top-32 z-10 h-auto w-1/3 rounded-lg bg-white p-5 shadow-lg">
          <div className="mb-6 rounded-lg p-3 transition-all duration-200 ease-in-out hover:bg-blue-100">
            <h1 className="mb-2 flex flex-row justify-center gap-3 text-2xl font-bold text-gray-800">
              <IoMdTimer size={30} />
              <span>향후 12시간 전망</span>
            </h1>
            <p className="text-left">
              <span className="text-lg text-blue-700">
                {futureMaxHour}({futureHourDiff}
                시간 후)
              </span>
              <span>
                에 인구가 제일 많고 혼잡도도 가장 높을 것으로 예상돼요.
                혼잡정도는 붐빔일 것으로 예상돼요.
              </span>
            </p>
            <p className="p-3 text-base text-gray-600">
              인구 수는 {futureMaxPopulation}명으로 예측돼요.
            </p>
          </div>
          <div className="rounded-lg p-3 transition-all duration-200 ease-in-out hover:bg-orange-100">
            <h1 className="mb-2 flex flex-row justify-center gap-3 text-2xl font-bold text-gray-800">
              <RxCountdownTimer size={30} />
              <span>지난 12시간 추이</span>
            </h1>
            <p className="text-left">
              <span className="text-lg text-orange-700">
                {pastMaxHour}({pastHourDiff}시간 전)
              </span>
              <span>
                에 인구가 제일 많았고 혼잡도도 가장 높았어요. 혼잡정도는 약간
                붐빔이었어요.
              </span>
            </p>
            <p className="p-3 text-base text-gray-600">
              최대 인구수는 {pastMaxPopulation}명이었어요.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

PopulationInfo.propTypes = {
  populationRef: propTypes.object.isRequired,
};

export default PopulationInfo;
