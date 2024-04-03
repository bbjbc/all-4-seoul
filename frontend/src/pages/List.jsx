import React, { useState } from 'react';

import PlaceGrid from '../components/places/place-grid';
import ListData from '../data/list-data';
import CategoryBar from '../components/places/category-bar';
import PlaceSearchInput from '../components/places/place-search-input';

function ListPage() {
  const allCategories = Array.from(
    new Set(['전체보기', ...ListData.map((item) => item.category)]),
  );
  const [selectedCategory, setSelectedCategory] = useState('전체보기');
  const [searchWord, setSearchWord] = useState('');

  const changeCategoryHandler = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const filteredPlaces =
    selectedCategory === '전체보기'
      ? ListData.filter((item) => item.name.includes(searchWord))
      : ListData.filter(
          (item) =>
            item.category === selectedCategory &&
            item.name.includes(searchWord),
        );

  const searchHandler = (input) => {
    setSearchWord(input);
  };

  return (
    <div className="px-14 py-32">
      <CategoryBar
        categories={allCategories}
        selectedCategory={selectedCategory}
        changeCategory={changeCategoryHandler}
      />
      <PlaceSearchInput onSearchChange={searchHandler} />
      <PlaceGrid places={filteredPlaces} />
    </div>
  );
}

export default ListPage;
