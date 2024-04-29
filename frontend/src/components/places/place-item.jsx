import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import propTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { useBookmark } from '../../state/bookmark-context';

function PlaceItem({ id, name, category, images }) {
  const navigation = useNavigate();
  const [showBookmarkMessage, setShowBookmarkMessage] = useState(false);
  const { bookmarks, addBookmark, removeBookmark } = useBookmark();

  const handleClick = () => {
    const encodedName = encodeURIComponent(name);
    navigation(`/list/${encodedName}`);
  };

  const isLoggedIn = () => {
    return !!localStorage.getItem('id');
  };

  const toggleBookmark = () => {
    if (!isLoggedIn()) {
      Swal.fire({
        title: 'Watch Out!',
        text: '로그인 후 이용해주세요!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '로그인하기',
        cancelButtonText: '싫어요',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
          navigation('/login');
        }
      });
      return;
    }

    if (bookmarks.some((bookmark) => bookmark.id === id)) {
      removeBookmark(id);
      setShowBookmarkMessage(true);
      setTimeout(() => setShowBookmarkMessage(false), 2000);
    } else {
      addBookmark({ id, name, category, images });
      setShowBookmarkMessage(true);
      setTimeout(() => setShowBookmarkMessage(false), 2000);
    }
  };

  const isBookmarked = bookmarks.some((bookmark) => bookmark.id === id);

  return (
    <>
      {showBookmarkMessage && (
        <div
          className={`absolute left-6 top-6 animate-slidein rounded-md ${isBookmarked ? 'bg-green-500' : 'bg-red-500'} p-2 text-white shadow-md`}
        >
          <p className="text-md font-semibold">
            {isBookmarked
              ? '북마크에 추가되었습니다!'
              : '북마크에서 삭제되었습니다!'}
          </p>
        </div>
      )}

      <FaStar
        className="absolute right-6 top-6 z-50 cursor-pointer hover:animate-swingandscale"
        color={`${isBookmarked ? 'yellow' : 'white'}`}
        size={40}
        onClick={toggleBookmark}
      />

      <article
        className="flex cursor-pointer flex-col items-center rounded-xl bg-white shadow-xl"
        onClick={handleClick}
        role="presentation"
      >
        <header className="h-auto w-auto overflow-hidden">
          <img
            src={images}
            alt={name}
            className="h-full w-full rounded-t-xl object-cover"
          />
        </header>
        <div className="p-4 text-center">
          <p className="text-sm text-gray-600">{category}</p>
          <h2 className="mt-2 text-xl font-semibold">{name}</h2>
        </div>
      </article>
    </>
  );
}

PlaceItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  images: propTypes.string.isRequired,
};

export default PlaceItem;
