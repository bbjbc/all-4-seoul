import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import ListData from '../data/list-data';
import LoadingSpinner from '../components/button/loading-spinner';

function PlaceDetailPage() {
  const navigation = useNavigate();
  const [placeData, setPlaceData] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const { id } = useParams();
  const decodedName = decodeURIComponent(id);
  const scrollRef = useRef(null);

  useEffect(() => {
    const selectedPlace = ListData.find(
      (item) =>
        item.name.trim().toLowerCase() === decodedName.trim().toLowerCase(),
    );
    if (selectedPlace) {
      setPlaceData(selectedPlace);
    } else {
      console.error('Place not found');
    }
  }, [decodedName]);

  const handleBack = () => {
    navigation('/list');
  };

  const categories = [
    '현재 상태',
    '인구 정보',
    '문화행사',
    '주차장',
    '리뷰 작성',
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (!placeData) {
    return <LoadingSpinner />;
  }

  const { category, images } = placeData;

  return (
    <>
      <div className="relative flex animate-fadein flex-row items-center justify-center space-x-8 px-20 py-36">
        <button
          className="fixed left-32 top-32 text-2xl text-blue-500 hover:text-blue-700"
          onClick={handleBack}
        >
          <BsArrowLeftCircle size={30} />
        </button>
        {/* 카테고리 섹션 */}
        <div className="flex flex-col justify-center space-y-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`rounded-xl px-4 py-5 text-white ${
                activeCategory === cat
                  ? 'bg-blue-500 hover:bg-blue-700'
                  : 'bg-gray-400 hover:bg-gray-700'
              }`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* 이미지 섹션 */}
        <div className="w-full flex-shrink-0 overflow-hidden rounded-xl shadow-lg md:w-1/2">
          <img
            src={images}
            alt={decodedName}
            className="h-96 w-full object-cover"
          />
          <div className="bg-white p-6">
            <h1 className="text-center text-3xl font-semibold">
              {decodedName}
            </h1>
            <p className="text-center text-xs text-gray-400">
              {placeData.ENG_NM}
            </p>
            <p className="mt-4 text-center text-gray-600">{category}</p>
          </div>
        </div>
      </div>

      {/* 카테고리별 정보 */}
      <div className="flex justify-center">
        <div
          className="flex w-full max-w-xl flex-col space-y-4 md:w-1/2"
          ref={scrollRef}
        >
          {/* 현재 상태 */}
          <div className="rounded-xl bg-gray-100 p-4">
            <h2 className="mb-2 text-lg font-semibold">현재 상태</h2>
            <p>
              지금 <strong>{decodedName}</strong>은 붐빔입니다.
            </p>
          </div>

          {/* 인구정보 */}
          <div className="rounded-xl bg-gray-100 p-4">
            <div className="mb-4">
              <h3 className="text-md mb-2 font-semibold">실시간 인구정보</h3>
            </div>
            <div>
              <h3 className="text-md mb-2 font-semibold">날씨 정보</h3>
            </div>
          </div>
          {/* 문화행사 */}
          <div className="rounded-xl bg-gray-100 p-4">
            <h2 className="mb-2 text-lg font-semibold">문화행사</h2>
          </div>
          {/* 주차장 */}
          <div className="rounded-xl bg-gray-100 p-4">
            <h2 className="mb-2 text-lg font-semibold">주차장 정보</h2>
            <p>주차 가능한 공간이 있습니다.</p>
          </div>
          {/* 리뷰 작성 */}
          <div className="rounded-xl bg-gray-100 p-4">
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
        </div>
      </div>
    </>
  );
}

export default PlaceDetailPage;
