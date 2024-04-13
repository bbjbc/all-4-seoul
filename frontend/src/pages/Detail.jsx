import React, { useState, useRef } from 'react';

import { useParams } from 'react-router-dom';

import RealTimePopulation from '../components/detail/real-time-population';
import CategorySection from '../components/detail/category-section';
import DetailItem from '../components/detail/detail-item';

function PlaceDetailPage() {
  const [activeCategory, setActiveCategory] = useState(null);

  const { id } = useParams();
  const decodedName = decodeURIComponent(id);
  const scrollRef = useRef(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="relative flex animate-fadein items-center justify-center px-4 py-36">
        <CategorySection
          activeCategory={activeCategory}
          handleCategoryClick={handleCategoryClick}
        />
        <DetailItem decodedName={decodedName} />
      </div>

      <div className="flex items-center justify-center">
        <div
          className="mx-10 flex w-3/5 flex-col items-center justify-center space-y-10"
          ref={scrollRef}
        >
          {/* 현재 상태 */}
          <RealTimePopulation name={decodedName} congestionLevel="보통" />

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
