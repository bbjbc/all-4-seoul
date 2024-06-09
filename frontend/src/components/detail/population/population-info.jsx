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
import { FaPerson } from 'react-icons/fa6';
import PiePopulationGraph from './pie-population-graph';
import { generatePieData } from './pie-data';

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

  const currentTimeHour = parseInt(currentTime.split(' ')[1].split(':')[0], 10);

  // 실시간 인구 나이 비율 데이터 생성
  const pieData = generatePieData(data);

  return (
    <main className="relative h-full w-full" ref={populationRef}>
      <img
        src={populationInfo}
        alt={populationInfo}
        className="absolute z-0 h-full w-full object-cover opacity-65"
      />
      <section className="flex items-center justify-center gap-10 pl-40 pr-16">
        <article className="relative top-28 z-10 h-auto w-2/3 rounded-lg bg-white p-5 shadow-lg">
          <p className="text-sm text-gray-700">※ {currentTime} 기준</p>
          <h3 className="my-5 p-2 text-2xl font-extrabold text-indigo-800">
            실시간 인구 및 혼잡도 추이 전망
          </h3>
          <BarGraph data={timeData} />
        </article>

        <article className="relative top-28 z-10 h-auto w-1/3 rounded-lg bg-white p-3 shadow-lg">
          <div className="rounded-t-lg border-b border-b-gray-500 p-3">
            <h1 className="mb-1 flex flex-row justify-center gap-3 text-xl font-bold text-gray-800">
              <IoMdTimer size={26} />
              <span>향후 12시간 전망</span>
            </h1>
            <p className="text-left">
              <span className="text-lg text-blue-700">
                {maxPopulationTime === currentTimeHour
                  ? '현재'
                  : `${maxPopulationTime}시 (${getDifferenceWithCurrentHour(data)} 시간 후)`}
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
            <p className="pt-3 text-base text-gray-600">
              인구 수는 {maxPopulation}명으로 예측돼요.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-1 flex flex-row justify-center gap-3 pt-4 text-xl font-bold text-gray-800">
              <FaPerson size={26} />
              <span>현재 인구 나이 별 비율</span>
            </h1>
            <PiePopulationGraph data={pieData} />
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
