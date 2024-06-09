import React from 'react';

import propTypes from 'prop-types';

import LoadingSpinner from '../../button/loading-spinner';
import weatherImage from '../../../assets/detail-background/weather.jpg';
import WeatherTable from './weather-table';
import CurrentWeather from './current-weather';

function WeatherInfo({ weatherRef, name, data = [] }) {
  if (!data || data.length === 0) {
    return <LoadingSpinner />;
  }

  const weatherData = data[data.length - 1];

  const date = new Date(weatherData.time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const formattedTime = `${year}년 ${month}월 ${day}일 ${hour}시`;

  return (
    <main ref={weatherRef} className="relative h-full">
      <div className="flex h-full items-center justify-center">
        <img
          src={weatherImage}
          alt={weatherImage}
          className="absolute z-0 h-full w-full object-cover opacity-50"
        />
        <article className="z-10 w-3/5">
          <div className="mt-10 space-y-4 rounded-lg bg-white px-8 py-6 shadow-lg">
            <header className="flex flex-row justify-center gap-4 border-b-2">
              <h1 className="text-2xl font-bold">{formattedTime} 기준</h1>
              <p className="pb-4">
                <span className="font-gmarketbold text-2xl text-lime-500">
                  {name}
                </span>
                <span className="text-xl">의 날씨 정보입니다.</span>
              </p>
            </header>
            <CurrentWeather weatherData={weatherData} />
            <h2 className="text-xl font-medium">
              현재 시각 이후 12시간 날씨 정보입니다.
            </h2>
            <div className="mb-6">
              <WeatherTable weatherData={weatherData} />
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

WeatherInfo.propTypes = {
  weatherRef: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
  data: propTypes.array,
};

export default WeatherInfo;
