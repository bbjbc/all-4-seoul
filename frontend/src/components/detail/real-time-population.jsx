import React from 'react';

import propTypes from 'prop-types';

import image1 from '../../assets/congestion/여유.jpg';
import image2 from '../../assets/congestion/보통.jpg';
import image3 from '../../assets/congestion/약간붐빔.jpg';
import image4 from '../../assets/congestion/붐빔.jpg';

function RealTimePopulation({ name, congestionLevel }) {
  let congestionImage, congestionDescription;
  switch (congestionLevel) {
    case '여유':
      congestionImage = image1;
      congestionDescription = `
        사람이 몰려있을 가능성이 낮고 붐빔은 거의 느껴지지 않아요. \n
        도보 이동이 자유로워요. \n
        특정지역에 인구가 집중되어 있을 수 있어요. 인구가 집중된 지역은 우측의 지도에서 히트맵을 통해 확인해주세요.
      `;
      break;
    case '보통':
      congestionImage = image2;
      congestionDescription = `
        사람이 몰려있을 수 있지만 크게 붐비지는 않아요.\n
        도보 이동에 큰 제약이 없어요. \n
        특정지역에 인구가 집중되어 있을 수 있어요. 인구가 집중된 지역은 우측의 지도에서 히트맵을 통해 확인해주세요.
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
        특정지역에 인구가 집중되어 있을 수 있어요. 인구가 집중된 지역은 우측의 지도에서 히트맵을 통해 확인해주세요.
      `;
      break;
    default:
      congestionImage = '';
      congestionDescription = '인구 혼잡도 정보를 가져올 수 없습니다.';
  }

  return (
    <div className="mx-auto flex flex-col justify-center rounded-lg bg-white p-10 shadow-lg">
      <p className="text-sm text-gray-500">
        {new Date().toLocaleTimeString()} 기준
      </p>
      <h1 className="mb-4 p-2 text-2xl font-semibold">
        <span className="text-blue-600">{name}</span> &nbsp;
        <span>실시간 인구 현황</span>
      </h1>
      <div className="mb-4 flex flex-col items-center justify-between rounded-lg">
        <p className="pb-4 text-xl font-semibold">
          인구혼잡도 <span className="text-orange-600">{congestionLevel}</span>
        </p>
        <div className="flex items-center space-x-4">
          <img
            src={congestionImage}
            alt={congestionLevel}
            className="h-auto w-auto"
          />
        </div>
      </div>
      <p className="text-gray-500">{congestionDescription}</p>
    </div>
  );
}

RealTimePopulation.propTypes = {
  name: propTypes.string.isRequired,
  congestionLevel: propTypes.string.isRequired,
};

export default RealTimePopulation;
