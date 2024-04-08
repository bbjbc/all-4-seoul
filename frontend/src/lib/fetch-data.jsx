export async function fetchDataAndDisplayPolygons(dataUrl, displayFunction) {
  try {
    const response = await fetch(dataUrl);
    if (!response.ok) {
      throw new Error('데이터를 가져오는 데 실패했습니다.');
    }
    const data = await response.json();

    displayFunction(data);
  } catch (error) {
    console.error('Error fetching JSON data:', error);
  }
}
