import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import propTypes from 'prop-types';

import { useBookmark } from '../../state/bookmark-context';
import ModalPortal from '../modal/modal-portal';
import Modal from '../modal/modal';
import { FaStar } from 'react-icons/fa';
import { useAuthWithCookies } from '../../hooks/use-auth-with-cookies';

function ListPlaceOverlay({ place, onClose }) {
  const navigation = useNavigate();
  const { bookmarks, addBookmark, removeBookmark } = useBookmark();
  const isBookmarked = bookmarks.some(
    (bookmark) =>
      bookmark.id === place.NO && bookmark.type === 'listPlaceOverlay',
  );
  const { isLoggedIn } = useAuthWithCookies();

  const toggleBookmark = () => {
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

    const bookmarkData = {
      name: place.name,
      id: place.NO,
      type: 'listPlaceOverlay',
      images: place.images,
    };
    if (isBookmarked) {
      removeBookmark(place.NO);
      Swal.fire({
        icon: 'success',
        title: '북마크 삭제 완료',
        text: `${place.name}이(가) 북마크에서 삭제되었습니다.`,
      });
    } else {
      addBookmark(bookmarkData);
      Swal.fire({
        icon: 'success',
        title: '북마크 추가 완료',
        text: `${place.name}이(가) 북마크에 추가되었습니다.`,
        showCancelButton: true,
        confirmButtonText: '북마크 페이지로 이동',
        cancelButtonText: '확인',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
          onClose();
          navigation('/mypage/bookmarked');
        }
      });
    }
  };

  return (
    <ModalPortal>
      <Modal onClose={onClose} height="h-4/5">
        <article className="overflow-y-auto p-5" key={place.NO}>
          <div className="mb-6 flex items-center">
            <FaStar
              className="z-50 mr-2 cursor-pointer hover:animate-swingandscale"
              color={`${isBookmarked ? 'yellow' : 'gray'}`}
              size={40}
              onClick={toggleBookmark}
            />
            <h1 className="text-center font-gmarketbold text-3xl text-gray-800">
              {place.name}
            </h1>
          </div>

          <div className="mb-4 space-y-2 rounded-md bg-green-200 px-6 py-5 text-stone-900">
            <div className="text-lg font-bold">{place.category}</div>
            <div className="text-sm">{place.AREA_CD}</div>
          </div>
          <div className="mb-4">
            <img
              src={place.images}
              alt={place.name}
              className="h-96 w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <Link to={`/list/${place.name}`}>
            <div className="flex w-full justify-end text-center">
              <div className="w-full rounded-md bg-green-500 p-2 text-stone-900 transition-all duration-200 ease-in-out hover:bg-green-400">
                상세 페이지 보기
              </div>
            </div>
          </Link>
        </article>
      </Modal>
    </ModalPortal>
  );
}

ListPlaceOverlay.propTypes = {
  onClose: propTypes.func.isRequired,
  place: propTypes.object.isRequired,
};

export default ListPlaceOverlay;
