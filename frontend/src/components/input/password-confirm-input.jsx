import React from 'react';
import PropTypes from 'prop-types';

function PasswordConfirmInput({ register, errors, getValues }) {
  return (
    <div className="mb-6">
      <label
        className="mb-2 flex flex-grow-0 px-3 text-lg font-semibold text-gray-700"
        htmlFor="passwordConfirm"
      >
        Confirm Password
      </label>
      <input
        className="block w-full rounded-md border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        id="passwordConfirm"
        type="password"
        placeholder="비밀번호를 다시 한 번 입력해주세요."
        {...register('passwordConfirm', {
          required: '비밀번호를 다시 한 번 입력해주세요.',
          validate: {
            check: (val) => {
              if (getValues('password') !== val) {
                return '비밀번호가 일치하지 않습니다.';
              }
            },
          },
        })}
      />
      {errors.passwordConfirm && (
        <p className="mt-3 text-xs text-red-500">
          {errors.passwordConfirm.message}
        </p>
      )}
    </div>
  );
}

PasswordConfirmInput.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  getValues: PropTypes.func.isRequired,
};

export default PasswordConfirmInput;
