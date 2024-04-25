import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
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

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/signup', element: <SignupPage /> },
        { path: '/list', element: <ListPage /> },
        { path: '/Landing', element: <LandingPage /> },
        { path: '/list/:id', element: <PlaceDetailPage /> },
        { path: '/mypage', element: <MyPage /> },
        { path: '/mypage/myarticles', element: <MyArticlesPage /> },
        { path: '/mypage/bookmarked', element: <BookmarkedPage /> },
        { path: '/mypage/change-info', element: <ChangeInfoPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
