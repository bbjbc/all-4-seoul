import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function MyPageButton({ to, children }) {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <div className="flex items-center justify-center space-x-3">
      <NavLink
        to={to}
        className={
          isActive
            ? 'flex scale-105 rounded-lg bg-emerald-400 px-16 py-2 text-black'
            : 'flex transform rounded-lg bg-white px-16 py-2 text-stone-500 transition duration-300 ease-in-out hover:scale-105 hover:bg-emerald-200 hover:text-black'
        }
      >
        {children}
      </NavLink>
    </div>
  );
}

MyPageButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MyPageButton;
