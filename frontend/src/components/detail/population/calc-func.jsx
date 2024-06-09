function extractHour(populationTime) {
  const timePart = populationTime.split(' ')[1];
  const hour = timePart.split(':')[0];
  return hour;
}

// 시간 데이터 함수
export function generateTime(data) {
  if (!data || data.length === 0) return [];

  const currentHour = parseInt(extractHour(data[0].populationTime), 10);

  const forecasts = data[0].populationForecasts;
  const maxPopulation = Math.max(
    ...forecasts.map((f) => f.maximumForecastPopulation),
  );
  const minPopulation = Math.min(
    ...forecasts.map((f) => f.maximumForecastPopulation),
  );

  const generatedData = forecasts.map((forecast, index) => {
    const hour = (currentHour + index) % 24;
    const time = index === 0 ? '현재' : `${hour}시`;

    return {
      time,
      '예상 인구수': forecast.maximumForecastPopulation,
      '최대 인구수': forecast.maximumForecastPopulation,
      '최소 인구수': forecast.minimumForecastPopulation,
      maxValue: maxPopulation,
      minValue: minPopulation,
    };
  });

  return generatedData;
}

// 최대 인구수가 있는 시간과 최대 인구수를 찾는 함수
export function getMaxPopulationTimeAndMaxPopulation(data) {
  if (!data || data.length === 0) return null;

  const currentHour = parseInt(extractHour(data[0].populationTime), 10); // 현재 시간 추출
  let maxPopulation = -1;
  let maxPopulationTimeIndex = null;
  let maxCongestLevel = '';

  data[0].populationForecasts.forEach((forecast, index) => {
    if (forecast.maximumForecastPopulation > maxPopulation) {
      maxPopulation = forecast.maximumForecastPopulation;
      maxPopulationTimeIndex = index;
      maxCongestLevel = forecast.congestLevel;
    }
  });

  const maxPopulationTime = (currentHour + maxPopulationTimeIndex) % 24;
  return { maxPopulationTime, maxPopulation, maxCongestLevel };
}

// 최대 인구수가 있는 시간과 currentHour의 차이를 계산하는 함수
export function getDifferenceWithCurrentHour(data) {
  if (!data || data.length === 0) return [];

  const currentHour = parseInt(extractHour(data[0].populationTime), 10);
  const { maxPopulationTime } = getMaxPopulationTimeAndMaxPopulation(data);

  if (maxPopulationTime === null) return null;

  const difference = maxPopulationTime - currentHour;

  return difference;
}
