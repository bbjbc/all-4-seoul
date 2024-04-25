import React from 'react';
import { NavLink } from 'react-router-dom';

function MyPageLayOut() {
  return (
    <div>
      <ul className="flex justify-between space-x-40">
        <li className="flex items-center">
          <NavLink
            to="/mypage/myarticles"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 transition duration-300 ease-in-out hover:scale-110 hover:text-purple-950'
                : 'flex transform items-center text-black transition duration-300 ease-in-out hover:scale-110 hover:text-cyan-900'
            }
          >
            내가 쓴 글
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink
            to="/mypage/bookmarked"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 transition duration-300 ease-in-out hover:scale-110 hover:text-purple-950'
                : 'flex transform items-center text-black transition duration-300 ease-in-out hover:scale-110 hover:text-cyan-900'
            }
          >
            내 북마크 리스트
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink
            to="/mypage/change-info"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 transition duration-300 ease-in-out hover:scale-110 hover:text-purple-950'
                : 'flex transform items-center text-black transition duration-300 ease-in-out hover:scale-110 hover:text-cyan-900'
            }
          >
            내 정보 변경
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MyPageLayOut;
