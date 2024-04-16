import React from 'react';

import propTypes from 'prop-types';

function CultureEvent({ cultureRef }) {
  return (
    <div className="rounded-xl bg-gray-100 p-4" ref={cultureRef}>
      <h3 className="text-md mb-2 font-semibold">문화행사 정보</h3>
    </div>
  );
}

CultureEvent.propTypes = {
  cultureRef: propTypes.object.isRequired,
};

export default CultureEvent;
