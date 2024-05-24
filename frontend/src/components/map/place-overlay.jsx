import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import propTypes from 'prop-types';

import { useBookmark } from '../../state/bookmark-context';
import ModalPortal from '../modal/modal-portal';
import Modal from '../modal/modal';
import { SlLocationPin } from 'react-icons/sl';
import { GrPhone } from 'react-icons/gr';
import { GiRoad } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa';
import { useAuthWithCookies } from '../../hooks/use-auth-with-cookies';

function PlaceOverlay({ place, onClose }) {
  const navigation = useNavigate();
  const { bookmarks, addBookmark, removeBookmark, images } = useBookmark();
  const isBookmarked = bookmarks.some(
    (bookmark) => bookmark.id === place.id && bookmark.type === 'placeOverlay',
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
      place_name: place.place_name,
      id: place.id,
      type: 'placeOverlay',
      image: image,
    };
    if (isBookmarked) {
      removeBookmark(place.id);
      Swal.fire({
        icon: 'success',
        title: '북마크 삭제 완료',
        text: `${place.place_name}이(가) 북마크에서 삭제되었습니다.`,
      });
    } else {
      addBookmark(bookmarkData);
      Swal.fire({
        icon: 'success',
        title: '북마크 추가 완료',
        text: `${place.place_name}이(가) 북마크에 추가되었습니다.`,
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

  let image = null;
  switch (place.category_group_name) {
    case '카페':
      image = images.cafe;
      break;
    case '주차장':
      image = images.parking;
      break;
    case '주유소,충전소':
      image = images.gas;
      break;
    case '음식점':
      image = images.food;
      break;
    case '관광명소':
      image = images.attractions;
      break;
    case '문화시설':
      image = images.culture;
      break;
    default:
      image = null;
      break;
  }

  return (
    <ModalPortal>
      <Modal onClose={onClose} height="h-[600px]">
        <article className="overflow-y-auto p-5">
          <div className="mb-6 flex items-center">
            <FaStar
              className="z-50 mr-2 cursor-pointer hover:animate-swingandscale"
              color={`${isBookmarked ? 'yellow' : 'gray'}`}
              size={40}
              onClick={toggleBookmark}
            />
            <h1 className="text-center font-gmarketbold text-3xl text-gray-800">
              {place.places[0].displayName}
            </h1>
          </div>

          <div className="mb-4 space-y-2 rounded-md bg-green-200 px-6 py-5 text-stone-900">
            <div className="text-lg font-bold">{place.category_group_name}</div>
            <div className="text-sm">{place.category_name}</div>
            <div className="text-sm">{place.places[0].websiteUri}</div>
          </div>

          <div className="text-md mb-4 space-y-4 text-gray-700">
            <span className="flex flex-row gap-4 font-semibold">
              <GrPhone size={20} />
              {place.phone === ''
                ? '전화번호 정보가 존재하지 않습니다.'
                : place.phone}
            </span>
            <span className="flex flex-row gap-4 font-semibold">
              <SlLocationPin size={20} />
              {place.address_name === ''
                ? '주소 정보가 존재하지 않습니다.'
                : place.address_name}
            </span>
            <span className="flex flex-row gap-4 font-semibold">
              <GiRoad size={20} />
              {place.road_address_name === ''
                ? '도로명 주소 정보가 존재하지 않습니다.'
                : place.road_address_name}
            </span>
          </div>

          {image && (
            <div className="mb-4">
              <img
                src={image}
                alt={place.place_name}
                className="h-96 w-full rounded-lg object-cover shadow-md"
              />
            </div>
          )}
          <Link to={`/list/${place.place_name}`}>
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

PlaceOverlay.propTypes = {
  place: propTypes.object,
  onClose: propTypes.func.isRequired,
};

export default PlaceOverlay;
