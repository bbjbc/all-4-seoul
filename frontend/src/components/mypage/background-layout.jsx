import React from 'react';

import propTypes from 'prop-types';

import logo from '../../assets/seoul.jpg';

function BackgroundLayout({ children }) {
  return (
    <>
      <div className="relative flex h-screen justify-center overflow-hidden">
        <img
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-60"
          src={logo}
          alt="logo"
        />
        {children}
      </div>
    </>
  );
}

BackgroundLayout.propTypes = {
  children: propTypes.node,
};

export default BackgroundLayout;
