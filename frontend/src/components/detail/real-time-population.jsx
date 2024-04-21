import React from 'react';

import propTypes from 'prop-types';

import image1 from '../../assets/congestion/여유.jpg';
import image2 from '../../assets/congestion/보통.jpg';
import image3 from '../../assets/congestion/약간붐빔.jpg';
import image4 from '../../assets/congestion/붐빔.jpg';
import populationImg from '../../assets/detail-background/population.jpg';

function RealTimePopulation({ name, congestionLevel, realtimeRef }) {
  let congestionImage, congestionDescription;
  switch (congestionLevel) {
    case '여유':
      congestionImage = image1;
      congestionDescription = `
        사람이 몰려있을 가능성이 낮고 붐빔은 거의 느껴지지 않아요. \n
        도보 이동이 자유로워요. \n
        특정지역에 인구가 집중되어 있을 수 있어요.\n
        인구가 집중된 지역은 우측의 지도에서 히트맵을 통해 확인해주세요.
      `;
      break;
    case '보통':
      congestionImage = image2;
      congestionDescription = `
        사람이 몰려있을 수 있지만 크게 붐비지는 않아요.\n
        도보 이동에 큰 제약이 없어요.\n
        특정지역에 인구가 집중되어 있을 수 있어요.\n
        인구가 집중된 지역은 우측의 지도에서 히트맵을 통해 확인해주세요.
      `;
      break;
    case '약간 붐빔':
      congestionImage = image3;
      congestionDescription = `
        사람들이 몰려있을 가능성이 크고 붐빈다고 느낄 수 있어요.\n
        인구밀도가 높은 구간에서는 도보 이동시 부딪힘이 발생할 수 있어요.\n
        특정지역에 인구가 집중되어 있을 수 있어요. 인구가 집중된 지역은 우측의 지도에서 히트맵을 통해 확인해주세요.
      `;
      break;
    case '붐빔':
      congestionImage = image4;
      congestionDescription = `
        사람들이 몰려있을 가능성이 매우 크고 많이 붐빈다고 느낄 수 있어요.\n
        인구밀도가 높은 구간에서는 도보 이동시 부딪힘이 발생할 수 있어요.\n
        특정지역에 인구가 집중되어 있을 수 있어요.\n 
        인구가 집중된 지역은 우측의 지도에서 히트맵을 통해 확인해주세요.
      `;
      break;
    default:
      congestionImage = '';
      congestionDescription = '인구 혼잡도 정보를 가져올 수 없습니다.';
  }

  return (
    <main ref={realtimeRef} className="relative h-full w-full">
      <img
        src={populationImg}
        alt={populationImg}
        className="absolute z-0 h-full w-full object-cover opacity-55"
      />
      <section className="z-10 flex min-h-screen">
        <article className="z-10 flex w-6/12 items-center pl-40">
          <div className="w-96 space-y-6 text-left">
            {congestionDescription.split('\n').map((line, index) => (
              <p key={index} className="text-2xl font-semibold text-stone-700">
                {line}
              </p>
            ))}
          </div>
        </article>

        <article className="relative flex flex-1">
          <div className="absolute right-20 top-14 mr-14 mt-12 flex w-full flex-col justify-center gap-7 rounded-lg bg-white p-8 shadow-lg">
            <h1 className="text-3xl font-bold">
              {new Date().toLocaleTimeString()} 기준
            </h1>
            <p className="font-gmarketbold text-5xl text-lime-500">{name}</p>
            <img
              src={congestionImage}
              alt={congestionLevel}
              className="h-full w-full"
            />
            <p className="text-4xl font-bold">
              인구혼잡도
              <span className="ml-4 text-orange-500">{congestionLevel}</span>
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
  congestionLevel: propTypes.string.isRequired,
  realtimeRef: propTypes.object.isRequired,
};

export default RealTimePopulation;
