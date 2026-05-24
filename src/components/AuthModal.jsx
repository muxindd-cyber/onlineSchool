import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AuthModal = () => {
  const { authModalOpen, closeAuth, login, postLoginPath } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState('11');
  const [error, setError] = useState('');

  if (!authModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email.trim() || !password.trim()) {
      setError('Заполните email и пароль');
      return;
    }
    if (mode === 'register' && !name.trim()) {
      setError('Укажите имя');
      return;
    }
    login({
      name: mode === 'register' ? name : email.split('@')[0],
      email,
      grade,
    });
    const target = location.state?.from || postLoginPath;
    navigate(target, { replace: true });
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-slate-900/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-title"
    >
      <div className="bento-card w-full max-w-md bg-white/95 p-8 relative shadow-2xl animate-in zoom-in-95">
        <button
          type="button"
          onClick={closeAuth}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 id="auth-title" className="text-2xl font-bold text-slate-900 mb-2 text-center">
          {mode === 'login' ? 'Вход в кабинет' : 'Регистрация'}
        </h2>
        <p className="text-center text-slate-500 text-sm mb-6">
          Демо-режим: данные сохраняются только в браузере
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label htmlFor="auth-name" className="block text-sm font-medium text-slate-600 mb-1">
                Имя
              </label>
              <input
                id="auth-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"
                placeholder="Артем"
              />
            </div>
          )}

          <div>
            <label htmlFor="auth-email" className="block text-sm font-medium text-slate-600 mb-1">
              Email
            </label>
            <input
              id="auth-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"
              placeholder="student@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="auth-password" className="block text-sm font-medium text-slate-600 mb-1">
              Пароль
            </label>
            <input
              id="auth-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label htmlFor="auth-grade" className="block text-sm font-medium text-slate-600 mb-1">
              Класс
            </label>
            <select
              id="auth-grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"
            >
              <option value="9">9 класс (ОГЭ)</option>
              <option value="10">10 класс</option>
              <option value="11">11 класс (ЕГЭ)</option>
            </select>
          </div>

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}

          <button type="submit" className="w-full btn-primary py-3 mt-2">
            {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          {mode === 'login' ? (
            <>
              Нет аккаунта?{' '}
              <button type="button" onClick={() => setMode('register')} className="text-orange font-semibold hover:underline">
                Зарегистрироваться
              </button>
            </>
          ) : (
            <>
              Уже есть аккаунт?{' '}
              <button type="button" onClick={() => setMode('login')} className="text-orange font-semibold hover:underline">
                Войти
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
