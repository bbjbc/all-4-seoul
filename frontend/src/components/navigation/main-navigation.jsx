import React from 'react';
import { NavLink } from 'react-router-dom';

import { IoHome } from 'react-icons/io5';

function NavBar() {
  return (
    <nav className="bg-blue-500 bg-opacity-75 p-4">
      <ul className="mx-16 flex justify-between">
        <li className="flex items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 hover:text-purple-950'
                : 'flex items-center text-white hover:text-cyan-900'
            }
          >
            <IoHome className="mr-3 text-lg text-white" />
            Home
          </NavLink>
        </li>
        <li className="flex items-center space-x-6">
          <NavLink
            to="/list"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 hover:text-purple-950'
                : 'flex items-center text-white hover:text-cyan-900'
            }
          >
            List
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 hover:text-purple-950'
                : 'flex items-center text-white hover:text-cyan-900'
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/mypage"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 hover:text-purple-950'
                : 'flex items-center text-white hover:text-cyan-900'
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
