import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';
import Logo from '../../../assets/올포서울로고.jpg';

const Header = () => {
  return (
    <header
      className="fixed z-10 mb-10 flex w-full items-center justify-between bg-gray-900 px-40 text-white"
      style={{ height: '50px' }}
    >
      <p className="flex items-center text-left">
        <img src={Logo} alt="올포서울로고" className="mr-2 h-7 rounded-full" />
        <span className="mr-2">All 4 Seoul</span>
      </p>
      <p className="flex text-right ">
        <a
          href="https://github.com/2024-Advanced-Capstone-Design"
          // 새창으로 연결
          target="_blank"
          // 보안 및 성능 이슈를 해결하기 위해 사용
          rel="noopener noreferrer"
        >
          <FaGithub size={30} className="mr-4" />
        </a>
        <FaYoutubeSquare size={30} />
      </p>
    </header>
  );
};

export default Header;
