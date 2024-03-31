import React from 'react';

import { Controller } from 'react-hook-form';
import { format } from 'date-fns';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import propTypes from 'prop-types';

function DateInput({ id, label, placeholder, control, defaultValue }) {
  const formattedDate = (date) => format(date, 'yyyy-MM-dd');

  return (
    <div className="mb-6">
      <label
        className="mb-2 flex flex-grow-0 px-3 text-lg font-semibold text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>
      <Controller
        control={control}
        name={id}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            className="block w-full rounded-md border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id={id}
            placeholderText={placeholder}
            selected={value}
            onChange={(date) => onChange(formattedDate(date))}
            dateFormat="yyyy년 MM월 dd일"
          />
        )}
      />
    </div>
  );
}

DateInput.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  control: propTypes.object.isRequired,
  defaultValue: propTypes.instanceOf(Date),
};

export default DateInput;
