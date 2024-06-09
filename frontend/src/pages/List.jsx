import React, { useEffect, useState, useCallback } from 'react';

import { useInView } from 'react-intersection-observer';

import PlaceGrid from '../components/places/place-grid';
import ListData from '../data/list-data';
import CategoryBar from '../components/places/category-bar';
import PlaceSearchInput from '../components/places/place-search-input';
import LoadingSpinner from '../components/button/loading-spinner';
import ScrollToTopButton from '../components/button/scroll-to-top-button';

function ListPage() {
  const allCategories = Array.from(
    new Set(['전체보기', ...ListData.map((item) => item.category)]),
  );
  const [selectedCategory, setSelectedCategory] = useState('전체보기');
  const [searchWord, setSearchWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [places, setPlaces] = useState([]);
  const pageSize = 10;
  const [showScrollButton, setShowScrollButton] = useState(false); // 스크롤 버튼 보이는 여부의 상태 관리
  const [scrollButtonVisible, setScrollButtonVisible] = useState(false); // 애니메이션을 넣기 위한 상태 관리

  const loadPlaces = useCallback(() => {
    setLoading(true);
    const allData = ListData.filter((item) => item.name.includes(searchWord));
    const filteredData = allData.filter(
      (item) => item.category === selectedCategory,
    );
    const filteredPlaces =
      selectedCategory === '전체보기' ? allData : filteredData;
    const newPlaces = filteredPlaces.slice(0, page * pageSize);
    setPlaces(newPlaces);
    setLoading(false);
  }, [selectedCategory, searchWord, page, pageSize]);

  useEffect(() => {
    loadPlaces();
  }, [loadPlaces]);

  const changeCategoryHandler = (newCategory) => {
    setSelectedCategory(newCategory);
    setPage(1);
  };

  const searchHandler = (input) => {
    setSearchWord(input);
    setPage(1);
  };

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && !loading) {
      setPage((prev) => prev + 1);
    }
  }, [inView, loading]);

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollButton(true);
        setScrollButtonVisible(true);
      } else {
        setScrollButtonVisible(false);
        setTimeout(() => setShowScrollButton(false), 500);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 이벤트 리스너 해제
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="px-14 py-32">
      <CategoryBar
        categories={allCategories}
        selectedCategory={selectedCategory}
        changeCategory={changeCategoryHandler}
      />
      <PlaceSearchInput onSearchChange={searchHandler} />
      <PlaceGrid places={places} />
      {loading && <LoadingSpinner />}
      <div ref={ref}></div>
      {showScrollButton && (
        <ScrollToTopButton isVisible={scrollButtonVisible} />
      )}
    </div>
  );
}

export default ListPage;
