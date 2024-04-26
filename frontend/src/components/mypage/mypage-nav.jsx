import React from 'react';
import { NavLink } from 'react-router-dom';

function MyPageNav() {
  return (
    <div className="relative z-10 flex justify-center">
      <ul className="flex items-center justify-center space-x-3 rounded-lg bg-gray-100 px-2 py-1 font-gmarketbold text-base shadow">
        <li>
          <NavLink
            end
            to="/mypage"
            className={({ isActive }) =>
              isActive
                ? 'flex scale-105 rounded-lg bg-gray-200 px-14 py-2 text-black'
                : 'flex transform rounded-lg bg-white px-14 py-2 text-stone-500 transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 hover:text-black'
            }
          >
            내 정보
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mypage/myarticles"
            className={({ isActive }) =>
              isActive
                ? 'flex scale-105 rounded-lg bg-gray-200 px-14 py-2 text-black'
                : 'flex transform rounded-lg bg-white px-14 py-2 text-stone-500 transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 hover:text-black'
            }
          >
            내 댓글
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mypage/bookmarked"
            className={({ isActive }) =>
              isActive
                ? 'flex scale-105 rounded-lg bg-gray-200 px-14 py-2 text-black'
                : 'flex transform rounded-lg bg-white px-14 py-2 text-stone-500 transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 hover:text-black'
            }
          >
            내 북마크
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mypage/change-info"
            className={({ isActive }) =>
              isActive
                ? 'flex scale-105 rounded-lg bg-gray-200 px-14 py-2 text-black'
                : 'flex transform rounded-lg bg-white px-14 py-2 text-stone-500 transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 hover:text-black'
            }
          >
            내 정보 변경
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MyPageNav;
