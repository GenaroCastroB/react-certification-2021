import React, { useState, useEffect, useContext, useCallback } from 'react';

import { useHistory } from 'react-router';
import { AUTH_STORAGE_KEY, AUTH_STORAGE_USER } from '../../utils/constants';
import { storage } from '../../utils/storage';
import loginApi from '../../api/login';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAuthError, setiIsAuthError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback((userName, password) => {
    loginApi(userName, password)
      .then((user) => {
        setAuthenticated(true);
        storage.set(AUTH_STORAGE_KEY, true);
        storage.set(AUTH_STORAGE_USER, user);
        setiIsAuthError(false);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        setiIsAuthError(true);
      });
    return authenticated;
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
    storage.set(AUTH_STORAGE_USER, null);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, isAuthError }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
