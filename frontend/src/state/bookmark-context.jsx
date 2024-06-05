import React, { createContext, useContext, useState } from 'react';

import propTypes from 'prop-types';

const BookmarkContext = createContext();

export const useBookmark = () => useContext(BookmarkContext);

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

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
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

BookmarkProvider.propTypes = {
  children: propTypes.node.isRequired,
};
