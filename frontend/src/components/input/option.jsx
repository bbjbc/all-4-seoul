import React from 'react';

import propTypes from 'prop-types';

function Option({ label, id, register, children }) {
  return (
    <div className="mb-6">
      <label
        className="mb-2 flex flex-grow-0 px-3 text-lg font-semibold text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className="block w-full rounded-md border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        id={id}
        {...register(id)}
      >
        {children}
      </select>
    </div>
  );
}

Option.propTypes = {
  label: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  register: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
};

export default Option;
