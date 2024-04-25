import React from 'react';

import { Link } from 'react-router-dom';

import { FaGithub, FaYoutube } from 'react-icons/fa';
import { VscDebugStart } from 'react-icons/vsc';
import mainLogo from '../../assets/올포서울로고.jpg';

function Header() {
  return (
    <nav className="text-md fixed left-0 top-0 z-50 w-full rounded-b-md bg-gray-900 p-3 font-gmarketbold text-white">
      <ul className="mx-56 flex justify-between">
        <li className="flex items-center">
          <Link
            to="/home"
            className="flex transform items-center text-white transition duration-300 ease-in-out hover:scale-110 hover:text-orange-300"
          >
            <img
              src={mainLogo}
              alt="올포서울로고"
              className="mr-2 h-7 rounded-full"
            />
            <span className="mr-2">All 4 Seoul</span>
          </Link>
        </li>
        <li className="flex items-center space-x-6">
          <a
            href="https://github.com/2024-Advanced-Capstone-Design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} className="hover:text-lime-200" />
          </a>
          <FaYoutube size={30} className="hover:text-lime-200" />
          <Link to="/home">
            <button className="flex items-start gap-2 rounded-3xl bg-white px-3 py-1 text-gray-900 transition-all duration-200 ease-in-out hover:bg-lime-200">
              <VscDebugStart size={20} />
              <span>Get Started</span>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
