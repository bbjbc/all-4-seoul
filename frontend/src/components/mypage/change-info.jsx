import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import IdInput from '../../components/input/id-input';
import PasswordInput from '../../components/input/password-input';
import PasswordConfirmInput from '../../components/input/password-confirm-input';
import NameInput from '../../components/input/name-input';
import DateInput from '../../components/input/date-input';
import Option from '../../components/input/option';
import SubmitButton from '../../components/button/submit-button';
import { getUserInfo } from '../../lib/get-user-info';
import NicknameInput from '../input/nickname-input';
import { patchUserInfo } from '../../lib/patch-user-info';

function ChangeInfoPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
    getValues,
  } = useForm({ mode: 'onBlur' });

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const userInfo = await getUserInfo();
        setCurrentUser(userInfo);
        setValue('id', userInfo.loginId);
        setValue('name', userInfo.userName);
        setValue('nickname', userInfo.nickname);
        setValue('password', userInfo.password);
        setValue('birth', new Date(userInfo.birth));
        setValue('mbti', userInfo.mbti);
        setValue('Gender', userInfo.gender);
      } catch (error) {
        console.error('사용자 정보를 가져오는 데 실패했습니다.', error);
      }
    }
    fetchUserInfo();
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      await patchUserInfo(data, 'dsadsadasd');

      Swal.fire({
        icon: 'success',
        title: '정보 변경이 완료되었습니다!',
        text: '마이페이지로 이동합니다.',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/mypage');
        }
      });
    } catch (error) {
      console.error('사용자 정보를 변경하는 데 실패했습니다.', error);
    }
  };

  return (
    <div className="relative z-10 flex w-full animate-slidein flex-col items-center justify-center">
      <div className="my-5 flex h-[500px] w-full flex-col items-center justify-start overflow-y-auto rounded-xl bg-white py-2 shadow-lg">
        <h2 className="my-5 ml-5 text-right text-3xl font-semibold">
          내 정보 변경하기
        </h2>
        <form className="w-full p-6" onSubmit={handleSubmit(onSubmit)}>
          {currentUser && (
            <>
              <div className="rounded-xl border p-4 shadow-lg">
                <IdInput register={register} errors={errors} disabled={true} />
                <NameInput
                  register={register}
                  errors={errors}
                  disabled={true}
                />
                <NicknameInput register={register} errors={errors} />
                <PasswordInput register={register} errors={errors} />
                <PasswordConfirmInput
                  register={register}
                  errors={errors}
                  getValues={getValues}
                />
                <DateInput
                  id="birth"
                  label="Birth"
                  placeholder="생년월일을 입력해주세요."
                  control={control}
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
                <Option
                  label="Gender"
                  id="gender"
                  register={register}
                  disabled={true}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Option>
              </div>
              <div className="my-3 w-full py-3">
                <SubmitButton text="정보 변경" />
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default ChangeInfoPage;
