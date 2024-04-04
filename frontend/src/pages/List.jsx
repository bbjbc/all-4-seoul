import React, { useEffect, useState, useCallback } from 'react';

import { useInView } from 'react-intersection-observer';

import PlaceGrid from '../components/places/place-grid';
import ListData from '../data/list-data';
import CategoryBar from '../components/places/category-bar';
import PlaceSearchInput from '../components/places/place-search-input';
import LoadingSpinner from '../components/button/loading-spinner';

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

  const loadPlaces = useCallback(() => {
    setLoading(true);
    const filteredPlaces =
      selectedCategory === '전체보기'
        ? ListData.filter((item) => item.name.includes(searchWord))
        : ListData.filter(
            (item) =>
              item.category === selectedCategory &&
              item.name.includes(searchWord),
          );
    const newPlaces = filteredPlaces.slice(0, page * pageSize);
    setPlaces(newPlaces);
    setLoading(false);
  }, [selectedCategory, searchWord, page, pageSize]);

  useEffect(() => {
    loadPlaces();
  }, [selectedCategory, searchWord, page, pageSize, loadPlaces]);

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
    </div>
  );
}

export default ListPage;
