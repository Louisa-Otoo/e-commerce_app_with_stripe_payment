
import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminAuth = createContext();


// eslint-disable-next-line react/prop-types
export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(false);
  const [authAdmin, setAuthAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(['']);


  const login = (adminData) => {
    if (adminData && adminData.id) {
      const randomToken = Array.from({ length: 32 }, () =>
      Math.random().toString(36)[2]
    ).join('');
    setToken(randomToken);
    localStorage.setItem("token", randomToken);

    let Admin = JSON.stringify(admin);

    setAdmin(adminData);
    setIsLoggedIn(true);
    setAuthAdmin(true)

    localStorage.setItem ("admin",JSON.stringify(adminData));
    return;
    }
  }


  const logout = () => {
    setAdmin(null);
    setIsLoggedIn(false);
    setAuthAdmin(false);
    setToken('');
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
  };


  useEffect(() => {
    const localToken = localStorage.getItem('token');
    const localAdmin = JSON.parse(localStorage.getItem('admin'));

    if (localToken && localAdmin && localAdmin.id) {
      setToken(localToken);
      setAdmin(localAdmin);
      setIsLoggedIn(true);
      setAuthAdmin(true);
    } else {
      setToken('');
      setAdmin(null);
      setIsLoggedIn(false);
      setAuthAdmin(false);
    }
  }, []);


  const authValue = {
    admin,
    setAdmin,
    authAdmin,
    setAuthAdmin,
    isLoggedIn,
    setIsLoggedIn,
    login,
    logout,
    token, 
    setToken,
  };


  return (
    <AdminAuth.Provider value={authValue}>
      {children}
    </AdminAuth.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AdminAuth);
};