import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Clear localStorage for debugging - remove this after testing
    localStorage.clear();
    const token = localStorage.getItem('token');
    const guest = localStorage.getItem('guest');
    console.log('Auth check:', { token: !!token, guest: !!guest });
    setIsAuthenticated(!!(token || guest));
  }, []);

  useEffect(() => {
    console.log('isAuthenticated changed:', isAuthenticated);
  }, [isAuthenticated]);

  const login = (token, name) => {
    localStorage.setItem('token', token);
    localStorage.setItem('name', name);
    setIsAuthenticated(true);
  };

  const guestLogin = () => {
    localStorage.setItem('guest', 'true');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('guest');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, guestLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
