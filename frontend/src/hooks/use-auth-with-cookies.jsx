import { useCookies } from 'react-cookie';

export function useAuthWithCookies() {
  const [cookies, setCookie, removeCookie] = useCookies(['authToken']);

  const isLoggedIn = !!cookies.authToken;

  const login = (token) => {
    setCookie('authToken', token);
  };

  const logout = () => {
    removeCookie('authToken');
  };

  return { isLoggedIn, login, logout };
}
