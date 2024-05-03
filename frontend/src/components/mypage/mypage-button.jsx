import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function MyPageButton({ to, children }) {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <div className="mb-2">
      <NavLink
        to={to}
        className={
          isActive
            ? 'flex items-center rounded-lg bg-orange-50 px-4 py-2 text-lg font-extrabold transition duration-300 hover:bg-gray-100'
            : 'flex items-center rounded-lg bg-white px-4 py-2 text-lg transition duration-300 hover:bg-gray-100'
        }
      >
        <span className={isActive ? 'border-b-4 border-yellow-400' : undefined}>
          {children}
        </span>
      </NavLink>
    </div>
  );
}

MyPageButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MyPageButton;
