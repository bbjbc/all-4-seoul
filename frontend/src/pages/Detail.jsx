import React, { useState, useRef } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import RealTimePopulation from '../components/detail/real-time-population';
import CategorySection from '../components/detail/category-section';
import DetailItem from '../components/detail/detail-item';
import PopulationInfo from '../components/detail/population-info';
import WeatherInfo from '../components/detail/weather-info';
import CultureEvent from '../components/detail/culture-event';
import ParkingInfo from '../components/detail/parking-info';
import Review from '../components/detail/review';
import { IoIosArrowBack } from 'react-icons/io';

function PlaceDetailPage() {
  const navigation = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);

  const { id } = useParams();
  const decodedName = decodeURIComponent(id);

  const realTimeRef = useRef(null);
  const populationRef = useRef(null);
  const weatherRef = useRef(null);
  const cultureRef = useRef(null);
  const parkingRef = useRef(null);
  const reviewRef = useRef(null);

  const handleCategoryClick = (category, ref) => {
    setActiveCategory(category);
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(ref.current);
  };

  const handleBack = () => {
    navigation('/list');
  };

  return (
    <>
      <div className="relative flex animate-fadein items-center justify-center px-4 py-36">
        <div className="absolute left-40 top-28">
          <button
            className="text-md flex flex-row text-zinc-900 hover:text-neutral-500"
            onClick={handleBack}
          >
            <IoIosArrowBack size={20} />
            뒤로가기
          </button>
        </div>
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
        <DetailItem decodedName={decodedName} />
      </div>

      <div className="flex items-center justify-center">
        <div className="mx-10 flex w-3/5 flex-col items-center justify-center space-y-10">
          <RealTimePopulation
            name={decodedName}
            congestionLevel="보통"
            realtimeRef={realTimeRef}
          />
          <PopulationInfo populationRef={populationRef} />
          <WeatherInfo weatherRef={weatherRef} />
          <CultureEvent cultureRef={cultureRef} />
          <ParkingInfo parkingRef={parkingRef} />
          <Review reviewRef={reviewRef} />
        </div>
      </div>
    </>
  );
}

export default PlaceDetailPage;
