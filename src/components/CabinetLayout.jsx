import React from 'react';
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  LogOut,
  Home,
  MessageCircle,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { scrollToSection } from '../utils/navigation';

const navLinkClass = ({ isActive }) =>
  `flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
    isActive
      ? 'bg-orange/10 text-orange border border-orange/20'
      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
  }`;

const CabinetLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const goToBooking = () => {
    navigate('/');
    requestAnimationFrame(() => scrollToSection('booking'));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row pb-20 lg:pb-0">
      <aside className="lg:w-64 lg:min-h-screen bg-white/80 backdrop-blur-xl border-b lg:border-b-0 lg:border-r border-slate-200/60 p-4 lg:p-6 shrink-0">
        <div className="mb-4 lg:mb-8">
          <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
            Личный кабинет
          </p>
          <p className="font-bold text-slate-900 truncate text-base sm:text-lg">
            {user?.name || 'Ученик'}
          </p>
          <p className="text-xs text-slate-500">{user?.grade} класс</p>
        </div>

        <nav className="flex lg:flex-col gap-1 overflow-x-auto pb-1 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0 scrollbar-none">
          <NavLink to="/cabinet/dashboard" className={navLinkClass} end>
            <LayoutDashboard className="w-5 h-5 shrink-0" />
            Дашборд
          </NavLink>
          <NavLink to="/cabinet/subjects" className={navLinkClass}>
            <BookOpen className="w-5 h-5 shrink-0" />
            Предметы
          </NavLink>
          <button
            type="button"
            onClick={goToBooking}
            className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            Диагностика
          </button>
        </nav>

        <div className="hidden lg:flex flex-col gap-2 mt-auto pt-8">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            <Home className="w-5 h-5" />
            На лендинг
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 w-full text-left"
          >
            <LogOut className="w-5 h-5" />
            Выйти
          </button>
        </div>
      </aside>

      <div className="flex-grow min-w-0">
        <Outlet />
      </div>

      {/* Мобильная нижняя панель */}
      <nav
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/80 safe-area-pb"
        aria-label="Навигация кабинета"
      >
        <div className="grid grid-cols-4 h-16 max-w-lg mx-auto">
          <NavLink
            to="/cabinet/dashboard"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium ${
                isActive ? 'text-orange' : 'text-slate-500'
              }`
            }
            end
          >
            <LayoutDashboard className="w-5 h-5" />
            Дашборд
          </NavLink>
          <NavLink
            to="/cabinet/subjects"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium ${
                isActive ? 'text-orange' : 'text-slate-500'
              }`
            }
          >
            <BookOpen className="w-5 h-5" />
            Предметы
          </NavLink>
          <button
            type="button"
            onClick={goToBooking}
            className="flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-slate-500"
          >
            <MessageCircle className="w-5 h-5" />
            Запись
          </button>
          <Link
            to="/"
            className="flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-slate-500"
          >
            <Home className="w-5 h-5" />
            Сайт
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default CabinetLayout;
