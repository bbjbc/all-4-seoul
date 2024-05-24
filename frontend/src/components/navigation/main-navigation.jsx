import React from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/올포서울로고.jpg';
import SearchButton from '../button/search-button';
import { useAuthWithCookies } from '../../hooks/use-auth-with-cookies';

function NavBar() {
  const { isLoggedIn, logout } = useAuthWithCookies();
  const navigation = useNavigate();

  const handleLogout = () => {
    axios
      .post('http://localhost:8080/api/logout', null, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        logout();
        navigation('/home');
      })
      .catch((error) => {
        console.error('로그아웃 실패', error);
      });
  };

  return (
    <nav className="text-md fixed left-0 top-0 z-50 w-full rounded-b-md bg-white bg-opacity-90 p-3 font-gmarketbold">
      <ul className="mx-56 flex justify-between">
        <li className="flex items-center">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 transition duration-300 ease-in-out hover:scale-110 hover:text-purple-950'
                : 'flex transform items-center text-black transition duration-300 ease-in-out hover:scale-110 hover:text-cyan-900'
            }
          >
            <img
              src={logo}
              alt="logo"
              className="text-md mr-3 h-7 w-7 rounded-full text-black"
            />
            All 4 Seoul
          </NavLink>
        </li>
        <li className="flex items-center space-x-6">
          <NavLink
            to="/list"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 hover:text-purple-950'
                : 'flex items-center text-black hover:text-cyan-900'
            }
          >
            리스트
          </NavLink>
          <SearchButton />

          {isLoggedIn ? (
            <>
              <NavLink
                to="/mypage"
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center text-blue-950 hover:text-purple-950'
                    : 'flex items-center text-black hover:text-cyan-900'
                }
              >
                마이페이지
              </NavLink>
              <button
                onClick={handleLogout}
                className="flex items-center rounded-lg px-2 text-black hover:text-cyan-900"
              >
                로그아웃
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center rounded-lg px-2 text-blue-950 hover:text-purple-800'
                  : 'flex items-center rounded-lg px-2 text-black hover:text-cyan-900'
              }
            >
              로그인
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
