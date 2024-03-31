import React from 'react';

import logo from '../assets/올포서울로고.jpg';
import SignupForm from '../components/auth/signup-form';

function SignupPage() {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <img
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-10"
        src={logo}
        alt="logo"
      />
      <SignupForm />
    </div>
  );
}

export default SignupPage;
