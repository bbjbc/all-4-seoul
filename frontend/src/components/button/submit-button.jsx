import React from 'react';

import propTypes from 'prop-types';

function SubmitButton({ text, disabled }) {
  return (
    <div className="flex items-center justify-between">
      <button
        className={`focus:shadow-outline w-full rounded-md px-4 py-2 font-bold text-white ${
          disabled
            ? 'cursor-not-allowed bg-stone-300'
            : 'bg-stone-600 hover:bg-zinc-800'
        }`}
        type="submit"
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
}

SubmitButton.propTypes = {
  text: propTypes.string.isRequired,
  disabled: propTypes.bool,
};

export default SubmitButton;
