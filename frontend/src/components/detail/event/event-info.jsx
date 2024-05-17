import React from 'react';

import propTypes from 'prop-types';

function EventInfo({ titleName, culture }) {
  return (
    <div className="mt-4 text-xs">
      <p className="font-semibold">{titleName}</p>
      <p className="rounded-md bg-green-100 p-2 shadow-sm">
        {culture || '정보가 없습니다.'}
      </p>
    </div>
  );
}

EventInfo.propTypes = {
  titleName: propTypes.string.isRequired,
  culture: propTypes.string,
};

export default EventInfo;
