// 실시간 남녀 인구 비율 데이터 생성
export const generateGenderPieData = (data) => {
  if (data.length === 0) return [];

  const populationData = data[0];

  return [
    {
      id: '남성',
      label: '남성',
      value: parseFloat(populationData.malePopulationRate),
      color: 'hsl(154, 70%, 50%)',
    },
    {
      id: '여성',
      label: '여성',
      value: parseFloat(populationData.femalePopulationRate),
      color: 'hsl(328, 70%, 50%)',
    },
  ];
};
