import React from 'react';

import propTypes from 'prop-types';

import PieGenderGraph from './pie-gender-graph';
import image1 from '../../../assets/congestion/여유.jpg';
import image2 from '../../../assets/congestion/보통.jpg';
import image3 from '../../../assets/congestion/약간붐빔.jpg';
import image4 from '../../../assets/congestion/붐빔.jpg';
import populationImg from '../../../assets/detail-background/population.jpg';
import { IoMdTimer } from 'react-icons/io';
import { TbMessage2 } from 'react-icons/tb';
import { generateGenderPieData } from './gender-data';

function RealTimePopulation({ name, realtimeRef, data = [] }) {
  let congestionImage = '';
  let congestionDescription = '';

  if (data.length > 0) {
    const areaCongestLevel = data[0].areaCongestLevel;
    const areaCongestMessage = data[0].areaCongestMessage;

    switch (areaCongestLevel) {
      case '여유':
        congestionImage = image1;
        congestionDescription = areaCongestMessage;
        break;
      case '보통':
        congestionImage = image2;
        congestionDescription = areaCongestMessage;
        break;
      case '약간 붐빔':
        congestionImage = image3;
        congestionDescription = areaCongestMessage;
        break;
      case '붐빔':
        congestionImage = image4;
        congestionDescription = areaCongestMessage;
        break;
      default:
        congestionImage = '';
        congestionDescription = '인구 혼잡도 정보를 가져올 수 없습니다.';
    }
  } else {
    congestionDescription = '인구 혼잡도 정보를 가져올 수 없습니다.';
  }

  const genderData = generateGenderPieData(data);

  return (
    <main ref={realtimeRef} className="relative h-full w-full">
      <img
        src={populationImg}
        alt={populationImg}
        className="absolute z-0 h-full w-full object-cover opacity-55"
      />
      <section className="z-10 flex min-h-screen">
        <article className="z-10 flex w-6/12 items-center pl-40">
          <div className="flex w-96 flex-col items-center justify-center rounded-lg bg-white p-3 text-left shadow-md">
            {/* 현재 성별에 따른 비율 */}
            <h1 className="mb-1 flex flex-row justify-center gap-3 text-xl font-bold text-gray-800">
              <IoMdTimer size={26} />
              <span>현재 성별에 따른 비율</span>
            </h1>
            <div className="border-b border-gray-300">
              <PieGenderGraph data={genderData} />
            </div>

            {/* 현재 혼잡도 설명 */}
            <h1 className="mb-1 flex flex-row justify-center gap-3 pt-4 text-xl font-bold text-gray-800">
              <TbMessage2 size={26} />
              <span>현재 혼잡도 설명</span>
            </h1>
            <p className="text-md p-3 text-center text-gray-600">
              {congestionDescription}
            </p>
          </div>
        </article>

        <article className="relative flex flex-1">
          <div className="absolute right-20 top-14 mr-14 mt-12 flex w-full flex-col justify-center gap-7 rounded-lg bg-white p-8 shadow-lg">
            <div className="flex flex-row justify-center gap-3">
              <h1 className="text-3xl font-bold">
                {new Date().toLocaleTimeString()} 기준
              </h1>
              <p className="font-gmarketbold text-5xl text-lime-500">{name}</p>
            </div>
            <img
              src={congestionImage}
              alt={data[0]?.areaCongestLevel || '정보 없음'}
              className="h-full w-full"
            />
            <p className="text-4xl font-bold">
              인구혼잡도
              <span className="ml-4 text-orange-500">
                {data[0]?.areaCongestLevel || '정보 없음'}
              </span>
            </p>
            <div className="rounded-lg bg-amber-100 p-4 text-left">
              ※ 혼잡도는 통신사의 실시간 인구 데이터를 분석하여 가공한 것으로,
              실제 현장과는 차이가 있을 수 있음을 알려드립니다.
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

RealTimePopulation.propTypes = {
  name: propTypes.string.isRequired,
  realtimeRef: propTypes.object.isRequired,
  data: propTypes.array,
};

export default RealTimePopulation;
