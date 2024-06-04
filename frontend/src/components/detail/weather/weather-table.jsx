import React from 'react';

import propTypes from 'prop-types';

import { TiWeatherPartlySunny } from 'react-icons/ti';

function parseDateString(dateString) {
  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);
  const hour = dateString.substring(8, 10);
  const minute = dateString.substring(10, 12);

  const date = new Date(year, month - 1, day, hour, minute);
  return isNaN(date.getTime())
    ? 'Invalid Date'
    : `${month}월 ${day}일 ${hour}시 ${minute}분`;
}

function WeatherTable({ weatherData }) {
  const headerItems = ['시간', '기온(℃)', '상태', '강수량'];

  return (
    <div className="max-h-[200px] overflow-y-auto rounded-lg shadow-lg">
      <table className="w-full">
        <tbody className="bg-white">
          <tr>
            {headerItems.map((header, index) => (
              <th
                key={index}
                className="text-md bg-blue-50 p-2 text-center font-medium text-blue-700"
              >
                {header}
              </th>
            ))}
          </tr>
          {weatherData.weatherForecasts.map((dataRow, index) => {
            // 날짜를 'YYYYMMDDHHMM' 형식으로 파싱
            const parsedTime = parseDateString(dataRow.dayTime);
            const formattedTime =
              parsedTime !== 'Invalid Date' ? parsedTime : '';

            return (
              <tr key={index}>
                <td className="px-2 py-1 text-center text-sm font-medium text-gray-900 hover:bg-blue-100">
                  {formattedTime}
                </td>
                <td className="px-2 py-1 text-center text-sm text-gray-500 hover:bg-blue-100">
                  {dataRow.temperature24Hour}℃
                </td>
                <td className="flex justify-center px-2 py-1 hover:bg-blue-100">
                  <TiWeatherPartlySunny size={24} className="text-yellow-500" />
                </td>
                <td className="px-2 py-1 text-center text-sm text-gray-500 hover:bg-blue-100">
                  {dataRow.precipitation}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

WeatherTable.propTypes = {
  weatherData: propTypes.object.isRequired,
};

export default WeatherTable;
