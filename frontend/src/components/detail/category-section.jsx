import React from 'react';

import propTypes from 'prop-types';

import { GiMatterStates } from 'react-icons/gi';
import { PiPersonArmsSpreadDuotone } from 'react-icons/pi';
import { MdOutlineAttractions } from 'react-icons/md';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { RiParkingLine } from 'react-icons/ri';
import { GoCodeReview } from 'react-icons/go';

function CategorySection({ activeCategory, handleCategoryClick, refs }) {
  const categories = [
    {
      name: '현재 상태',
      icon: <GiMatterStates size={20} />,
      ref: refs['현재 상태'],
    },
    {
      name: '인구 정보',
      icon: <PiPersonArmsSpreadDuotone size={20} />,
      ref: refs['인구 정보'],
    },
    {
      name: '문화행사',
      icon: <MdOutlineAttractions size={20} />,
      ref: refs['문화 행사'],
    },
    {
      name: '날씨 정보',
      icon: <TiWeatherPartlySunny size={20} />,
      ref: refs['날씨 정보'],
    },
    {
      name: '주차장',
      icon: <RiParkingLine size={20} />,
      ref: refs['주차장 정보'],
    },
    {
      name: '리뷰 작성',
      icon: <GoCodeReview size={20} />,
      ref: refs['리뷰 작성'],
    },
  ];

  return (
    <>
      <div className="fixed left-0 top-12 z-50 h-full overflow-y-auto bg-white bg-opacity-90 p-1">
        <div className="flex flex-col space-y-10">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`flex flex-col items-center rounded-lg px-4 py-2 ${
                activeCategory === cat.name
                  ? 'bg-amber-100 hover:bg-amber-200'
                  : 'hover:bg-slate-200'
              }`}
              onClick={() => handleCategoryClick(cat.name, cat.ref)}
            >
              {cat.icon}
              <span className="mt-2">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

CategorySection.propTypes = {
  activeCategory: propTypes.string.isRequired,
  handleCategoryClick: propTypes.func.isRequired,
  refs: propTypes.object.isRequired,
};

export default CategorySection;
