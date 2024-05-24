import React from 'react';

import propTypes from 'prop-types';

function NameInput({ register, errors, disabled }) {
  return (
    <div className="mb-6">
      <label
        className="mb-2 flex flex-grow-0 px-3 text-lg font-semibold text-gray-700"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="block w-full rounded-md border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        id="name"
        type="text"
        placeholder="이름을 입력해주세요."
        {...register('name', {
          required: '이름을 입력해주세요.',
          minLength: { value: 3, message: '이름은 3자 이상이어야 합니다.' },
          maxLength: { value: 20, message: '이름은 20자 이하여야 합니다.' },
        })}
        disabled={disabled}
      />
      {errors.name && (
        <p className="mt-3 text-xs text-red-500">{errors.name.message}</p>
      )}
    </div>
  );
}

NameInput.propTypes = {
  register: propTypes.func.isRequired,
  errors: propTypes.object.isRequired,
  disabled: propTypes.bool,
};

export default NameInput;
