import React from 'react';

import propTypes from 'prop-types';

function Input({
  id,
  label,
  type,
  placeholder,
  register,
  errors,
  errorMessage,
}) {
  return (
    <div className="mb-6">
      <label
        className="mb-2 flex flex-grow-0 px-3 text-lg font-semibold text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="block w-full rounded-md border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id, { required: true })}
      />
      {errors[id] && (
        <p className="mt-3 text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}

Input.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  register: propTypes.func.isRequired,
  errors: propTypes.object.isRequired,
  errorMessage: propTypes.string,
};

export default Input;
