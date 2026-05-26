import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AuthModal = () => {
  const { authModalOpen, closeAuth, login, register, postLoginPath } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState('11');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!authModalOpen) return null;

  const handleSubmit = async (e) => {
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

    setLoading(true);
    try {
      if (mode === 'register') {
        await register({ name, email, password, grade });
      } else {
        await login({ email, password });
      }

      const target = location.state?.from || postLoginPath;
      navigate(target, { replace: true });
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setError('Этот email уже зарегистрирован');
      } else if (err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError('Неверный email или пароль');
      } else if (err.code === 'auth/weak-password') {
        setError('Пароль слишком простой (минимум 6 символов)');
      } else {
        setError('Произошла ошибка. Попробуйте еще раз.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-neutral-900/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-title"
    >
      <div className="bento-card w-full max-w-md bg-white p-8 relative shadow-2xl animate-in zoom-in-95">
        <button
          type="button"
          onClick={closeAuth}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 id="auth-title" className="font-serif text-2xl font-bold text-neutral-900 mb-2 text-center">
          {mode === 'login' ? 'Вход в кабинет' : 'Регистрация'}
        </h2>
        <p className="text-center text-neutral-500 text-sm mb-6">
          {mode === 'login' ? 'Войдите, чтобы продолжить обучение' : 'Создайте аккаунт для доступа к урокам'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label htmlFor="auth-name" className="block text-sm font-medium text-neutral-600 mb-1">
                Имя
              </label>
              <input
                id="auth-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
                placeholder="Артем"
                disabled={loading}
              />
            </div>
          )}

          <div>
            <label htmlFor="auth-email" className="block text-sm font-medium text-neutral-600 mb-1">
              Email
            </label>
            <input
              id="auth-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="student@example.com"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="auth-password" className="block text-sm font-medium text-neutral-600 mb-1">
              Пароль
            </label>
            <input
              id="auth-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
              required
              disabled={loading}
            />
          </div>

          {mode === 'register' && (
            <div>
              <label htmlFor="auth-grade" className="block text-sm font-medium text-neutral-600 mb-1">
                Класс
              </label>
              <select
                id="auth-grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="input-field"
                disabled={loading}
              >
                <option value="9">9 класс (ОГЭ)</option>
                <option value="10">10 класс</option>
                <option value="11">11 класс (ЕГЭ)</option>
              </select>
            </div>
          )}

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}

          <button type="submit" disabled={loading} className="w-full btn-primary py-3 mt-2 disabled:opacity-50">
            {loading ? 'Загрузка...' : mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        <p className="text-center text-sm text-neutral-500 mt-6">
          {mode === 'login' ? (
            <>
              Нет аккаунта?{' '}
              <button type="button" onClick={() => setMode('register')} className="text-brand-700 font-semibold hover:underline">
                Зарегистрироваться
              </button>
            </>
          ) : (
            <>
              Уже есть аккаунт?{' '}
              <button type="button" onClick={() => setMode('login')} className="text-brand-700 font-semibold hover:underline">
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
