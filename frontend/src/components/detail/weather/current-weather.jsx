import React from 'react';

import propTypes from 'prop-types';

import { TiWeatherPartlySunny } from 'react-icons/ti';

function CurrentWeather({ weatherData }) {
  return (
    <main className="mb-6">
      <div className="grid grid-cols-2 rounded-md bg-zinc-100 p-4 shadow-md">
        <p className="flex items-center justify-center gap-4 font-gmarketbold text-5xl">
          <TiWeatherPartlySunny size={90} className="text-sky-500" />
          <span>{weatherData.temperature}℃</span>
        </p>
        <div className="flex flex-col items-start justify-center gap-4 px-20">
          <span className="text-lg font-semibold">
            {`체감 기온 `}
            <span className="ml-4 text-2xl text-red-700">
              {weatherData.feelsLike}℃
            </span>
          </span>
          <span className="text-lg font-semibold">
            {`미세 `}
            <span className="ml-4 text-2xl text-orange-300">
              {weatherData.dust}
            </span>
          </span>
          <span className="text-lg font-semibold">
            {`초미세 `}
            <span className="ml-4 text-2xl text-orange-500">
              {weatherData.microDust}
            </span>
          </span>
        </div>
      </div>
    </main>
  );
}

CurrentWeather.propTypes = {
  weatherData: propTypes.object.isRequired,
};

export default CurrentWeather;
