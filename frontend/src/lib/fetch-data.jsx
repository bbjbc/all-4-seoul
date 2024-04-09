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
