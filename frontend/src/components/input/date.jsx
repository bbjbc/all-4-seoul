import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import propTypes from 'prop-types';

function Date({ id, label, placeholder, register, errors, errorMessage }) {
  const [selected, setSelected] = useState(null);

  const handleChange = (date) => {
    setSelected(date);
    register(id, { required: true });
  };

  return (
    <div className="mb-6">
      <label
        className="mb-2 flex flex-grow-0 px-3 text-lg font-semibold text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>
      <DatePicker
        className="block w-full rounded-md border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        id={id}
        placeholderText={placeholder}
        selected={selected}
        onSelect={(date) => handleChange(date)}
        dateFormat="yyyy/MM/dd"
      />
      {errors[id] && (
        <p className="mt-3 text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}

Date.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  errors: propTypes.object.isRequired,
  register: propTypes.func.isRequired,
  errorMessage: propTypes.string,
};

export default Date;
