import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AuthProvider, useAuth } from './context/AuthContext';
import AuthModal from './components/AuthModal';
import ProtectedRoute from './components/ProtectedRoute';
import CabinetLayout from './components/CabinetLayout';
import LandingPage from './pages/LandingPage';
import Dashboard from './components/Dashboard';
import Subjects from './components/Subjects';
import AIAssistant from './components/AIAssistant';
import { scrollToSection } from './utils/navigation';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, openAuth, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLanding = location.pathname === '/';
  const isCabinet = location.pathname.startsWith('/cabinet');

  const goToCabinet = (path) => {
    setMobileMenuOpen(false);
    if (!user) {
      openAuth(path);
      return;
    }
    navigate(path);
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    navigate('/');
  };

  const scrollToAnchor = (sectionId) => {
    setMobileMenuOpen(false);
    if (!isLanding) {
      navigate('/');
      requestAnimationFrame(() => scrollToSection(sectionId));
      return;
    }
    scrollToSection(sectionId);
  };

  useEffect(() => {
    if (location.state?.openAuth) {
      openAuth(location.state?.from || '/cabinet/dashboard');
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, location.pathname, openAuth, navigate]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-brand-50 text-neutral-900 selection:bg-brand-400/40 selection:text-brand-800 relative overflow-x-hidden">
      <nav className="fixed w-full z-50 top-0 bg-brand-50/90 backdrop-blur-xl border-b border-neutral-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
          <button
            type="button"
            className="font-serif font-bold text-xl sm:text-2xl tracking-wide text-neutral-900 cursor-pointer text-left shrink-0"
            onClick={handleLogoClick}
          >
            Я уже <span className="text-brand-600">все знаю</span>
          </button>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 items-center">
            {isLanding && (
              <>
                <button type="button" onClick={() => scrollToAnchor('trust')} className="hover:text-brand-600 transition-colors">
                  Преимущества
                </button>
                <button type="button" onClick={() => scrollToAnchor('services')} className="hover:text-brand-600 transition-colors">
                  Программы
                </button>
                <button type="button" onClick={() => scrollToAnchor('team')} className="hover:text-brand-600 transition-colors">
                  Эксперты
                </button>
                <button type="button" onClick={() => scrollToAnchor('testimonials')} className="hover:text-brand-600 transition-colors">
                  Отзывы
                </button>
              </>
            )}
            <button
              type="button"
              onClick={() => goToCabinet('/cabinet/subjects')}
              className={`hover:text-brand-600 transition-colors ${location.pathname.includes('subjects') ? 'text-brand-600' : ''}`}
            >
              Предметы
            </button>
            <button
              type="button"
              onClick={() => goToCabinet('/cabinet/dashboard')}
              className={`hover:text-brand-600 transition-colors ${location.pathname.includes('dashboard') ? 'text-brand-600' : ''}`}
            >
              Личный кабинет
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            {user ? (
              <>
                <span className="text-sm text-slate-600 max-w-[120px] truncate">{user.name}</span>
                {isCabinet ? (
                  <Link to="/" className="btn-secondary text-sm py-2 px-4">
                    Лендинг
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => navigate('/cabinet/dashboard')}
                    className="btn-primary text-sm py-2.5 px-6"
                  >
                    Кабинет
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  className="text-sm text-slate-500 hover:text-red-600"
                >
                  Выйти
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => openAuth('/cabinet/dashboard')}
                className="btn-primary text-sm !py-2.5 !px-6"
              >
                Войти
              </button>
            )}
          </div>

          <button
            type="button"
            className="md:hidden text-slate-600 hover:text-brand-600 p-2 -mr-2"
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200/80 bg-brand-50/98 backdrop-blur-xl px-4 py-4 max-h-[calc(100dvh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-1 text-sm font-medium">
              {isLanding && (
                <>
                  <button type="button" onClick={() => scrollToAnchor('trust')} className="text-left py-3 text-slate-700 hover:text-brand-600">
                    Преимущества
                  </button>
                  <button type="button" onClick={() => scrollToAnchor('services')} className="text-left py-3 text-slate-700 hover:text-brand-600">
                    Программы
                  </button>
                  <button type="button" onClick={() => scrollToAnchor('team')} className="text-left py-3 text-slate-700 hover:text-brand-600">
                    Эксперты
                  </button>
                  <button type="button" onClick={() => scrollToAnchor('testimonials')} className="text-left py-3 text-slate-700 hover:text-brand-600">
                    Отзывы
                  </button>
                  <button type="button" onClick={() => scrollToAnchor('booking')} className="text-left py-3 text-brand-600 font-semibold">
                    Записаться на диагностику
                  </button>
                  <hr className="border-slate-100 my-2" />
                </>
              )}
              <button type="button" onClick={() => goToCabinet('/cabinet/subjects')} className="text-left py-3 text-slate-700 hover:text-brand-600">
                Предметы
              </button>
              <button type="button" onClick={() => goToCabinet('/cabinet/dashboard')} className="text-left py-3 text-slate-700 hover:text-brand-600">
                Личный кабинет
              </button>
              <hr className="border-slate-100 my-2" />
              {user ? (
                <>
                  <p className="py-2 text-slate-500 text-xs">Вы вошли как {user.name}</p>
                  {!isCabinet && (
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        navigate('/cabinet/dashboard');
                      }}
                      className="btn-primary w-full py-3 mt-1"
                    >
                      Открыть кабинет
                    </button>
                  )}
                  {isCabinet && (
                    <Link to="/" className="btn-secondary w-full py-3 mt-1 text-center" onClick={() => setMobileMenuOpen(false)}>
                      На лендинг
                    </Link>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                    className="text-left py-3 text-red-600"
                  >
                    Выйти
                  </button>
                </>
              ) : (
                <button type="button" onClick={() => { setMobileMenuOpen(false); openAuth('/cabinet/dashboard'); }} className="btn-primary w-full py-3 mt-2">
                  Войти в кабинет
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <main className={isCabinet ? 'pt-16 sm:pt-20' : 'pt-16 sm:pt-20'}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/cabinet"
            element={
              <ProtectedRoute>
                <CabinetLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="subjects" element={<Subjects />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!isCabinet && (
        <footer className="bg-white py-12 sm:py-16 px-4 sm:px-6 border-t border-neutral-200 text-center md:text-left mt-20 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <button
                type="button"
                className="font-serif font-bold text-2xl tracking-wide text-neutral-900 mb-4 cursor-pointer"
                onClick={handleLogoClick}
              >
                Я уже <span className="text-brand-600">все знаю</span>
              </button>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                Премиальная подготовка к ЕГЭ и ОГЭ с юридической гарантией результата. Ваш путь к 100 баллам начинается здесь.
              </p>
            </div>
            <div className="flex flex-col space-y-3 text-sm text-slate-500">
              <button type="button" className="hover:text-brand-600 transition-colors">
                Политика конфиденциальности
              </button>
              <button type="button" className="hover:text-brand-600 transition-colors">
                Пользовательское соглашение
              </button>
              <button type="button" className="hover:text-brand-600 transition-colors">
                Лицензия на образовательную деятельность
              </button>
            </div>
            <div className="md:text-right">
              <p className="text-slate-900 font-bold text-xl mb-2">8 (800) 000-00-00</p>
              <p className="text-slate-500 text-sm">Ежедневно с 9:00 до 21:00</p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 sm:mt-16 pt-8 border-t border-slate-100 text-center text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Онлайн-школа «Я уже все знаю». Все права защищены.
          </div>
        </footer>
      )}

      <AuthModal />
      {!isCabinet && <AIAssistant />}
    </div>
  );
}

function getRouterBasename() {
  const base = import.meta.env.BASE_URL;
  if (!base || base === '/') return undefined;
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

function App() {
  return (
    <BrowserRouter basename={getRouterBasename()}>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
