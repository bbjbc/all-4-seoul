import React from 'react';

import { FaGithub, FaYoutube } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';

function Footer() {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  const emailAddress = 'awfjol2008@gmail.com';

  return (
    <footer className="z-10 flex h-auto w-full items-center bg-gray-900 px-56 py-10 text-white">
      <div className="grid w-full grid-cols-3">
        <div className="flex items-center justify-start gap-10">
          <a
            href="https://github.com/2024-Advanced-Capstone-Design"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaYoutube size={40} />
          </a>
          <a
            href="https://www.instagram.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <IoLogoInstagram size={40} />
          </a>
        </div>

        <div className="flex items-center justify-center">
          <p className="font-gmarketbold text-xl">
            서울특별시는 피어나로부터 피어나
          </p>
        </div>

        <div className="flex flex-col items-center justify-end gap-1">
          <p className="font-gmarketbold text-lg">팀 피어나</p>
          <p className="text-sm">경기대학교 AI컴퓨터공학부</p>
          <p className="text-sm">
            문의: &nbsp;
            <a
              className="underline hover:text-sky-500"
              href={`mailto:${emailAddress}`}
            >
              {emailAddress}
            </a>
          </p>

          <p className="text-sm">Copyright &copy; {thisYear()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
