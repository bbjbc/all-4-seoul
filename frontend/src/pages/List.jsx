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

  const allData = ListData.filter((item) => item.name.includes(searchWord));
  const filteredData = allData.filter(
    (item) => item.category === selectedCategory,
  );

  const loadPlaces = useCallback(() => {
    setLoading(true);
    const filteredPlaces =
      selectedCategory === '전체보기' ? allData : filteredData;
    const newPlaces = filteredPlaces.slice(0, page * pageSize);
    setPlaces(newPlaces);
    setLoading(false);
  }, [selectedCategory, allData, filteredData, page, pageSize]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <ScrollToTopButton />
    </div>
  );
}

export default ListPage;
