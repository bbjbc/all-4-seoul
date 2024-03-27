import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import Modal from '../modal/modal';
import ModalPortal from '../modal/modal-portal';
import logo from '../../assets/올포서울로고.jpg';

function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-10 w-full rounded-b-2xl bg-gray-700 bg-opacity-50 p-3 text-lg font-semibold">
      <ul className="mx-20 flex justify-between">
        <li className="flex items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 hover:text-purple-950'
                : 'flex items-center text-black hover:text-cyan-900'
            }
          >
            <img
              src={logo}
              alt="logo"
              className="mr-3 h-7 w-7 rounded-full text-lg text-black"
            />
            All 4 Seoul
          </NavLink>
        </li>
        <li className="flex items-center space-x-6">
          <NavLink
            to="/list"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 hover:text-purple-950'
                : 'flex items-center text-black hover:text-cyan-900'
            }
          >
            리스트
          </NavLink>
          <button
            onClick={openModal}
            className="flex items-center text-black hover:text-cyan-900"
          >
            찾기
          </button>
          <NavLink
            to="/mypage"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-blue-950 hover:text-purple-950'
                : 'flex items-center text-black hover:text-cyan-900'
            }
          >
            마이페이지
          </NavLink>
        </li>
      </ul>

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
    </nav>
  );
}

export default NavBar;
