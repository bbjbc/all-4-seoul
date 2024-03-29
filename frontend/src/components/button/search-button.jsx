import React, { useState } from 'react';

import Modal from '../modal/modal';
import ModalPortal from '../modal/modal-portal';
import DummyData from '../places/dummy-data';

function SearchButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const inputChangeHandler = (e) => {
    setSearchInput(e.target.value);
    filterData(e.target.value);
    if (e.target.value === '') setFilteredData([]);
  };

  const filterData = (input) => {
    const filtered = DummyData.filter((d) => d.name.includes(input));
    setFilteredData(filtered);
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
            <h1 className="mb-4 text-center text-2xl font-bold">
              원하는 장소 있나요?
            </h1>
            <input
              type="text"
              value={searchInput}
              onChange={inputChangeHandler}
              placeholder="장소를 입력하세요."
              className="mb-4 rounded-md border border-gray-300 p-2 focus:outline-gray-600"
            />
            <div className="max-h-[500px] overflow-y-auto">
              <ul className="space-y-2">
                {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                    <li
                      key={item.id}
                      className="rounded-md p-4 transition-colors duration-300 hover:bg-gray-100"
                    >
                      <div>
                        <h1>{item.name}</h1>
                        <p className="text-xs text-gray-600">{item.category}</p>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="mt-28 animate-bounce text-center text-gray-600">
                    검색 결과가 없습니다.
                  </li>
                )}
              </ul>
            </div>
          </Modal>
        </ModalPortal>
      )}
    </>
  );
}

export default SearchButton;
