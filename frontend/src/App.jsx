import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import ListPage from './pages/List';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import PlaceDetailPage from './pages/Detail';

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
        { path: '/list/:id', element: <PlaceDetailPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
