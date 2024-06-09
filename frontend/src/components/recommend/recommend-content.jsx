import React from 'react';

import RecommendGrid from './recommend-grid';
import { useRecommendData } from '../../hooks/use-recommend-data';

function RecommendContent() {
  const shuffledData = useRecommendData();
  const singleData = shuffledData.length > 0 ? shuffledData[0] : null;

  return (
    <div className="flex p-3 text-left">
      {singleData && <RecommendGrid item={singleData} />}
    </div>
  );
}

export default RecommendContent;
