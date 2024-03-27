import React, { useState } from 'react';

import Modal from '../modal/modal';
import ModalPortal from '../modal/modal-portal';

function SearchButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center text-black hover:text-cyan-900"
      >
        찾기
      </button>

      {isModalOpen && (
        <ModalPortal>
          <Modal onClose={closeModal}>
            <h1 className="mb-4 text-2xl font-bold">원하는 장소 있나요?</h1>
            <input
              type="text"
              placeholder="장소를 입력하세요."
              className="m-2 rounded-md border border-gray-300 p-2 focus:outline-gray-600"
            />
          </Modal>
        </ModalPortal>
      )}
    </>
  );
}

export default SearchButton;
