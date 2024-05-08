import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';

import IdInput from '../../components/input/id-input';
import PasswordInput from '../../components/input/password-input';
import PasswordConfirmInput from '../../components/input/password-confirm-input';
import NameInput from '../../components/input/name-input';
import DateInput from '../../components/input/date-input';
import Option from '../../components/input/option';
import SubmitButton from '../../components/button/submit-button';
import NicknameInput from '../input/nickname-input';

function SignupForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data) => {
    const { id, password, name, birth, mbti, gender, nickname } = data;
    axios
      .post('http://localhost:8080/users', {
        loginId: id,
        loginPassword: password,
        username: name,
        birth: birth,
        mbti: mbti,
        gender: gender,
        nickname: nickname,
      })
      .then((response) => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: '회원가입이 완료되었습니다!',
          text: '로그인 페이지로 이동합니다.',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login');
          }
        });
      })
      .catch(() => {
        console.error('어림도없지');
        Swal.fire({
          icon: 'error',
          title: '회원가입 실패',
          text: '이미 존재하는 아이디입니다.',
          confirmButtonText: '확인',
        });
      });
  };

  return (
    <form
      className="relative z-10 max-h-[80vh] w-96 animate-slidein overflow-y-auto scroll-smooth rounded-lg bg-white p-8 shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-8 text-center text-3xl font-bold">Signup</h2>
      <IdInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <PasswordConfirmInput
        register={register}
        errors={errors}
        getValues={getValues}
      />
      <NameInput register={register} errors={errors} />
      <NicknameInput register={register} errors={errors} />
      <DateInput
        id="birth"
        label="Birth"
        placeholder="생년월일을 입력해주세요."
        control={control}
        defaultValue={new Date()}
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
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Option>

      <p className="p-3">
        이미 회원이신가요? &nbsp;
        <Link
          to="/login"
          className="text-blue-500 underline hover:text-blue-800"
        >
          로그인
        </Link>
        하세요!
      </p>
      <SubmitButton text="회원가입" />
    </form>
  );
}

export default SignupForm;
