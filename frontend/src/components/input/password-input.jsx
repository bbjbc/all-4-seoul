import React from 'react';

import propTypes from 'prop-types';

function PasswordInput({ register, errors }) {
  return (
    <div className="mb-6">
      <label
        className="mb-2 flex flex-grow-0 px-3 text-lg font-semibold text-gray-700"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="block w-full rounded-md border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        id="password"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        {...register('password', {
          required: '비밀번호를 입력해주세요.',
          pattern: {
            value: /(?=.*[0-9])(?=.*[a-zA-Z]).{5,18}$/g,
            message:
              '숫자와 영문자를 포함한 5자 이상 18자 이하의 비밀번호를 입력해주세요.',
          },
        })}
      />
      {errors.password && (
        <p className="mt-3 text-xs text-red-500">{errors.password.message}</p>
      )}
    </div>
  );
}

PasswordInput.propTypes = {
  register: propTypes.func.isRequired,
  errors: propTypes.object.isRequired,
};

export default PasswordInput;
