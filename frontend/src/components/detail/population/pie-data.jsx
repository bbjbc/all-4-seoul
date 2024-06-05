// 실시간 인구 나이 비율 데이터 생성
export const generatePieData = (data) => {
  if (data.length === 0) return [];

  const populationData = data[0];

  return [
    {
      id: '유아',
      label: '유아',
      value: parseFloat(populationData.populationRate0),
      color: 'hsl(154, 70%, 50%)',
    },
    {
      id: '10대',
      label: '10대',
      value: parseFloat(populationData.populationRate10),
      color: 'hsl(328, 70%, 50%)',
    },
    {
      id: '20대',
      label: '20대',
      value: parseFloat(populationData.populationRate20),
      color: 'hsl(126, 70%, 50%)',
    },
    {
      id: '30대',
      label: '30대',
      value: parseFloat(populationData.populationRate30),
      color: 'hsl(41, 70%, 50%)',
    },
    {
      id: '40대',
      label: '40대',
      value: parseFloat(populationData.populationRate40),
      color: 'hsl(132, 70%, 50%)',
    },
    {
      id: '50대',
      label: '50대',
      value: parseFloat(populationData.populationRate50),
      color: 'hsl(210, 70%, 50%)',
    },
    {
      id: '60대',
      label: '60대',
      value: parseFloat(populationData.populationRate60),
      color: 'hsl(90, 70%, 50%)',
    },
    {
      id: '70대',
      label: '70대',
      value: parseFloat(populationData.populationRate70),
      color: 'hsl(45, 70%, 50%)',
    },
  ];
};
