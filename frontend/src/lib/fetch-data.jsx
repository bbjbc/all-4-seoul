export async function fetchDataAndDisplayPolygons(
  map,
  dataUrl,
  displayFunction,
) {
  try {
    const response = await fetch(dataUrl);
    if (!response.ok) {
      throw new Error('데이터를 가져오는 데 실패했습니다.');
    }
    const data = await response.json();

    displayFunction(data);

    // 지도 줌 레벨 변경 시 폴리곤을 다시 표시
    window.kakao.maps.event.addListener(map, 'zoom_changed', () => {
      const level = map.getLevel();
      if (level >= 8 && data) {
        displayFunction(data);
      }
    });
  } catch (error) {
    console.error('Error fetching JSON data:', error);
  }
}

export function fetchWeatherData() {
  // 가상의 날씨 데이터 생성
  const weatherData = {
    temperature: 20.2,
    feelsLike: 20.2,
    humidity: 42,
    dust: '좋음',
    microDust: '보통',
    windSpeed: 1,
    minTemperature: 14,
    maxTemperature: 24,
    sunrise: '05:52',
    sunset: '19:11',
    precipitation: null,
    uvIndex: '보통',
    hourlyForecast: [
      { hour: '11시', temperature: 21, precipitation: '2%' },
      { hour: '12시', temperature: 23, precipitation: '3%' },
      { hour: '13시', temperature: 23, precipitation: '3%' },
      { hour: '14시', temperature: 23, precipitation: '3%' },
      { hour: '15시', temperature: 23, precipitation: '3%' },
      { hour: '16시', temperature: 23, precipitation: '3%' },
      { hour: '17시', temperature: 23, precipitation: '3%' },
      { hour: '18시', temperature: 23, precipitation: '3%' },
      { hour: '19시', temperature: 23, precipitation: '3%' },
      { hour: '20시', temperature: 23, precipitation: '3%' },
      { hour: '21시', temperature: 23, precipitation: '3%' },
      { hour: '22시', temperature: 23, precipitation: '3%' },
      { hour: '23시', temperature: 23, precipitation: '3%' },
      { hour: '00시', temperature: 23, precipitation: '3%' },
      { hour: '01시', temperature: 23, precipitation: '3%' },
      { hour: '02시', temperature: 23, precipitation: '3%' },
      { hour: '03시', temperature: 23, precipitation: '3%' },
      { hour: '05시', temperature: 23, precipitation: '3%' },
      { hour: '06시', temperature: 23, precipitation: '3%' },
      { hour: '07시', temperature: 23, precipitation: '3%' },
      { hour: '08시', temperature: 23, precipitation: '3%' },
      { hour: '09시', temperature: 23, precipitation: '3%' },
      { hour: '10시', temperature: 23, precipitation: '3%' },
    ],
  };

  // Promise를 사용하여 가상의 API 요청과 비슷하게 처리
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(weatherData);
    }, 1000); // 1초 후에 데이터 반환 (가상의 API 응답 시간)
  });
}
