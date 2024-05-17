import axios from 'axios';

export async function patchUserInfo(data) {
  try {
    const response = await axios.patch(
      'http://localhost:8080/api/users/user-info',
      data,
      {
        withCredentials: true, // 쿠키를 자동으로 포함하여 요청합니다.
      },
    );
    return response.data;
  } catch (error) {
    console.error('사용자 정보를 변경하는 데 실패했습니다.', error);
    return null;
  }
}
