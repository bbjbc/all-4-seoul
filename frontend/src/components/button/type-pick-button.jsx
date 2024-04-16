import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import { FaMapMarkedAlt } from 'react-icons/fa';
import { IoList } from 'react-icons/io5';

function TypePickButton() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/signup';

  const isDetailPage = /^\/list\/[^/]+$/.test(location.pathname);

  if (isAuthPage || isDetailPage) return null;

  return (
    <div className="fixed left-0 top-20 z-10 w-full text-center">
      <div className="flex justify-center">
        <div className="grid grid-cols-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center justify-center rounded-l-lg bg-fuchsia-900 px-2 py-1 text-white'
                : 'flex items-center justify-center rounded-l-lg bg-slate-200 px-2 py-1 hover:font-semibold hover:text-blue-950'
            }
          >
            <FaMapMarkedAlt className="mr-2" />
            지도로 보기
          </NavLink>
          <NavLink
            to="/list"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center justify-center rounded-r-lg bg-fuchsia-900 px-2 py-1 text-white'
                : 'flex items-center justify-center rounded-r-lg bg-slate-200 px-2 py-1 hover:font-semibold hover:text-blue-950'
            }
          >
            <IoList className="mr-2" />
            리스트로 보기
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default TypePickButton;
