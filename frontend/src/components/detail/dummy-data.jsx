// 동적으로 time을 생성하는 메서드
export function generateTime() {
  const now = new Date();
  const currentHour = now.getHours();

  // 현재 시간을 기준으로 데이터 생성
  const generateTimeData = () => {
    let time = '';
    const generatedData = [];
    for (let i = -12; i <= 12; i++) {
      const hour = (currentHour + i + 24) % 24 || 0;
      if (i === 0) {
        time = '현재';
      } else {
        time = `${hour}시`;
      }
      const expectedPopulation = Math.floor(Math.random() * 10000) + 3000;

      generatedData.push({
        time,
        '예상 인구수': expectedPopulation,
      });
    }

    return generatedData;
  };

  // 최대 인구수를 찾는 함수
  const findMaxPopulation = (data) => {
    let maxPopulation = 0;
    let maxHour = '';

    data.forEach((item) => {
      if (item['예상 인구수'] > maxPopulation) {
        maxPopulation = item['예상 인구수'];
        maxHour = item.time;
      }
    });

    return { maxPopulation, maxHour };
  };

  // 시간 차이를 시간 단위로 계산 함수
  const calculateHourDifference = (hour1, hour2) => {
    const hourValue1 = parseInt(hour1);
    const hourValue2 = parseInt(hour2);
    if (isNaN(hourValue1) || isNaN(hourValue2)) return NaN;

    let diff = Math.abs(hourValue1 - hourValue2);
    diff = Math.min(diff, 24 - diff);

    return diff;
  };

  const timeData = generateTimeData(currentHour);
  const { maxPopulation: futureMaxPopulation, maxHour: futureMaxHour } =
    findMaxPopulation(timeData.slice(12));
  const { maxPopulation: pastMaxPopulation, maxHour: pastMaxHour } =
    findMaxPopulation(timeData.slice(0, 13));
  const futureHourDiff = calculateHourDifference(currentHour, futureMaxHour);
  const pastHourDiff = calculateHourDifference(currentHour, pastMaxHour);

  return {
    timeData,
    futureMaxPopulation,
    futureMaxHour,
    pastMaxPopulation,
    pastMaxHour,
    futureHourDiff,
    pastHourDiff,
  };
}

// 가상의 날씨 데이터 생성
export function fetchWeatherData() {
  const currentDate = new Date();
  const weatherData = {
    ...generateWeatherData(currentDate),
    hourlyForecast: generateHourlyForecast(currentDate),
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(weatherData);
    }, 1000);
  });
}

// 현재 시간을 기준으로 가상의 날씨 데이터 생성
function generateWeatherData(currentDate) {
  const temperature = Math.floor(Math.random() * 10) + 20;
  const feelsLike = temperature;
  const humidity = Math.floor(Math.random() * 30) + 40;
  const dustLevels = ['좋음', '보통', '나쁨'];
  const dust = dustLevels[Math.floor(Math.random() * dustLevels.length)];
  const microDustLevels = ['좋음', '보통', '나쁨'];
  const microDust =
    microDustLevels[Math.floor(Math.random() * microDustLevels.length)];
  const windSpeed = Math.floor(Math.random() * 5) + 1;
  const uvIndexLevels = ['낮음', '보통', '높음', '매우높음'];
  const uvIndex =
    uvIndexLevels[Math.floor(Math.random() * uvIndexLevels.length)];

  const sunrise = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
  currentDate.setHours(currentDate.getHours() + 12);
  const sunset = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

  return {
    temperature,
    feelsLike,
    humidity,
    dust,
    microDust,
    windSpeed,
    minTemperature: temperature - 6,
    maxTemperature: temperature + 6,
    sunrise,
    sunset,
    precipitation: null,
    uvIndex,
  };
}

// 가상의 일별 날씨 데이터 생성
export function fetchWeeklyWeatherData() {
  const currentDate = new Date();
  const weeklyWeatherData = generateWeeklyWeatherData(currentDate);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(weeklyWeatherData);
    }, 1000);
  });
}

// 현재 시간을 기준으로 24시간치의 시간 데이터 생성
function generateHourlyForecast(currentDate) {
  const hourlyForecast = [];
  for (let i = -12; i <= 12; i++) {
    const nextHour = new Date(currentDate);
    nextHour.setHours(nextHour.getHours() + i + 24);
    const hour = nextHour.getHours() % 24;
    hourlyForecast.push({
      hour: `${hour}시`,
      temperature: Math.floor(Math.random() * 10) + 20,
      precipitation: `${Math.floor(Math.random() * 10)}%`,
    });
  }
  return hourlyForecast;
}

// 현재 날짜를 기준으로 7일치의 날짜 데이터 생성
function generateWeeklyWeatherData(currentDate) {
  const weeklyWeatherData = [];
  for (let i = 0; i < 7; i++) {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + i);
    const formattedDate = `${nextDay.getMonth() + 1}월 ${nextDay.getDate()}일`;
    weeklyWeatherData.push({
      date: formattedDate,
      minTemperature: Math.floor(Math.random() * 10) + 15,
      maxTemperature: Math.floor(Math.random() * 10) + 25,
      condition: ['맑음', '흐림', '비', '구름 많음'][
        Math.floor(Math.random() * 4)
      ],
    });
  }
  return weeklyWeatherData;
}
