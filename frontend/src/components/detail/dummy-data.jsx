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

export const dummyCultureEvents = [
  {
    id: 1,
    title: 'CCPP 기후환경 사진 프로젝트',
    date: '2024-04-18~2024-09-08',
    location: '충무아트센터 갤러리 신당',
    category: '전시/미술',
    description:
      '전 세계 대륙과 바다 그리고 하늘에서 바라본 위태로운 지구. 5명의 작가들이 기후위기의 심각성을 알리고 사진을 매개로 공감과 희망의 메시지를 전합니다.',
    charge:
      '일 반(만 19세 이상): 18,000원 청소년(만 13세~18세): 15,000원 어린이(만 48개월~12세): 10,000원',
    agency: '중구문화재단',
    image:
      'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=79352dbba9d84e2ebdc1e0d3b2fc8698&thumb=Y',
  },
  {
    id: 2,
    title: '[중구문화재단] 뮤지컬 [디어 에반 핸슨]',
    date: '2024-03-28~2024-06-23',
    location: '	충무아트센터 대극장',
    category: '연극',
    description: null,
    charge: 'VIP석 16만원 / R석 13만원 / S석 10만원 / A석 7만원',
    agency: '중구문화재단',
    image:
      'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=aa7d9cef735d4048b73d3acd53b42e23&thumb=Y',
  },
  {
    id: 3,
    title: '[중구문화재단] 소극장 영화 감상회 [씨네타운 중구]',
    date: '2024-03-21~2024-05-25',
    location: '충무아트센터 소극장 블루',
    category: '영화',
    description: null,
    charge: null,
    agency: '중구문화재단',
    image:
      'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=3f524904f7874863905d84186a5defbe&thumb=Y',
  },
  {
    id: 4,
    title: '동대문운동장 기념관',
    date: '2024-01-01~2024-12-31',
    location:
      '2호선 동대문역사문화공원 1번, 2번 출구 / 4호선 동대문역 7번 출구',
    category: '전시/미술',
    description: null,
    charge: null,
    agency: '동대문디자인플라자',
    image:
      'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=c3848573720a4ada9c9cd3e84dea2de9&thumb=Y',
  },
  {
    id: 5,
    title: '동대문 역사관',
    date: '	2024-01-01~2024-12-31',
    location:
      '2호선 동대문역사문화공원 1번, 2번 출구 / 4호선 동대문역 7번 출구',
    category: '전시/미술',
    description: null,
    charge: null,
    agency: '동대문디자인플라자',
    image:
      'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=66170fa63f40437e866de7a65fdf889d&thumb=Y',
  },
  {
    id: 6,
    title: '	DDP 투어 프로그램:건축투어',
    date: '2024-04-18~2024-09-08',
    location: '	DDP 뮤지엄(배움터) 1층 투어데스크',
    category: '교육/체험',
    description: null,
    charge:
      '만 13세 이상 (중학생 이상) 참여 (만 13세 이하, 2명당 보호자 1명 필수, 현장 조정 불가)',
    agency: '동대문디자인플라자',
    image:
      'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=63a7e31504494a4aad5fa73de878bdc8&thumb=Y',
  },
];
