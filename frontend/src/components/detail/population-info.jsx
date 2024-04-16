import React from 'react';

import BarGraph from './bar-graph';
import DummyData from './dummy-data';
import { PiPersonArmsSpreadDuotone } from 'react-icons/pi';

import propTypes from 'prop-types';

function PopulationInfo({ populationRef }) {
  return (
    <article ref={populationRef} className="w-full">
      <h1 className="my-5 rounded-lg bg-white p-3 text-3xl font-extrabold shadow-sm">
        <div className="flex flex-row justify-center space-x-5">
          <PiPersonArmsSpreadDuotone size={30} />
          <span>인구 예측 정보</span>
        </div>
      </h1>
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <h3 className="mb-4 p-2 text-2xl font-semibold">실시간 및 예측 정보</h3>
        <BarGraph data={DummyData} />
      </div>
    </article>
  );
}

PopulationInfo.propTypes = {
  populationRef: propTypes.object.isRequired,
};

export default PopulationInfo;
