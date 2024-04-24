import React, { useState, useEffect } from 'react';

import propTypes from 'prop-types';

import { fetchWeatherData, fetchWeeklyWeatherData } from '../dummy-data';
import LoadingSpinner from '../../button/loading-spinner';
import weatherImage from '../../../assets/detail-background/weather.jpg';
import WeatherTable from './weather-table';
import CurrentWeather from './current-weather';
import FilterButton from './filter-button';

function WeatherInfo({ weatherRef, name }) {
  const [weatherData, setWeatherData] = useState(null);
  const [weeklyData, setWeeklyData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState('hourly');

  useEffect(() => {
    fetchWeatherData()
      .then((data) => {
        setWeatherData(data);
        setFilteredData(data.hourlyForecast);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });

    fetchWeeklyWeatherData()
      .then((data) => {
        setWeeklyData(data);
      })
      .catch((error) => {
        console.error('Error fetching weekly weather data:', error);
      });
  }, []);

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
    if (filterType === 'hourly') {
      setFilteredData(weatherData.hourlyForecast);
    } else if (filterType === 'weekly') {
      setFilteredData(weeklyData);
    }
  };

  if (!weatherData) {
    return <LoadingSpinner />;
  }

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
            <CurrentWeather weatherData={weatherData} />
            <div className="grid grid-cols-2 space-x-4 rounded-md p-2 shadow-md">
              <FilterButton
                onClick={() => handleFilterClick('hourly')}
                isActive={activeFilter === 'hourly'}
                filteredName="시간대별"
              />
              <FilterButton
                onClick={() => handleFilterClick('weekly')}
                isActive={activeFilter === 'weekly'}
                filteredName="일별"
              />
            </div>
            <div className="mb-6 overflow-x-auto">
              <WeatherTable
                filteredData={filteredData}
                weatherData={weatherData}
              />
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
};

export default WeatherInfo;
