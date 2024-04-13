import React from 'react';

import propTypes from 'prop-types';

function WeatherInfo({ weatherRef }) {
  return (
    <div className="rounded-xl bg-gray-100 p-4" ref={weatherRef}>
      <h3 className="text-md mb-2 font-semibold">날씨정보</h3>
      <div className="flex items-center justify-center space-x-4">
        <div className="flex flex-col items-center">
          <img
            src="https://www.weatherbit.io/static/img/icons/r01d.png"
            alt="weather"
          />
          <p>맑음</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://www.weatherbit.io/static/img/icons/r01d.png"
            alt="weather"
          />
          <p>맑음</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://www.weatherbit.io/static/img/icons/r01d.png"
            alt="weather"
          />
          <p>맑음</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://www.weatherbit.io/static/img/icons/r01d.png"
            alt="weather"
          />
          <p>맑음</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://www.weatherbit.io/static/img/icons/r01d.png"
            alt="weather"
          />
          <p>맑음</p>
        </div>
      </div>
    </div>
  );
}

WeatherInfo.propTypes = {
  weatherRef: propTypes.object.isRequired,
};

export default WeatherInfo;
