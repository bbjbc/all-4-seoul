import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Home';
import ListPage from './pages/List';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import LandingPage from './pages/Landing';
import PlaceDetailPage from './pages/Detail';
import MyPageLayout from './pages/Mypage-layout';
import MyInfoPage from './components/mypage/my-info';
import MyCommentPage from './components/mypage/my-comment';
import BookmarkedPage from './components/mypage/bookmarked';
import ChangeInfoPage from './components/mypage/change-info';
import { BookmarkProvider } from './state/bookmark-context';
import { ReviewProvider } from './state/review-context';
import { UserProvider } from './state/user-context';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/home', element: <HomePage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/signup', element: <SignupPage /> },
        { path: '/list', element: <ListPage /> },
        { path: '/list/:id', element: <PlaceDetailPage /> },
        {
          path: '/mypage',
          element: <MyPageLayout />,
          children: [
            { path: '/mypage', element: <MyInfoPage /> },
            { path: '/mypage/comment', element: <MyCommentPage /> },
            { path: '/mypage/bookmarked', element: <BookmarkedPage /> },
            { path: '/mypage/change-info', element: <ChangeInfoPage /> },
          ],
        },
      ],
    },
  ]);

  return (
    <UserProvider>
      <ReviewProvider>
        <BookmarkProvider>
          <RouterProvider router={router} />
        </BookmarkProvider>
      </ReviewProvider>
    </UserProvider>
  );
}

export default App;
