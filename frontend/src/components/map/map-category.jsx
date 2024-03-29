import React from 'react';

import CategoryButton from '../button/category-button';

import { LuParkingCircle } from 'react-icons/lu';
import { MdOutlineLocalCafe } from 'react-icons/md';
import { RiRestaurantLine } from 'react-icons/ri';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { PiPersonArmsSpreadDuotone } from 'react-icons/pi';

function MapCategory() {
  return (
    <div className="absolute left-16 top-20 z-20 flex gap-3">
      <CategoryButton icon={LuParkingCircle} text="주차장" />
      <CategoryButton icon={MdOutlineLocalCafe} text="카페" />
      <CategoryButton icon={RiRestaurantLine} text="식당" />
      <CategoryButton icon={MdOutlineEventAvailable} text="문화행사" />
      <CategoryButton icon={PiPersonArmsSpreadDuotone} text="문화장소" />
    </div>
  );
}

export default MapCategory;
