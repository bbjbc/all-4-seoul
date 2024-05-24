import React, { createContext, useContext, useState } from 'react';

import axios from 'axios';

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

  const addBookmark = async (bookmark) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/users/bookmarks',
        bookmark,
        {
          withCredentials: true,
        },
      );
      console.log(response);
      setBookmarks([...bookmarks, bookmark]);
    } catch (error) {
      console.error('북마크를 추가하는 중 오류가 발생했습니다.', error);
    }
  };

  const removeBookmark = async (ids) => {
    try {
      const response = await axios.delete(
        'http://localhost:8080/users/bookmarks',
        {
          data: { ids },
          withCredentials: true,
        },
      );
      console.log(response);
      const idsToRemove = Array.isArray(ids) ? ids : [ids];
      setBookmarks(
        bookmarks.filter((bookmark) => !idsToRemove.includes(bookmark.id)),
      );
    } catch (error) {
      console.error('북마크를 삭제하는 중 오류가 발생했습니다.', error);
    }
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
