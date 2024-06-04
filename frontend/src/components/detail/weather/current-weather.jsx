import React from 'react';
import propTypes from 'prop-types';
import { TiWeatherPartlySunny } from 'react-icons/ti';

function CurrentWeather({ weatherData }) {
  return (
    <main className="mb-6">
      <div className="grid max-h-[350px] grid-cols-2 overflow-y-auto rounded-md bg-zinc-100 p-4 shadow-md">
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-4 font-gmarketbold text-5xl">
            <TiWeatherPartlySunny size={90} className="text-sky-500" />
            <span>{weatherData.temperature}℃</span>
          </div>
          <div className="px-16 pt-4">
            <span className="text-md text-red-700">
              {weatherData.uvMessage}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 px-20">
          <span className="text-lg font-semibold">
            {`체감 기온 `}
            <span className="ml-4 text-2xl text-red-700">
              {weatherData.sensibleTemperature}℃
            </span>
          </span>
          <span className="text-lg font-semibold">
            {`기온 `}
            <span className="ml-4 text-2xl text-orange-500">
              {weatherData.maximumTemperature}℃
            </span>{' '}
            /{' '}
            <span className="ml-4 text-2xl text-blue-500">
              {weatherData.minimumTemperature}℃
            </span>
          </span>

          <span className="text-lg font-semibold">
            {`강수량 `}
            <span className="ml-4 text-2xl text-blue-700">
              {weatherData.precipitation}
            </span>
          </span>
          <span className="text-lg font-semibold">
            {`미세먼지 `}
            <span className="ml-4 text-2xl text-orange-300">
              {weatherData.pm10Index} ({weatherData.pm10})
            </span>
          </span>
        </div>
      </div>
    </main>
  );
}

CurrentWeather.propTypes = {
  weatherData: propTypes.shape({
    temperature: propTypes.string.isRequired,
    maximumTemperature: propTypes.string.isRequired,
    minimumTemperature: propTypes.string.isRequired,
    precipitation: propTypes.string.isRequired,
    sensibleTemperature: propTypes.string.isRequired,
    uvMessage: propTypes.string.isRequired,
    pm10Index: propTypes.string.isRequired,
    pm10: propTypes.string.isRequired,
  }).isRequired,
};

export default CurrentWeather;
