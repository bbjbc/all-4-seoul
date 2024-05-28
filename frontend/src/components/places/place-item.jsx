import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import propTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { useBookmark } from '../../state/bookmark-context';
import { useAuthWithCookies } from '../../hooks/use-auth-with-cookies';

function PlaceItem({ id, name, category, images }) {
  const navigation = useNavigate();
  const [showBookmarkMessage, setShowBookmarkMessage] = useState(false);
  const { bookmarks, addBookmark, removeBookmark } = useBookmark();
  const { isLoggedIn } = useAuthWithCookies();

  const handleClick = () => {
    const encodedName = encodeURIComponent(name);
    navigation(`/list/${encodedName}`);
  };

  const toggleBookmark = (e) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      Swal.fire({
        title: '로그인 후 이용해주세요!',
        text: '북마크를 사용하려면 로그인이 필요합니다.',
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
      addBookmark({ id, name, category, images, type: 'placeItem' });
      setShowBookmarkMessage(true);
      setTimeout(() => setShowBookmarkMessage(false), 2000);
    }
  };

  const isBookmarked = bookmarks.some((bookmark) => bookmark.id === id);

  return (
    <>
      <article
        className="flex cursor-pointer flex-col items-center rounded-xl bg-white shadow-xl duration-500 hover:scale-105"
        onClick={handleClick}
        role="presentation"
      >
        {/* 북마크 메시지 */}
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

        {/* 북마크 버튼 */}
        <FaStar
          className="absolute right-6 top-6 z-50 cursor-pointer hover:animate-swingandscale"
          color={`${isBookmarked ? 'yellow' : 'white'}`}
          size={40}
          onClick={toggleBookmark}
        />

        {/* 이미지 */}
        <header className="h-auto w-auto overflow-hidden">
          <img
            src={images}
            alt={name}
            className="h-full w-full rounded-t-xl object-cover"
          />
        </header>

        {/* 내용 */}
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
