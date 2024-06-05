import React from 'react';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import propTypes from 'prop-types';

import { useBookmark } from '../../state/bookmark-context';
import ModalPortal from '../modal/modal-portal';
import Modal from '../modal/modal';
import { SlLocationPin } from 'react-icons/sl';
import { GrPhone } from 'react-icons/gr';
import { FaStar } from 'react-icons/fa';
import { IoLinkSharp } from 'react-icons/io5';
import { useAuthWithCookies } from '../../hooks/use-auth-with-cookies';
import LoadingSpinner from '../button/loading-spinner';
import quokka from '../../assets/quokka.gif';
import '../../style/star.css';

function PlaceOverlay({ place, onClose, loading }) {
  const navigation = useNavigate();
  const { bookmarks, addBookmark, removeBookmark } = useBookmark();
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
      photoUri: place.firstPhotoUri,
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

  // 별점 표시
  const getStarRating = (rating) => {
    const percentage = (rating / 5) * 100;
    return (
      <div className="star-rating">
        <div className="star-rating-top" style={{ width: `${percentage}%` }}>
          {'★★★★★'}
        </div>
        <div className="star-rating-bottom">{'★★★★★'}</div>
      </div>
    );
  };

  return (
    <ModalPortal>
      <Modal onClose={onClose} height="h-[600px]" width="w-[800px]">
        <article className="overflow-y-auto p-5">
          {loading ? (
            <div className="flex flex-col items-center justify-center">
              <img
                src={quokka}
                alt="로딩중"
                className="h-80 w-80 object-cover"
              />
              <LoadingSpinner text="text-3xl" height="h-10" width="w-10" />
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center">
                <FaStar
                  className="z-50 mr-2 cursor-pointer hover:animate-swingandscale"
                  color={`${isBookmarked ? 'yellow' : 'gray'}`}
                  size={40}
                  onClick={toggleBookmark}
                />
                <h1 className="text-center font-gmarketbold text-3xl text-gray-800">
                  {place.displayNameText}
                </h1>
              </div>

              <div className="mb-4 space-y-2 rounded-md bg-green-200 px-6 py-5 text-stone-900">
                <div className="text-lg font-bold">
                  {place.category_group_name}
                </div>
                <div className="text-sm">{place.category_name}</div>
                <div className="flex items-center text-sm">
                  {getStarRating(place.rating)}
                  <span className="ml-2">
                    {place.rating} (총 {place.userRatingCount}개)
                  </span>
                </div>
              </div>

              <div className="text-md mb-4 space-y-4 text-gray-700">
                <span className="flex flex-row gap-4 font-semibold">
                  <GrPhone size={20} />
                  {place.nationalPhoneNumber === ''
                    ? '전화번호 정보가 존재하지 않습니다.'
                    : place.nationalPhoneNumber}
                </span>
                <span className="flex flex-row gap-4 font-semibold">
                  <SlLocationPin size={20} />
                  {place.formattedAddress === ''
                    ? '주소 정보가 존재하지 않습니다.'
                    : place.formattedAddress}
                </span>
                <span className="flex flex-row gap-4 font-semibold">
                  <IoLinkSharp size={20} />
                  {place.websiteUri === '' ? (
                    '웹사이트 URL 정보가 존재하지 않습니다.'
                  ) : (
                    <a
                      href={place.websiteUri}
                      target="_blank"
                      rel="noreferrer"
                      title={place.websiteUri}
                      className="underline transition duration-300 hover:text-blue-500 hover:underline"
                    >
                      {place.displayNameText}
                    </a>
                  )}
                </span>
              </div>

              {/* 사진 정보 */}
              {place.firstPhotoUri ? (
                <div className="mb-4">
                  <img
                    src={place.firstPhotoUri}
                    alt={place.place_name}
                    className="h-96 w-full rounded-lg object-cover shadow-md"
                  />
                </div>
              ) : (
                <div className="mb-4 mt-12 animate-bounce text-center text-gray-500">
                  사진 정보가 존재하지 않습니다.
                </div>
              )}

              {/* 리뷰 정보 */}
              <div className="mb-4 mt-12 rounded-lg bg-slate-50 p-4 shadow-lg">
                <h2 className="mb-2 text-lg font-semibold">
                  사용자 리뷰 ({(place.reviews && place.reviews.length) || 0}개)
                </h2>
                {place.reviews && place.reviews.length > 0 ? (
                  place.reviews.map((review, index) => {
                    // 한국 날짜로 변환
                    const publishDate = new Date(
                      review.publishTime,
                    ).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    });

                    // 작성한 지 얼마나 되었는지 계산
                    const publishYearAgo =
                      new Date().getFullYear() -
                      new Date(review.publishTime).getFullYear();
                    const relativePublishTimeDescription =
                      publishYearAgo > 0
                        ? `${publishYearAgo}년 전`
                        : '작성한 지 얼마 안 됨';

                    return (
                      <div
                        key={index}
                        className="mb-4 rounded-lg bg-white p-4 shadow-md"
                      >
                        <div className="mb-2 flex items-center">
                          <span className="mr-2 font-semibold">
                            {review.displayName}
                          </span>
                          <span>{getStarRating(review.rating)}</span>
                        </div>
                        <p className="mb-1 text-sm text-gray-700">
                          {review.text}
                        </p>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{publishDate}</span>
                          <span>{relativePublishTimeDescription}</span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-sm text-gray-500">
                    리뷰가 존재하지 않습니다.
                  </div>
                )}
              </div>
            </>
          )}
        </article>
      </Modal>
    </ModalPortal>
  );
}

PlaceOverlay.propTypes = {
  place: propTypes.object,
  onClose: propTypes.func.isRequired,
  loading: propTypes.bool,
};

export default PlaceOverlay;
