import React from 'react';

import propTypes from 'prop-types';

function NicknameInput({ register, errors }) {
  return (
    <div className="mb-6">
      <label
        className="mb-2 flex flex-grow-0 px-3 text-lg font-semibold text-gray-700"
        htmlFor="name"
      >
        Nickname
      </label>
      <input
        className="block w-full rounded-md border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        id="nickname"
        type="text"
        placeholder="이름을 입력해주세요."
        {...register('nickname', {
          required: '별명을 입력해주세요.',
          minLength: { value: 3, message: '별명은 3자 이상이어야 합니다.' },
          maxLength: { value: 20, message: '별명은 20자 이하여야 합니다.' },
        })}
      />
      {errors.nickname && (
        <p className="mt-3 text-xs text-red-500">{errors.nickname.message}</p>
      )}
    </div>
  );
}

NicknameInput.propTypes = {
  register: propTypes.func.isRequired,
  errors: propTypes.object.isRequired,
};

export default NicknameInput;
