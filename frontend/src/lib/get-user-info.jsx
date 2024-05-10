import axios from 'axios';

export async function getUserInfo(userId) {
  const authToken = document.cookie
    .split('; ')
    .find((row) => row.startsWith('authToken='));
  if (!authToken) {
    return null;
  }

  try {
    const response = await axios.get(`http://localhost:8080/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${authToken.split('=')[1]}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('사용자 정보를 가져오는 데 실패했습니다.', error);
    return null;
  }
}
