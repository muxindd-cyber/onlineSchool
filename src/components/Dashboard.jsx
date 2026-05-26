import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Trophy, BookOpen, Star, Clock, Video, Play, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// Данные рейтинга учеников
const ratingData = [
  { id: 1, name: 'Марина А.', score: '1 429 541', avatar: 'МА', color: '#E98E86' },
  { id: 2, name: 'Наталья К.', score: '1 326 500', avatar: 'НК', color: '#FF6584' },
  { id: 3, name: 'Ольга В.', score: '1 021 334', avatar: 'ОВ', color: '#43D399' },
  { id: 4, name: 'Ангелина Ц.', score: '987 210', avatar: 'АЦ', color: '#FFB347' },
];

// Генератор дней мая 2026
function getMayDays() {
  // 1 мая 2026 — пятница (offset = 4 в системе ПН..ВС)
  const offset = 4;
  const total = 31;
  const eventDays = [5, 12, 15, 19, 22, 26, 29];
  return { offset, total, eventDays };
}

const Dashboard = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('school_tasks');
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, text: 'Решить вариант №4 по профильной математике', done: false },
      { id: 2, text: 'Написать эссе по обществознанию', done: true },
      { id: 3, text: 'Повторить тему: Клетка и её органоиды (Биология)', done: false },
    ];
  });
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('school_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([{ id: Date.now(), text: newTask, done: false }, ...tasks]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const schedule = [
    { time: '16:00', subject: 'Информатика', type: 'Урок', active: false },
    { time: '18:00', subject: 'Русский язык', type: 'Урок', active: true },
    { time: '20:00', subject: 'Обществознание', type: 'Урок', active: false },
  ];

  const { offset, total, eventDays } = getMayDays();
  const today = 26;

  return (
    <section className="py-6 sm:py-10 px-4 sm:px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 mb-1">
            С возвращением, <span className="text-brand-600">{user?.name || 'ученик'}</span>! 👋
          </h2>
          <p className="text-neutral-500 text-sm">До экзаменов осталось 142 дня. Продолжай в том же темпе!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* LEFT COLUMN */}
          <div className="md:col-span-4 flex flex-col gap-5">

            {/* Calendar */}
            <div className="rounded-3xl bg-white p-5 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-bold text-slate-800">Май 2026</h3>
                <div className="flex gap-1">
                  <button type="button" className="p-1.5 hover:bg-brand-50 rounded-lg transition-colors text-slate-400 hover:text-brand-600">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button type="button" className="p-1.5 hover:bg-brand-50 rounded-lg transition-colors text-slate-400 hover:text-brand-600">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Weekday headers */}
              <div className="grid grid-cols-7 mb-2 text-center">
                {['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'].map((d, i) => (
                  <div key={d} className={`text-[10px] font-bold pb-1 ${i >= 5 ? 'text-red-400' : 'text-slate-400'}`}>{d}</div>
                ))}
              </div>

              {/* Days grid */}
              <div className="grid grid-cols-7 gap-y-1 text-center text-sm">
                {/* Offset empty cells */}
                {Array.from({ length: offset }).map((_, i) => (
                  <div key={`e-${i}`} />
                ))}
                {/* Days */}
                {Array.from({ length: total }).map((_, i) => {
                  const day = i + 1;
                  const isToday = day === today;
                  const hasEvent = eventDays.includes(day);
                  const dayOfWeek = (offset + i) % 7;
                  const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;
                  return (
                    <div
                      key={day}
                      className={`relative flex items-center justify-center h-8 w-8 mx-auto rounded-full cursor-pointer transition-all text-xs font-semibold
                        ${isToday
                          ? 'bg-brand-600 text-white shadow-md shadow-brand-300'
                          : isWeekend
                            ? 'text-red-400 hover:bg-red-50'
                            : 'text-slate-700 hover:bg-brand-50 hover:text-brand-600'
                        }`}
                    >
                      {day}
                      {hasEvent && !isToday && (
                        <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-400 rounded-full" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white p-5 shadow-md flex flex-col gap-2">
                <div className="w-9 h-9 rounded-xl bg-brand-100 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-brand-600" />
                </div>
                <div className="text-xl font-bold text-slate-900">53 455</div>
                <div className="text-xs text-slate-500">Персональный рейтинг</div>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-md flex flex-col gap-2">
                <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-brand-600" />
                </div>
                <div className="text-xl font-bold text-slate-900">40 / 53</div>
                <div className="text-xs text-slate-500">Пройдено уроков</div>
              </div>
            </div>

            {/* Rating block */}
            <div className="rounded-3xl bg-white p-5 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-slate-900">Рейтинг учеников</h3>
                <button className="text-xs font-medium text-brand-600 hover:underline">Все</button>
              </div>
              <div className="space-y-3">
                {ratingData.map((student, idx) => (
                  <div key={student.id} className="flex items-center gap-3">
                    <div className={`w-5 text-center text-xs font-bold ${idx === 0 ? 'text-brand-600' : 'text-slate-400'}`}>
                      {idx + 1}
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                      style={{ backgroundColor: student.color }}
                    >
                      {student.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-slate-800 truncate">{student.name}</div>
                      <div className="text-[10px] text-slate-400">{student.score}</div>
                    </div>
                    {idx === 0 && <Star className="w-4 h-4 text-brand-500 fill-brand-500 shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-8 flex flex-col gap-5">

            {/* Next lesson banner */}
            <div className="rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 text-white p-6 relative overflow-hidden shadow-xl shadow-brand-500/30">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-brand-300/30 rounded-full blur-2xl" />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-3">
                    <Clock className="w-3.5 h-3.5" /> Следующий урок в 18:00
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Русский язык</h3>
                  <p className="text-white/75 text-sm">Тема: Разбор задания №27. Идеальное сочинение.</p>
                </div>
                <a
                  href="https://zoom.us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center justify-center gap-2 py-3 px-7 bg-white text-brand-700 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-lg text-sm"
                >
                  <Video className="w-4 h-4" />
                  Подключиться
                </a>
              </div>
            </div>

            {/* Schedule */}
            <div className="rounded-3xl bg-white p-6 shadow-md">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-base font-bold text-slate-900">Расписание уроков</h3>
                <button className="text-xs font-medium text-brand-600 hover:underline">Все уроки</button>
              </div>
              <div className="space-y-3">
                {schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-3 rounded-2xl transition-colors ${item.active
                      ? 'bg-brand-50 border border-brand-200'
                      : 'hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.active ? 'bg-brand-600 shadow-md shadow-brand-300' : 'bg-slate-100'}`}>
                      <Play className={`w-4 h-4 ${item.active ? 'text-white' : 'text-slate-500'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-bold text-sm ${item.active ? 'text-brand-600' : 'text-slate-800'}`}>
                          {item.subject}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.active ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-500'}`}>
                          {item.type}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{item.time} — сегодня</div>
                    </div>
                    {item.active && (
                      <span className="shrink-0 text-[10px] bg-brand-600 text-white px-2.5 py-1 rounded-full font-bold">
                        Сейчас
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks */}
            <div className="rounded-3xl bg-white p-6 shadow-md flex flex-col">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-base font-bold text-slate-900">Домашние задания</h3>
                <span className="bg-brand-50 text-brand-600 text-xs font-bold px-3 py-1 rounded-full">
                  {tasks.filter(t => !t.done).length} не выполнено
                </span>
              </div>

              <div className="space-y-2.5 mb-5 overflow-y-auto max-h-[220px] pr-1 custom-scrollbar">
                {tasks.map(task => (
                  <div
                    key={task.id}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer ${task.done
                      ? 'bg-slate-50 border-slate-100'
                      : 'bg-white border-slate-200 hover:border-brand-300 hover:shadow-sm'
                    }`}
                    onClick={() => toggleTask(task.id)}
                  >
                    <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 transition-all ${task.done
                      ? 'bg-emerald-500 border-emerald-500'
                      : 'border-slate-300 hover:border-brand-500'
                    }`}>
                      {task.done && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <span className={`text-sm leading-snug ${task.done ? 'text-slate-400 line-through' : 'text-slate-800 font-medium'}`}>
                      {task.text}
                    </span>
                  </div>
                ))}
              </div>

              <form onSubmit={addTask} className="mt-auto flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Добавить задание..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-200 min-w-0"
                />
                <button type="submit" className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors shrink-0">
                  +
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
