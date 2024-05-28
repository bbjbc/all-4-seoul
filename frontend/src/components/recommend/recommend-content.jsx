import React from 'react';

import RecommendGrid from './recommend-grid';
import { singleData } from './dummy-data';

function RecommendContent() {
  return (
    <div className="p-3">
      <RecommendGrid item={singleData[0]} />
    </div>
  );
}

export default RecommendContent;
