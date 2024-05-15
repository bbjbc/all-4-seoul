import axios from 'axios';

export async function patchUserInfo(data, userId) {
  try {
    const response = await axios.patch(
      `http://localhost:8080/users/${userId}`,
      data,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    console.error('사용자 정보를 변경하는 데 실패했습니다.', error);
    return null;
  }
}
