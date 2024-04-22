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

// 가상의 주차장 데이터 생성
export function generateParkingData(count) {
  const parkingData = [];
  for (let i = 1; i <= count; i++) {
    const id = i;
    const name = String.fromCharCode(65 + (i - 1)) + ' 주차장';
    const fee = `${Math.floor(Math.random() * 50 + 1) * 100}원/30분`;
    const openingHours = '평일 08:00~22:00, 주말 10:00~20:00';
    const capacity = Math.floor(Math.random() * 5) + 50;
    const occupied = Math.floor(Math.random() * (capacity + 1));
    const available = capacity - occupied > 0;

    parkingData.push({
      id,
      name,
      fee,
      openingHours,
      capacity,
      occupied,
      available,
    });
  }
  return parkingData;
}

export const virtualButtons = [
  { id: '1', label: '개수대가 잘 되어 있어요', category: '시설' },
  { id: '2', label: '온수가 잘 나와요', category: '시설' },
  { id: '3', label: '화장실이 잘 되어 있어요', category: '시설' },
  { id: '4', label: '벌레 걱정 없어요', category: '시설' },
  { id: '5', label: '깨끗해요', category: '시설' },
  { id: '6', label: '매너타임이 잘 지켜져요', category: '분위기' },
  { id: '7', label: '조용히 쉬기 좋아요', category: '분위기' },
  { id: '8', label: '사진이 잘 나와요', category: '분위기' },
  { id: '9', label: '뷰가 좋아요', category: '분위기' },
  { id: '10', label: '그늘이 많아요', category: '분위기' },
  { id: '11', label: '바베큐 해먹기 좋아요', category: '기타' },
  { id: '12', label: '주차하기 편해요', category: '기타' },
  { id: '13', label: '공용시설 관리가 잘 되어있어요', category: '기타' },
  { id: '14', label: '사이트 간격이 넓어요', category: '기타' },
  { id: '15', label: '물놀이하기 좋아요', category: '기타' },
];

export const dummyReviews = [
  { id: 1, author: '조병찬', content: '지리네', date: '2021-09-01' },
  { id: 2, author: '정재우', content: '홀리피젼', date: '2021-09-01' },
  {
    id: 3,
    author: '유동우',
    content: '피어나 최고',
    date: '2021-09-01',
  },
  {
    id: 4,
    author: '홍공진',
    content: '연애하자',
    date: '2021-09-01',
  },
  {
    id: 5,
    author: '송영훈',
    content: '누나바라기',
    date: '2021-09-01',
  },
  {
    id: 6,
    author: '이태용',
    content: '나는야 포항 사나이',
    date: '2021-09-01',
  },
];
