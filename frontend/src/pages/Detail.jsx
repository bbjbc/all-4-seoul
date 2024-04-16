import React, { useState, useRef, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import RealTimePopulation from '../components/detail/real-time-population';
import CategorySection from '../components/detail/category-section';
import DetailItem from '../components/detail/detail-item';
import PopulationInfo from '../components/detail/population-info';
import WeatherInfo from '../components/detail/weather-info';
import CultureEvent from '../components/detail/culture-event';
import ParkingInfo from '../components/detail/parking-info';
import Review from '../components/detail/review';
import { IoArrowBack } from 'react-icons/io5';

function PlaceDetailPage() {
  const navigation = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);

  const { id } = useParams();
  const decodedName = decodeURIComponent(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [decodedName]);

  const realTimeRef = useRef(null);
  const populationRef = useRef(null);
  const weatherRef = useRef(null);
  const cultureRef = useRef(null);
  const parkingRef = useRef(null);
  const reviewRef = useRef(null);

  const handleCategoryClick = (category, ref) => {
    setActiveCategory(category);
    if (ref && ref.current) {
      const yOffset = -90;
      const y =
        ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    navigation('/list');
  };

  return (
    <>
      <div className="flex h-screen">
        <CategorySection
          activeCategory={activeCategory}
          handleCategoryClick={handleCategoryClick}
          refs={{
            '현재 상태': realTimeRef,
            '인구 정보': populationRef,
            '문화 행사': cultureRef,
            '날씨 정보': weatherRef,
            '주차장 정보': parkingRef,
            '리뷰 작성': reviewRef,
          }}
        />
        <div className="relative flex-grow animate-slidein">
          <div className="absolute left-32 top-20 z-50">
            <button
              className="text-md flex flex-row rounded-lg px-2 py-1 text-white transition-all duration-200 ease-in-out hover:bg-teal-700"
              onClick={handleBack}
            >
              <IoArrowBack size={20} />
              뒤로가기
            </button>
          </div>
          <DetailItem decodedName={decodedName} />
        </div>
      </div>

      <div className="mt-24 flex items-center justify-center">
        <div className="mx-10 flex w-3/5 flex-col items-center justify-center space-y-10">
          <RealTimePopulation
            name={decodedName}
            congestionLevel="보통"
            realtimeRef={realTimeRef}
          />
          <PopulationInfo populationRef={populationRef} />
          <CultureEvent cultureRef={cultureRef} />
          <WeatherInfo weatherRef={weatherRef} />
          <ParkingInfo parkingRef={parkingRef} />
          <Review reviewRef={reviewRef} />
        </div>
      </div>
    </>
  );
}

export default PlaceDetailPage;
