import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Clock, LogOut } from 'lucide-react';

const ProtectedRoute = ({ children }) => {
  const { user, loading, logout } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-50">
        <div className="w-8 h-8 border-4 border-brand-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace state={{ from: location.pathname, openAuth: true }} />;
  }

  if (user && user.hasAccess === false) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-50 px-4">
        <div className="bento-card max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-brand-100 border border-brand-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-brand-700" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">Доступ закрыт</h2>
          <p className="text-neutral-600 mb-6">
            Ваш аккаунт {user.email} успешно создан, но доступ к материалам курса пока не активирован.
          </p>
          <div className="bg-brand-50 rounded-xl p-4 mb-6 border border-brand-100">
            <div className="flex items-center justify-center text-neutral-700 mb-2 font-medium">
              <Clock className="w-5 h-5 mr-2 text-brand-600" />
              Ожидание оплаты
            </div>
            <p className="text-sm text-neutral-500">
              Оплатите курс и пришлите скриншот менеджеру в Telegram. После проверки мы откроем доступ вручную.
            </p>
          </div>
          <button
            type="button"
            onClick={logout}
            className="text-neutral-500 hover:text-neutral-700 flex items-center justify-center w-full transition-colors font-medium mt-4"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Выйти из аккаунта
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
