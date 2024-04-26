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
import MyPage from './pages/MyPage';
import MyArticlesPage from './components/mypage/myarticles';
import BookmarkedPage from './components/mypage/bookmarked';
import ChangeInfoPage from './components/mypage/change-info';
import { BookmarkProvider } from './state/bookmark-context';

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
          element: <MyPage />,
          children: [
            { path: '/mypage/myarticles', element: <MyArticlesPage /> },
            { path: '/mypage/bookmarked', element: <BookmarkedPage /> },
            { path: '/mypage/change-info', element: <ChangeInfoPage /> },
          ],
        },
      ],
    },
  ]);

  return (
    <BookmarkProvider>
      <RouterProvider router={router} />
    </BookmarkProvider>
  );
}

export default App;
