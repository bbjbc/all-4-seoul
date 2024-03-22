import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

function App() {
  const router = createBrowserRouter([{ path: '/', element: <div>Home</div> }]);
  return <RouterProvider router={router} />;
}

export default App;
