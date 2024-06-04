import React from 'react';

import propTypes from 'prop-types';

function EventInfo({ titleName, culture, className }) {
  return (
    <div className="mt-4 text-xs">
      <p className="font-semibold">{titleName}</p>
      {titleName === '링크' ? (
        <p className="rounded-md bg-green-100 p-2 shadow-sm">
          <a
            className={`break-all ${className}`}
            href={culture}
            target="_blank"
            rel="noreferrer"
          >
            {culture || '정보가 없습니다.'}
          </a>
        </p>
      ) : (
        <p className={`rounded-md bg-green-100 p-2 shadow-sm ${className}`}>
          {culture || '정보가 없습니다.'}
        </p>
      )}
    </div>
  );
}

EventInfo.propTypes = {
  titleName: propTypes.string.isRequired,
  culture: propTypes.string,
  className: propTypes.string,
};

export default EventInfo;
