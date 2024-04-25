import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // BrowserRouter, Routes, Route import 추가

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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/Landing" element={<LandingPage />} />
          <Route path="/list/:id" element={<PlaceDetailPage />} />
          <Route path="/mypage" element={<MyPage />}>
            <Route index element={<MyPage />} />{' '}
            <Route path="myarticles" element={<MyArticlesPage />} />
            <Route path="bookmarked" element={<BookmarkedPage />} />
            <Route path="change-info" element={<ChangeInfoPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
