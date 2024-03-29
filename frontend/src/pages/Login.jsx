import React from 'react';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Input from '../components/input/input';
import SubmitButton from '../components/button/submit-button';
import logo from '../assets/올포서울로고.jpg';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden">
      <img
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-10"
        src={logo}
        alt="logo"
      />
      <form
        className="relative z-10 w-96 rounded-lg bg-white p-8 shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="mb-8 text-center text-3xl font-bold">Login</h2>
        <Input
          id="id"
          label="ID"
          type="text"
          placeholder="아이디를 입력해주세요."
          register={register}
          errors={errors}
          errorMessage="아이디를 입력해주세요."
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="패스워드를 입력해주세요."
          register={register}
          errors={errors}
          errorMessage="패스워드를 입력해주세요."
        />

        <p className="p-3">
          회원이 아니신가요? &nbsp;
          <Link
            to="/signup"
            className="text-blue-500 underline hover:text-blue-800"
          >
            회원가입
          </Link>
          하세요!
        </p>
        <SubmitButton text="로그인" />
      </form>
    </div>
  );
}

export default LoginPage;
