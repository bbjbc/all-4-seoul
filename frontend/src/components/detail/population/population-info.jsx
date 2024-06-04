import React from 'react';

import propTypes from 'prop-types';

import BarGraph from './bar-graph';
import {
  generateTime,
  getDifferenceWithCurrentHour,
  getMaxPopulationTimeAndMaxPopulation,
} from './calc-func';
import populationInfo from '../../../assets/detail-background/info.jpg';
import { IoMdTimer } from 'react-icons/io';

function PopulationInfo({ populationRef, data = [] }) {
  const timeData = generateTime(data);
  const { maxPopulationTime, maxPopulation, maxCongestLevel } =
    getMaxPopulationTimeAndMaxPopulation(data) || {
      maxPopulationTime: '데이터 없음',
      maxPopulation: '데이터 없음',
      maxCongestLevel: '데이터 없음',
    };

  const currentTime =
    data.length > 0 && data[0].populationTime
      ? data[0].populationTime
      : '데이터 없음';

  return (
    <main className="relative h-full w-full" ref={populationRef}>
      <img
        src={populationInfo}
        alt={populationInfo}
        className="absolute z-0 h-full w-full object-cover opacity-65"
      />
      <section className="flex items-center justify-center gap-10 pl-40 pr-16">
        <article className="relative top-32 z-10 h-auto w-2/3 rounded-lg bg-white p-5 shadow-lg">
          <p className="text-sm text-gray-700">※ {currentTime} 기준</p>
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
                {maxPopulationTime}시(
                {getDifferenceWithCurrentHour(data)} 시간 후)
              </span>
              <span>
                에 인구가 제일 많고 혼잡도도 가장 높을 것으로 예상돼요.
                혼잡정도는{' '}
                <span className="text-lg font-bold text-orange-800">
                  {maxCongestLevel}
                </span>
                일 것으로 예상돼요.
              </span>
            </p>
            <p className="p-3 text-base text-gray-600">
              인구 수는 {maxPopulation}명으로 예측돼요.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

PopulationInfo.propTypes = {
  populationRef: propTypes.object.isRequired,
  data: propTypes.array,
};

export default PopulationInfo;
