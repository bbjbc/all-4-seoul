import React from 'react';

import CategoryButton from '../button/category-button';

import propTypes from 'prop-types';

import { LuParkingCircle } from 'react-icons/lu';
import { MdOutlineLocalCafe } from 'react-icons/md';
import { RiRestaurantLine } from 'react-icons/ri';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { PiPersonArmsSpreadDuotone } from 'react-icons/pi';

function MapCategory({ id }) {
  return (
    <div id={id} className="absolute left-16 top-24 z-20 flex flex-col gap-7">
      <CategoryButton icon={LuParkingCircle} text="주차장" id="PK6" order="0" />
      <CategoryButton
        icon={MdOutlineLocalCafe}
        text="카페"
        id="CE7"
        order="1"
      />
      <CategoryButton
        icon={RiRestaurantLine}
        text="주유소"
        id="OL7"
        order="2"
      />
      <CategoryButton
        icon={MdOutlineEventAvailable}
        text="음식점"
        id="FD6"
        order="3"
      />
      <CategoryButton
        icon={PiPersonArmsSpreadDuotone}
        text="관광명소"
        id="AT4"
        order="4"
      />
      <CategoryButton
        icon={PiPersonArmsSpreadDuotone}
        text="문화시설"
        id="CT1"
        order="5"
      />
    </div>
  );
}

MapCategory.propTypes = {
  id: propTypes.string,
};

export default MapCategory;
