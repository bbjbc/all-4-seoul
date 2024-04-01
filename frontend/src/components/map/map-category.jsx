import React from 'react';

import CategoryButton from '../button/category-button';

import propTypes from 'prop-types';

import { LuParkingCircle } from 'react-icons/lu';
import { MdOutlineLocalCafe } from 'react-icons/md';
import { RiRestaurantLine } from 'react-icons/ri';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { PiPersonArmsSpreadDuotone } from 'react-icons/pi';

function MapCategory({ setSelectedCategory }) {
  return (
    <div className="absolute left-16 top-20 z-20 flex gap-3">
      <CategoryButton
        icon={LuParkingCircle}
        text="주차장"
        onClick={() => setSelectedCategory('carpark')}
      />
      <CategoryButton
        icon={MdOutlineLocalCafe}
        text="카페"
        onClick={() => setSelectedCategory('coffee')}
      />
      <CategoryButton
        icon={RiRestaurantLine}
        text="식당"
        onClick={() => setSelectedCategory('store')}
      />
      <CategoryButton icon={MdOutlineEventAvailable} text="문화행사" />
      <CategoryButton icon={PiPersonArmsSpreadDuotone} text="문화장소" />
    </div>
  );
}

MapCategory.propTypes = {
  setSelectedCategory: propTypes.func.isRequired,
};

export default MapCategory;
