import React from 'react';

import RecommendGrid from './recommend-grid';
import { multipleData } from './dummy-data';

function RecommendContents() {
  return (
    <div className="m-4 h-3/4 overflow-y-auto rounded-lg bg-gray-100 p-6">
      <h1 className="mb-6 text-xl font-bold">
        All For Seoul&apos;s PICK!{' '}
        <span className="text-gray-500">({multipleData.length}개)</span>
      </h1>
      <div className="mb-6 flex flex-col gap-6">
        {multipleData.map((item, index) => (
          <RecommendGrid key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default RecommendContents;
