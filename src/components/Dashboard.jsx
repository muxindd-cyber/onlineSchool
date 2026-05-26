import React, { useState, useEffect } from 'react';
import { Video, ChevronLeft, ChevronRight, Trophy, BookOpen, Clock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('school_tasks');
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, text: 'Решить вариант №4 по профильной математике', done: false },
      { id: 2, text: 'Написать эссе по обществознанию', done: true }
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
    { time: '16:00', subject: 'Математика', type: 'Вебинар', active: false },
    { time: '18:00', subject: 'Русский язык', type: 'Практикум', active: true },
    { time: '20:00', subject: 'Обществознание', type: 'Тест', active: false },
  ];

  return (
    <section className="py-6 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              С возвращением, {user?.name || 'ученик'}! 👋
            </h2>
            <p className="text-white/80">Ваш прогресс и план на сегодня. До экзаменов осталось 142 дня.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Left Column: Calendar & Stats */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Calendar Widget */}
            <div className="bento-card !p-6 bg-slate-50 border-none">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900">Май 2026</h3>
                <div className="flex gap-2">
                  <button type="button" className="p-1 hover:bg-slate-200 rounded-lg transition-colors"><ChevronLeft className="w-5 h-5 text-slate-500" /></button>
                  <button type="button" className="p-1 hover:bg-slate-200 rounded-lg transition-colors"><ChevronRight className="w-5 h-5 text-slate-500" /></button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-semibold text-slate-400">
                <div>ПН</div><div>ВТ</div><div>СР</div><div>ЧТ</div><div>ПТ</div><div className="text-red-400">СБ</div><div className="text-red-400">ВС</div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium">
                {/* Empty days for offset */}
                <div className="p-2"></div><div className="p-2"></div><div className="p-2"></div><div className="p-2"></div>
                <div className="p-2 hover:bg-white rounded-lg cursor-pointer">1</div>
                <div className="p-2 hover:bg-white rounded-lg cursor-pointer text-slate-400">2</div>
                <div className="p-2 hover:bg-white rounded-lg cursor-pointer text-slate-400">3</div>
                
                {/* Active month days */}
                {[...Array(23)].map((_, i) => {
                  const day = i + 4;
                  const isToday = day === 26;
                  const hasEvent = [15, 18, 22].includes(day);
                  return (
                    <div 
                      key={day} 
                      className={`relative p-2 rounded-xl cursor-pointer transition-colors ${
                        isToday ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' : 'hover:bg-white text-slate-700'
                      }`}
                    >
                      {day}
                      {hasEvent && !isToday && <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full"></div>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bento-card !p-5 flex flex-col">
                <div className="flex items-center gap-3 mb-2 text-yellow-500">
                  <Trophy className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-slate-900">53 455</div>
                <div className="text-xs text-slate-500">Персональный рейтинг</div>
              </div>
              <div className="bento-card !p-5 flex flex-col">
                <div className="flex items-center gap-3 mb-2 text-slate-700">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-slate-900">18/24</div>
                <div className="text-xs text-slate-500">Пройдено уроков</div>
              </div>
            </div>

            <div className="bento-card !p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-bold text-slate-900">Общий прогресс</h3>
                <span className="text-sm font-bold text-blue-600">75%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-3">
                <div className="h-full w-3/4 bg-blue-600 rounded-full transition-all" />
              </div>
            </div>

          </div>

          {/* Right Column: Timeline & Tasks */}
          <div className="md:col-span-8 flex flex-col gap-6">
            
            {/* Next Lesson Card */}
            <div className="bento-card border-none bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    <Clock className="w-3.5 h-3.5" /> 18:00
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Русский язык</h3>
                  <p className="text-white/80">Тема: Разбор задания №27. Идеальное сочинение.</p>
                </div>
                
                <a
                  href="https://zoom.us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center justify-center py-4 px-8 bg-white text-blue-700 rounded-2xl font-bold hover:bg-slate-50 transition-colors shadow-xl"
                >
                  <Video className="w-5 h-5 mr-2" />
                  Подключиться
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Schedule Timeline */}
              <div className="bento-card flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Расписание</h3>
                  <button className="text-sm font-medium text-blue-600 hover:underline">Все</button>
                </div>
                
                <div className="space-y-4">
                  {schedule.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                      <div className="w-14 text-center shrink-0">
                        <div className={`text-sm font-bold ${item.active ? 'text-blue-600' : 'text-slate-900'}`}>{item.time}</div>
                      </div>
                      <div className={`w-1 h-12 rounded-full ${item.active ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
                      <div>
                        <div className="font-bold text-slate-900">{item.subject}</div>
                        <div className="text-sm text-slate-500">{item.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Homework Block */}
              <div className="bento-card flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Задачи</h3>
                  <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                    {tasks.filter(t => !t.done).length}
                  </span>
                </div>

                {/* Task list */}
                <div className="space-y-3 mb-6 overflow-y-auto max-h-[250px] pr-2 custom-scrollbar">
                  {tasks.map(task => (
                    <div 
                      key={task.id} 
                      className={`flex items-start p-4 rounded-2xl border transition-all ${task.done ? 'bg-slate-50 border-slate-100' : 'bg-white border-slate-200 shadow-sm hover:border-blue-300'}`}
                    >
                      <button 
                        onClick={() => toggleTask(task.id)}
                        className={`shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center mr-4 mt-0.5 transition-colors ${task.done ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 text-transparent hover:border-blue-600'}`}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </button>
                      <span className={`text-sm ${task.done ? 'text-slate-400 line-through' : 'text-slate-800 font-medium'}`}>
                        {task.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Add task input */}
                <form onSubmit={addTask} className="mt-auto pt-4 flex gap-2">
                  <input 
                    type="text" 
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Новая задача..."
                    className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-w-0"
                  />
                  <button type="submit" className="bg-slate-900 text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors shrink-0">
                    +
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
