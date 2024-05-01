import React, { createContext, useContext, useState, useEffect } from 'react';
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
    const updatedUsers = [...users, userData];
    setUsers(updatedUsers);
    localStorage.setItem('userInfo', JSON.stringify(updatedUsers));
  };

  const setUserInfo = (data) => {
    const updatedUsers = users.map((user) =>
      user.id === data.id ? { ...user, ...data } : user,
    );
    setUsers(updatedUsers);
    setCurrentUser(data);
    localStorage.setItem('userInfo', JSON.stringify(updatedUsers));
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
