import { useCookies } from 'react-cookie';

export function useAuthWithCookies() {
  const [cookies, setCookie, removeCookie] = useCookies(['sessionId']);

  const isLoggedIn = !!cookies.sessionId;

  const login = (token) => {
    setCookie('sessionId', token);
  };

  const logout = () => {
    removeCookie('sessionId');
  };

  return { isLoggedIn, login, logout };
}
