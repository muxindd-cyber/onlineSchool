import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const STORAGE_KEY = 'school_user';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [postLoginPath, setPostLoginPath] = useState('/cabinet/dashboard');

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const login = ({ name, email, grade }) => {
    setUser({
      name: name.trim(),
      email: email.trim(),
      grade: grade || '11',
    });
    setAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  const openAuth = (redirectTo = '/cabinet/dashboard') => {
    setPostLoginPath(redirectTo);
    setAuthModalOpen(true);
  };
  const closeAuth = () => setAuthModalOpen(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        authModalOpen,
        openAuth,
        closeAuth,
        setAuthModalOpen,
        postLoginPath,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
