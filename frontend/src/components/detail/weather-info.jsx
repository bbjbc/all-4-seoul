import React, { useState, useEffect } from 'react';

import propTypes from 'prop-types';

import { fetchWeatherData } from '../../lib/fetch-data';
import LoadingSpinner from '../button/loading-spinner';
import weatherImage from '../../assets/detail-background/weather.jpg';
import { TiWeatherPartlySunny } from 'react-icons/ti';

function WeatherInfo({ weatherRef, name }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // 가상의 API 호출
    fetchWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  if (!weatherData) {
    return <LoadingSpinner />;
  }

  return (
    <article ref={weatherRef} className="relative h-full max-w-screen-2xl">
      <div className="flex h-full items-center justify-center">
        <img
          src={weatherImage}
          alt={weatherImage}
          className="absolute z-0 h-full w-full object-cover opacity-50"
        />
        <div className="z-10 w-3/5 pt-10">
          <div className="space-y-4 rounded-lg bg-white px-8 py-6 shadow-lg">
            <header className="space-y-4 border-b-2">
              <h1 className="text-3xl font-bold">
                {new Date().toLocaleTimeString()} 기준
              </h1>
              <p className="pb-4">
                <span className="font-gmarketbold text-4xl text-lime-500">
                  {name}
                </span>
                <span className="text-xl">의 날씨 정보입니다.</span>
              </p>
            </header>
            <div className="mb-6">
              <div className="grid grid-cols-2 rounded-md bg-zinc-100 p-4 shadow-md">
                <p className="flex items-center justify-center gap-4 font-gmarketbold text-5xl">
                  <TiWeatherPartlySunny size={90} className="text-sky-500" />
                  <span>{weatherData.temperature}℃</span>
                </p>
                <div className="flex flex-col items-start justify-center gap-4 px-20">
                  <span className="text-lg font-semibold">
                    {`체감 기온 `}
                    <span className="text-2xl text-red-700">
                      {weatherData.feelsLike}℃
                    </span>
                  </span>
                  <span className="text-lg font-semibold">
                    {`미세 `}
                    <span className="text-2xl text-orange-300">
                      {weatherData.dust}
                    </span>
                  </span>
                  <span className="text-lg font-semibold">
                    {`초미세 `}
                    <span className="text-2xl text-orange-500">
                      {weatherData.microDust}
                    </span>
                  </span>
                </div>
              </div>
              <div className="overflow-x-scroll">
                <table className="divide-y divide-gray-200">
                  <tbody className="bg-white">
                    <tr>
                      <th className="bg-blue-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-700">
                        시간
                      </th>
                      {weatherData.hourlyForecast.map((hourData, index) => (
                        <td
                          key={index}
                          className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 hover:bg-blue-100"
                        >
                          {hourData.hour}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th className="bg-blue-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-700">
                        온도(℃)
                      </th>
                      {weatherData.hourlyForecast.map((hourData, index) => (
                        <td
                          key={index}
                          className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 hover:bg-blue-100"
                        >
                          {hourData.temperature}℃
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th className="bg-blue-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-700">
                        상태
                      </th>
                      {weatherData.hourlyForecast.map((hourData, index) => (
                        <td
                          key={index}
                          className="whitespace-nowrap px-6 py-4 hover:bg-blue-100"
                        >
                          <TiWeatherPartlySunny
                            size={24}
                            className="text-yellow-500"
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th className="bg-blue-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-700">
                        강수량(mm)
                      </th>
                      {weatherData.hourlyForecast.map((hourData, index) => (
                        <td
                          key={index}
                          className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 hover:bg-blue-100"
                        >
                          {hourData.precipitation ?? '-'}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

WeatherInfo.propTypes = {
  weatherRef: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
};

export default WeatherInfo;
