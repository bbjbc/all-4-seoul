import cookie from 'react-cookies';

export function useAuthWithCookies() {
  const isLoggedIn = localStorage.getItem('login');

  const login = (sessionId) => {
    cookie.save('loginUser', sessionId, { path: '/' });
    localStorage.setItem('login', true);
    console.log('로그인 성공');
  };

  const logout = () => {
    cookie.remove('loginUser', { path: '/' });
    localStorage.removeItem('login');
    console.log('로그아웃 성공');
  };

  return { isLoggedIn, login, logout };
}
