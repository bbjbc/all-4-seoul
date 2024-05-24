import React, { createContext, useContext, useState } from 'react';

import propTypes from 'prop-types';

import cafeImg from '../assets/overlay/cafe.jpg';
import parkingImg from '../assets/overlay/parking.jpg';
import gasImg from '../assets/overlay/gas.jpg';
import foodImg from '../assets/overlay/food.jpg';
import attractionsImg from '../assets/overlay/attractions.jpg';
import cultureImg from '../assets/overlay/culture.jpg';

const BookmarkContext = createContext();

export const useBookmark = () => useContext(BookmarkContext);

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const images = {
    cafe: cafeImg,
    parking: parkingImg,
    gas: gasImg,
    food: foodImg,
    attractions: attractionsImg,
    culture: cultureImg,
  };

  const addBookmark = (bookmark) => {
    setBookmarks([...bookmarks, bookmark]);
  };

  const removeBookmark = (ids) => {
    const idsToRemove = Array.isArray(ids) ? ids : [ids];
    setBookmarks(
      bookmarks.filter((bookmark) => !idsToRemove.includes(bookmark.id)),
    );
  };

  const getBookmarksByType = (type) => {
    return bookmarks.filter((bookmark) => bookmark.type === type);
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
        getBookmarksByType,
        images,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

BookmarkProvider.propTypes = {
  children: propTypes.node.isRequired,
};
