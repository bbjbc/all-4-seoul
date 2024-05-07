import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import { useUser } from '../../state/user-context';
import Input from '../input/input';
import SubmitButton from '../button/submit-button';

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { id, password } = data;
    const storedUsers = JSON.parse(localStorage.getItem('userInfo')) || [];

    if (storedUsers && storedUsers.length > 0) {
      const user = storedUsers.find(
        (user) => user.id === id && user.password === password,
      );
      if (user) {
        login(id);
        navigate('/home');
      } else {
        Swal.fire({
          icon: 'error',
          title: '로그인 실패',
          text: '아이디 또는 비밀번호가 일치하지 않습니다.',
          confirmButtonText: '확인',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: '로그인 실패',
        text: '가입된 회원이 아닙니다.',
        confirmButtonText: '확인',
      });
    }
  };

  return (
    <form
      className="relative z-10 w-96 animate-slidein rounded-lg bg-white p-8 shadow-lg"
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
  );
}

export default LoginForm;
