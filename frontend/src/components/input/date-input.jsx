import React from 'react';

import { Controller } from 'react-hook-form';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, getMonth, getYear } from 'date-fns';
import { IoMdArrowDropleftCircle } from 'react-icons/io';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import propTypes from 'prop-types';

function DateInput({ id, label, placeholder, control, defaultValue }) {
  const formattedDate = (date) => format(date, 'yyyy-MM-dd');
  const years = Array.from(
    { length: getYear(new Date()) - 1979 },
    (_, index) => 1980 + index,
  );
  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

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
            className="rounded-md border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id={id}
            placeholderText={placeholder}
            selected={value}
            maxDate={new Date()}
            onChange={(date) => onChange(formattedDate(date))}
            dateFormat="yyyy년 MM월 dd일"
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className="m-2 flex justify-center space-x-4">
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  className="text-2xl font-extrabold hover:text-sky-800"
                >
                  <IoMdArrowDropleftCircle />
                </button>
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) => changeYear(value)}
                  className="rounded-md font-semibold leading-tight text-gray-900"
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <select
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                  className="rounded-md font-semibold leading-tight text-gray-900"
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  className="text-2xl font-extrabold hover:text-sky-800"
                >
                  <IoMdArrowDroprightCircle />
                </button>
              </div>
            )}
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
