import React from 'react';

import { useNavigate } from 'react-router-dom';

import propTypes from 'prop-types';

import { BsArrowLeftCircle } from 'react-icons/bs';
import { GiMatterStates } from 'react-icons/gi';
import { PiPersonArmsSpreadDuotone } from 'react-icons/pi';
import { MdOutlineAttractions } from 'react-icons/md';
import { GiGasPump } from 'react-icons/gi';
import { GoCodeReview } from 'react-icons/go';

function CategorySection({ activeCategory, handleCategoryClick }) {
  const navigation = useNavigate();

  const handleBack = () => {
    navigation('/list');
  };

  const categories = [
    { name: '현재 상태', icon: <GiMatterStates size={20} /> },
    { name: '인구 정보', icon: <PiPersonArmsSpreadDuotone size={20} /> },
    { name: '문화행사', icon: <MdOutlineAttractions size={20} /> },
    { name: '주차장', icon: <GiGasPump size={20} /> },
    { name: '리뷰 작성', icon: <GoCodeReview size={20} /> },
  ];

  return (
    <>
      <div className="absolute left-44 top-32">
        <button
          className="text-2xl text-zinc-900 hover:text-neutral-500"
          onClick={handleBack}
        >
          <BsArrowLeftCircle size={30} />
        </button>
      </div>
      <div className="absolute left-60 flex flex-col justify-center space-y-9">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`flex flex-col items-center rounded-2xl px-4 py-3 shadow-md ${
              activeCategory === cat.name
                ? 'bg-amber-100 hover:bg-amber-200'
                : 'bg-gray-200 hover:bg-gray-100'
            }`}
            onClick={() => handleCategoryClick(cat.name)}
          >
            {cat.icon}
            <span className="mt-2">{cat.name}</span>
          </button>
        ))}
      </div>
    </>
  );
}

CategorySection.propTypes = {
  activeCategory: propTypes.string.isRequired,
  handleCategoryClick: propTypes.func.isRequired,
};

export default CategorySection;
