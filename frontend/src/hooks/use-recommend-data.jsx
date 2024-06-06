import { useState, useEffect } from 'react';

import ListData from '../data/list-data';
import {
  shuffleArray,
  getRandomReviews,
  getRandomPrice,
} from '../components/recommend/recommend-func';

export function useRecommendData() {
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    const recommendData = ListData.map((item) => ({
      name: item.name,
      category: item.category,
      description: item.ENG_NM,
      reviews: getRandomReviews(),
      averagePrice: getRandomPrice(),
      imageUrl: item.images,
    }));
    const shuffled = shuffleArray(recommendData).slice(0, 10);
    setShuffledData(shuffled);
  }, []);

  return shuffledData;
}
