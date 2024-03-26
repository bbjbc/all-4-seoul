import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import ListPage from './pages/List';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/list', element: <ListPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
