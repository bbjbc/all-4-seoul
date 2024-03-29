import React from 'react';

import propTypes from 'prop-types';

function SubmitButton({ text }) {
  return (
    <div className="flex items-center justify-between">
      <button
        className="focus:shadow-outline w-full rounded-md bg-stone-600 px-4 py-2 font-bold text-white hover:bg-zinc-800 focus:outline-none"
        type="submit"
      >
        {text}
      </button>
    </div>
  );
}

SubmitButton.propTypes = {
  text: propTypes.string.isRequired,
};

export default SubmitButton;
