import React from 'react';
import PropTypes from 'prop-types';

import MyArticles from './myarticles';
import Bookmarked from './bookmarked';
import ChangeInfo from './change-info';
import MyInfo from './my-info';

function MyPageContent({ currentPath }) {
  let content;

  switch (currentPath) {
    case '/mypage/myarticles':
      content = <MyArticles />;
      break;
    case '/mypage/bookmarked':
      content = <Bookmarked />;
      break;
    case '/mypage/change-info':
      content = <ChangeInfo />;
      break;
    default:
      content = <MyInfo />;
  }

  return <div>{content}</div>;
}

MyPageContent.propTypes = {
  currentPath: PropTypes.string.isRequired,
};

export default MyPageContent;
