import React from 'react';

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <footer
      className="flex w-full items-center justify-between bg-gray-900 px-40 text-white"
      style={{ height: '50px' }}
    >
      <p className="text-left">Copyright &copy; {thisYear()}</p>
      <p className="text-right ">심화캡스톤디자인 3팀 피어나</p>
    </footer>
  );
};

export default Footer;
