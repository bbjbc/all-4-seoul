import React, { createContext, useContext, useState, useEffect } from 'react';

import Swal from 'sweetalert2';

import PropTypes from 'prop-types';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('userInfo')) || [];
    setUsers(storedUsers);

    const storedId = localStorage.getItem('id');
    if (storedId) {
      const user = storedUsers.find((user) => user.id === storedId);
      if (user) {
        setCurrentUser(user);
        setIsLoggedIn(true);
      }
    }
  }, []);

  const login = (id) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      localStorage.setItem('id', id);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('id');
  };

  const registerUser = (userData) => {
    const idExists = users.some((user) => user.id === userData.id);

    if (idExists) {
      Swal.fire({
        icon: 'error',
        title: '회원가입 실패',
        text: '이미 존재하는 아이디입니다.',
      });
      return;
    }

    const updatedUsers = [...users, userData];
    setUsers(updatedUsers);
    localStorage.setItem('userInfo', JSON.stringify(updatedUsers));
    return true;
  };

  const setUserInfo = (data, newId) => {
    const updatedUsers = users.map((user) =>
      user.id === currentUser.id ? { ...user, ...data, id: newId } : user,
    );
    setUsers(updatedUsers);
    setCurrentUser({ ...data, id: newId });
    localStorage.setItem('userInfo', JSON.stringify(updatedUsers));
    localStorage.setItem('id', newId);
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        isLoggedIn,
        login,
        logout,
        registerUser,
        setUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useUser() {
  return useContext(UserContext);
}
