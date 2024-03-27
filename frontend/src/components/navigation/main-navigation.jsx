import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../../assets/올포서울로고.jpg';

function NavBar() {
  return (
    <nav className="fixed left-0 top-0 z-10 w-full rounded-b-2xl bg-gray-700 bg-opacity-50 p-3 text-lg font-semibold">
      <ul className="mx-20 flex justify-between">
        <li className="flex items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 hover:text-purple-950'
                : 'flex items-center text-black hover:text-cyan-900'
            }
          >
            <img
              src={logo}
              alt="logo"
              className="mr-3 h-7 w-7 rounded-full text-lg text-black"
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
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 hover:text-purple-950'
                : 'flex items-center text-black hover:text-cyan-900'
            }
          >
            찾기
          </NavLink>
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
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
