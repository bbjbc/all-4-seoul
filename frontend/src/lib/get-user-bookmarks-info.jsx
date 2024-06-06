import axios from 'axios';

export async function getUserBookmarksInfo() {
  try {
    const response = await axios.get('/users/bookmarks', {
      withCredentials: true, // 쿠키를 자동으로 포함하여 요청합니다.
    });
    return response.data;
  } catch (error) {
    console.error('북마크 목록을 가져오는 데 실패했습니다.', error);
    return null;
  }
}
