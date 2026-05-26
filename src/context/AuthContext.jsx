import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [postLoginPath, setPostLoginPath] = useState('/cabinet/dashboard');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Запрашиваем дополнительные данные пользователя из Firestore
        try {
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              ...userData
            });
          } else {
             setUser({
               uid: firebaseUser.uid,
               email: firebaseUser.email,
               name: 'Ученик',
               hasAccess: false,
               grade: '11'
             });
          }
        } catch (error) {
           console.error("Ошибка при получении данных пользователя:", error);
           setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const register = async ({ name, email, password, grade }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;
    
    // Создаем профиль в Firestore
    const userData = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      name: name.trim(),
      grade: grade || '11',
      hasAccess: false, // Изначально доступ закрыт
      role: 'student',
      createdAt: new Date().toISOString()
    };
    
    await setDoc(doc(db, 'users', firebaseUser.uid), userData);
    setAuthModalOpen(false);
  };

  const login = async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password);
    setAuthModalOpen(false);
  };

  const logout = async () => {
    await signOut(auth);
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
        loading,
        register,
        login,
        logout,
        authModalOpen,
        openAuth,
        closeAuth,
        setAuthModalOpen,
        postLoginPath,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
