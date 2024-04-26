import React from 'react';

import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

import ModalPortal from '../modal/modal-portal';
import Modal from '../modal/modal';

function ListPlaceOverlay({ place, onClose }) {
  return (
    <ModalPortal>
      <Modal onClose={onClose} height="h-4/5">
        <article className="overflow-y-auto p-5" key={place.NO}>
          <h1 className="mb-6 text-center font-gmarketbold text-3xl text-gray-800">
            {place.name}
          </h1>
          <div className="mb-4 space-y-2 rounded-md bg-green-200 px-6 py-5 text-stone-900">
            <div className="text-lg font-bold">{place.category}</div>
            <div className="text-sm">{place.AREA_CD}</div>
          </div>
          <div className="mb-4">
            <img
              src={place.images}
              alt={place.name}
              className="h-96 w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <Link to={`/list/${place.name}`}>
            <div className="flex w-full justify-end text-center">
              <div className="w-full rounded-md bg-green-500 p-2 text-stone-900 transition-all duration-200 ease-in-out hover:bg-green-400">
                상세 페이지 보기
              </div>
            </div>
          </Link>
        </article>
      </Modal>
    </ModalPortal>
  );
}

ListPlaceOverlay.propTypes = {
  onClose: propTypes.func.isRequired,
  place: propTypes.object.isRequired,
};

export default ListPlaceOverlay;
