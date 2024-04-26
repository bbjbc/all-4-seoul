import React from 'react';

import propTypes from 'prop-types';

import logo from '../../assets/올포서울로고.jpg';
import HandleBackButton from '../button/handle-back-button';

function BackgroundLayout({ children }) {
  return (
    <>
      <HandleBackButton path="mypage" />
      <div className="relative flex h-screen items-center justify-center overflow-hidden">
        <img
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-10"
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
