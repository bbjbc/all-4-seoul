// 동적으로 time을 생성하는 메서드
export function DummyData() {
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
