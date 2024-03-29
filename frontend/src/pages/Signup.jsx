import React from 'react';

import { useForm } from 'react-hook-form';

import Input from '../components/input/input';
import Date from '../components/input/date';
import SubmitButton from '../components/button/submit-button';
import logo from '../assets/올포서울로고.jpg';
import Option from '../components/input/option';

// id, pw, pw확인, 이름, 생년월일, mbti, 성별

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="relative flex h-screen items-center justify-center">
      <img
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-10"
        src={logo}
        alt="logo"
      />
      <form
        className="relative z-10 max-h-[80vh] w-96 overflow-y-auto scroll-smooth rounded-lg bg-white p-8 shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="mb-8 text-center text-3xl font-bold">Signup</h2>
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
        <Input
          id="password"
          label="Password Confirm"
          type="password"
          placeholder="다시 한 번 패스워드를 입력해주세요."
          register={register}
          errors={errors}
          errorMessage="패스워드를 입력해주세요."
        />
        <Input
          id="name"
          label="Name"
          type="text"
          placeholder="이름을 입력해주세요."
          register={register}
          errors={errors}
          errorMessage="이름을 입력해주세요."
        />
        <Date
          id="birth"
          label="Birth"
          placeholder="생년월일을 입력해주세요."
          register={register}
          errors={errors}
          errorMessage="생년월일을 입력해주세요."
        />

        <Option label="MBTI" id="mbti" register={register}>
          <option value="ISTJ">ISTJ</option>
          <option value="ISFJ">ISFJ</option>
          <option value="INFJ">INFJ</option>
          <option value="INTJ">INTJ</option>
          <option value="ISTP">ISTP</option>
          <option value="ISFP">ISFP</option>
          <option value="INFP">INFP</option>
          <option value="INTP">INTP</option>
          <option value="ESTP">ESTP</option>
          <option value="ESFP">ESFP</option>
          <option value="ENFP">ENFP</option>
          <option value="ENTP">ENTP</option>
          <option value="ESTJ">ESTJ</option>
          <option value="ESFJ">ESFJ</option>
          <option value="ENFJ">ENFJ</option>
          <option value="ENTJ">ENTJ</option>
        </Option>
        <Option label="Gender" id="gender" register={register}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Option>

        <SubmitButton text="회원가입" />
      </form>
    </div>
  );
}

export default SignupPage;
