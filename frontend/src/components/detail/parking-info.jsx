import React from 'react';

import propTypes from 'prop-types';

function ParkingInfo({ parkingRef }) {
  return (
    <div className="rounded-xl bg-gray-100 p-4" ref={parkingRef}>
      <h2 className="mb-2 text-lg font-semibold">주차장 정보</h2>

      <p>주차 가능한 공간이 있습니다.</p>
    </div>
  );
}

ParkingInfo.propTypes = {
  parkingRef: propTypes.object.isRequired,
};

export default ParkingInfo;
