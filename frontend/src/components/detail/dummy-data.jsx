// 동적으로 time을 생성하는 메서드
function generateTimeData() {
  const now = new Date();
  const currentHour = now.getHours();

  // 현재 시간을 기준으로 데이터 생성
  const generatedData = [];
  for (let i = -12; i <= 12; i++) {
    const hour = (currentHour + i + 24) % 24 || 0;
    const time = `${hour}시`;
    const expectedPopulation = Math.floor(Math.random() * 10000) + 5000;

    generatedData.push({
      time,
      '예상 인구수': expectedPopulation,
    });
  }

  return generatedData;
}

const DummyData = generateTimeData();
export default DummyData;
