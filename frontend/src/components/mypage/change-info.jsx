import React from 'react';

import logo from '../../assets/올포서울로고.jpg';

function ChangeInfo() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden">
      <img
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-10"
        src={logo}
        alt="logo"
      />
    </div>
  );
}

export default ChangeInfo;
