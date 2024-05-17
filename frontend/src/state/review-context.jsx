import React, { createContext, useContext, useState } from 'react';

import propTypes from 'prop-types';

const ReviewContext = createContext();

export const useReview = () => useContext(ReviewContext);

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const removeReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview, removeReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

ReviewProvider.propTypes = {
  children: propTypes.node.isRequired,
};
