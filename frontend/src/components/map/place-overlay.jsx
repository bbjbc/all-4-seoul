import React from 'react';

import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

import ModalPortal from '../modal/modal-portal';
import Modal from '../modal/modal';
import food from '../../assets/overlay/food.jpg';
import cafe from '../../assets/overlay/cafe.jpg';
import culture from '../../assets/overlay/culture.jpg';
import gas from '../../assets/overlay/gas.jpg';
import parking from '../../assets/overlay/parking.jpg';
import attractions from '../../assets/overlay/attractions.jpg';

function PlaceOverlay({ place, onClose }) {
  let image = null;
  switch (place.category_group_name) {
    case '카페':
      image = cafe;
      break;
    case '주차장':
      image = parking;
      break;
    case '주유소,충전소':
      image = gas;
      break;
    case '음식점':
      image = food;
      break;
    case '관광명소':
      image = attractions;
      break;
    case '문화시설':
      image = culture;
      break;
    default:
      image = null;
      break;
  }

  return (
    <ModalPortal>
      <Modal onClose={onClose}>
        <div className="overflow-y-auto p-5">
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
            {place.place_name}
          </h1>

          <div className="mb-4 space-y-2 rounded-md bg-indigo-100 px-6 py-5 text-indigo-800">
            <div className="text-lg font-bold">{place.category_group_name}</div>
            <div className="text-sm">{place.category_name}</div>
          </div>

          <div className="text-md mb-4 space-y-2 text-gray-700">
            <div>
              <span className="font-semibold">전화번호:</span> {place.phone}
            </div>
            <div>
              <span className="font-semibold">주소:</span> {place.address_name}
            </div>
            <div>
              <span className="font-semibold">도로명 주소:</span>
              {place.road_address_name}
            </div>
            <div className="text-blue-500 underline">
              <Link to={`/list/${place.place_name}`}>상세 페이지 보기</Link>
            </div>
          </div>

          {image && (
            <div className="mb-4">
              <img
                src={image}
                alt={place.place_name}
                className="h-96 w-full rounded-lg object-cover shadow-md"
              />
            </div>
          )}
        </div>
      </Modal>
    </ModalPortal>
  );
}

PlaceOverlay.propTypes = {
  place: propTypes.object,
  onClose: propTypes.func.isRequired,
};

export default PlaceOverlay;
