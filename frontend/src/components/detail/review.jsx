import React from 'react';

import propTypes from 'prop-types';

function Review({ reviewRef }) {
  return (
    <div className="rounded-xl bg-gray-100 p-4" ref={reviewRef}>
      <h2 className="mb-2 text-lg font-semibold">리뷰 작성</h2>
      <form>
        <textarea
          className="h-32 w-full rounded-md border border-gray-300 p-2"
          placeholder="리뷰를 작성해주세요."
        ></textarea>
        <button
          type="submit"
          className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-blue-700"
        >
          작성하기
        </button>
      </form>
    </div>
  );
}

Review.propTypes = {
  reviewRef: propTypes.object.isRequired,
};

export default Review;
