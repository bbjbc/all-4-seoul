function extractHour(populationTime) {
  const timePart = populationTime.split(' ')[1];
  const hour = timePart.split(':')[0];
  return hour;
}

// 시간 데이터 함수
export function generateTime(data) {
  if (!data || data.length === 0) return [];

  const currentHour = parseInt(extractHour(data[0].populationTime), 10);
  console.log(currentHour);

  const generateTimeData = () => {
    const generatedData = [];

    // 현재 시간부터 시작하여 한 시간 간격으로 데이터 생성
    data[0].populationForecasts.forEach((forecast, index) => {
      const hour = (currentHour + index) % 24;
      const time = index === 0 ? '현재' : `${hour}시`;

      generatedData.push({
        time,
        '예상 인구수': forecast.maximumForecastPopulation,
        '최대 인구수': forecast.maximumForecastPopulation,
        '최소 인구수': forecast.minimumForecastPopulation,
      });
    });

    return generatedData;
  };

  return generateTimeData();
}

// 최대 인구수가 있는 시간과 최대 인구수를 찾는 함수
export function getMaxPopulationTimeAndMaxPopulation(data) {
  if (!data || data.length === 0) return null;

  let maxPopulation = -1;
  let maxPopulationTime = null;
  let maxCongestLevel = '';

  data[0].populationForecasts.forEach((forecast, index) => {
    if (forecast.maximumForecastPopulation > maxPopulation) {
      maxPopulation = forecast.maximumForecastPopulation;
      maxPopulationTime = index;
      maxCongestLevel = forecast.congestLevel;
    }
  });

  return { maxPopulationTime, maxPopulation, maxCongestLevel };
}

// 최대 인구수가 있는 시간과 currentHour의 차이를 계산하는 함수
export function getDifferenceWithCurrentHour(data) {
  if (!data || data.length === 0) return [];

  const currentHour = parseInt(extractHour(data[0].populationTime), 10);
  const maxPopulationTimeIndex =
    getMaxPopulationTimeAndMaxPopulation(data).maxPopulationTime;

  if (maxPopulationTimeIndex === null) return null;

  const maxPopulationHour = (currentHour + maxPopulationTimeIndex) % 24;
  const difference = maxPopulationHour - currentHour;

  return difference;
}
