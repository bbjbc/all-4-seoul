import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';

function NavBar() {
  return (
    <nav className="absolute left-0 top-0 z-10 w-full rounded-b-3xl bg-gray-600 bg-opacity-30 p-4 text-lg font-semibold">
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
            <IoHome className="mr-3 text-lg text-black" />
            Home
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
            List
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 hover:text-purple-950'
                : 'flex items-center text-black hover:text-cyan-900'
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/mypage"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 hover:text-purple-950'
                : 'flex items-center text-black hover:text-cyan-900'
            }
          >
            MyPage
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
