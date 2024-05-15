import React from 'react';

import propTypes from 'prop-types';

function IdInput({ register, errors, disabled }) {
  return (
    <div className="mb-6">
      <label
        className="mb-2 flex flex-grow-0 px-3 text-lg font-semibold text-gray-700"
        htmlFor="id"
      >
        ID
      </label>
      <input
        className="block w-full rounded-md border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        id="id"
        type="text"
        placeholder="아이디를 입력해주세요."
        {...register('id', {
          required: '아이디를 입력해주세요.',
          minLength: { value: 5, message: '아이디는 5자 이상이어야 합니다.' },
          maxLength: { value: 20, message: '아이디는 20자가 최대입니다.' },
        })}
        disabled={disabled}
      />
      {errors.id && (
        <p className="mt-3 text-xs text-red-500">{errors.id.message}</p>
      )}
    </div>
  );
}

IdInput.propTypes = {
  register: propTypes.func.isRequired,
  errors: propTypes.object.isRequired,
  disabled: propTypes.bool,
};

export default IdInput;
