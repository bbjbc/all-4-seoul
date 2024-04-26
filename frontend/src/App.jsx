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
import MyArticles from './components/mypage/myarticles';
import Bookmarked from './components/mypage/bookmarked';
import ChangeInfo from './components/mypage/change-info';

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
            { path: '/mypage/myarticles', element: <MyArticles /> },
            { path: '/mypage/bookmarked', element: <Bookmarked /> },
            { path: '/mypage/change-info', element: <ChangeInfo /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
