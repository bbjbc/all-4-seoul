import React from 'react';

import propTypes from 'prop-types';

import { TiWeatherPartlySunny } from 'react-icons/ti';

function WeatherTable({ filteredData, weatherData }) {
  return (
    <div className="overflow-x-scroll rounded-lg shadow-lg">
      <table className="w-[800px]">
        <tbody className="bg-white">
          <tr>
            <th className="bg-blue-50 px-2 text-center text-xs font-medium  text-blue-700">
              {filteredData === weatherData.hourlyForecast ? '시간' : '날짜'}
            </th>
            {filteredData.map((dataRow, index) => (
              <td
                key={index + new Date().getTime() + Math.random()}
                className="px-3 text-center text-xs font-medium text-gray-900 hover:bg-blue-100"
              >
                {filteredData === weatherData.hourlyForecast
                  ? dataRow.hour
                  : dataRow.date}
              </td>
            ))}
          </tr>
          <tr>
            <th className="bg-blue-50 text-center text-xs font-medium text-blue-700">
              {filteredData === weatherData.hourlyForecast
                ? '기온(℃)'
                : '기온(℃)'}
            </th>
            {filteredData.map((dataRow, index) => (
              <td
                key={index + new Date().getTime() + Math.random()}
                className="px-3 text-center text-xs text-gray-500 hover:bg-blue-100"
              >
                {filteredData === weatherData.hourlyForecast
                  ? dataRow.temperature + '℃'
                  : `${dataRow.minTemperature}℃ / ${dataRow.maxTemperature}℃`}
              </td>
            ))}
          </tr>
          <tr>
            <th className="bg-blue-50 text-center text-xs font-medium  text-blue-700">
              {filteredData === weatherData.hourlyForecast ? '상태' : '상태'}
            </th>
            {filteredData.map((index) => (
              <td
                className="px-3 text-center hover:bg-blue-100"
                key={index + new Date().getTime() + Math.random()}
              >
                {filteredData === weatherData.hourlyForecast ? (
                  <TiWeatherPartlySunny size={24} className="text-yellow-500" />
                ) : (
                  <div className="flex flex-row justify-center gap-4">
                    <TiWeatherPartlySunny
                      size={24}
                      className="text-yellow-500"
                    />
                    <TiWeatherPartlySunny
                      size={24}
                      className="text-yellow-500"
                    />
                  </div>
                )}
              </td>
            ))}
          </tr>
          {filteredData === weatherData.hourlyForecast && (
            <tr>
              <th className="bg-blue-50 text-center text-xs font-medium  text-blue-700">
                강수량
              </th>
              {filteredData.map((dataRow, index) => (
                <td
                  key={index + new Date().getTime() + Math.random()}
                  className="px-3 text-center text-xs text-gray-500 hover:bg-blue-100"
                >
                  {dataRow.precipitation ?? '-'}
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

WeatherTable.propTypes = {
  filteredData: propTypes.array.isRequired,
  weatherData: propTypes.object.isRequired,
};

export default WeatherTable;
