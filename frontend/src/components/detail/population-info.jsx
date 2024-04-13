import React from 'react';

import propTypes from 'prop-types';

function PopulationInfo({ populationRef }) {
  return (
    <div className="rounded-xl bg-gray-100 p-4" ref={populationRef}>
      <h3 className="text-md mb-2 font-semibold">실시간 인구정보</h3>
    </div>
  );
}

PopulationInfo.propTypes = {
  populationRef: propTypes.object.isRequired,
};

export default PopulationInfo;
