import React, { useState, useRef, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import RealTimePopulation from '../components/detail/realtime/real-time-population';
import CategorySection from '../components/detail/main/category-section';
import DetailLayout from '../components/detail/main/detail-layout';
import DetailItem from '../components/detail/main/detail-item';
import PopulationInfo from '../components/detail/population/population-info';
import WeatherInfo from '../components/detail/weather/weather-info';
import CultureEvent from '../components/detail/event/culture-event';
import ParkingInfo from '../components/detail/parking/parking-info';
import Review from '../components/detail/review/review';

function PlaceDetailPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      const y = ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
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
      <DetailLayout isLoading={isLoading}>
        <DetailItem decodedName={decodedName} setIsLoading={setIsLoading} />
      </DetailLayout>
      <DetailLayout>
        <RealTimePopulation
          name={decodedName}
          congestionLevel="보통"
          realtimeRef={realTimeRef}
        />
      </DetailLayout>
      <DetailLayout>
        <PopulationInfo populationRef={populationRef} />
      </DetailLayout>
      <DetailLayout>
        <CultureEvent cultureRef={cultureRef} name={decodedName} />
      </DetailLayout>
      <DetailLayout>
        <WeatherInfo weatherRef={weatherRef} name={decodedName} />
      </DetailLayout>
      <DetailLayout>
        <ParkingInfo parkingRef={parkingRef} name={decodedName} />
      </DetailLayout>
      <DetailLayout>
        <Review reviewRef={reviewRef} name={decodedName} />
      </DetailLayout>
    </>
  );
}

export default PlaceDetailPage;
