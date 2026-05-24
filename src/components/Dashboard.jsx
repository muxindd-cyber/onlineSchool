import React, { useState, useEffect } from 'react';
import { Video } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  // Load tasks from localStorage or set defaults
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
        <div className="mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            С возвращением, {user?.name || 'ученик'}! 👋
          </h2>
          <p className="text-slate-600">Ваш прогресс и план на сегодня. До экзаменов осталось 142 дня.</p>
        </div>

        <div className="bento-card mb-8 !p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Общий прогресс подготовки</h3>
              <p className="text-sm text-slate-500">Пройдено 18 из 24 оплаченных занятий</p>
            </div>
            <span className="text-2xl font-bold text-orange">75%</span>
          </div>
          <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-orange to-emerald-500 rounded-full transition-all" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Schedule & Zoom Block (Left Column) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Next Lesson Card */}
            <div className="bento-card border-l-4 border-orange bg-gradient-to-br from-white to-orange/5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-xs font-bold text-orange uppercase tracking-wider mb-1">Следующий урок</div>
                  <h3 className="text-xl font-bold text-slate-900">Русский язык</h3>
                </div>
                <div className="bg-orange/10 text-orange font-bold px-3 py-1 rounded-lg">18:00</div>
              </div>
              <p className="text-sm text-slate-600 mb-6">Тема: Разбор задания №27. Идеальное сочинение.</p>
              
              <a
                href="https://zoom.us"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3 px-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-md"
              >
                <Video className="w-5 h-5 mr-2" />
                Подключиться к Zoom
              </a>
            </div>

            {/* Schedule Timeline */}
            <div className="bento-card">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Расписание на сегодня</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
                {schedule.map((item, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white ${item.active ? 'bg-orange shadow-[0_0_0_4px_rgba(249,115,22,0.2)]' : 'bg-slate-200'} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}></div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-900">{item.time}</span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.active ? 'bg-orange/10 text-orange' : 'bg-slate-200 text-slate-600'}`}>{item.type}</span>
                      </div>
                      <div className="text-sm text-slate-600">{item.subject}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Homework & Finances */}
          <div className="md:col-span-8 flex flex-col gap-6">
            
            {/* Finances Block */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bento-card !p-5 flex flex-col justify-center">
                <div className="text-sm text-slate-500 mb-1">Оплачено уроков</div>
                <div className="text-3xl font-bold text-slate-900">24</div>
              </div>
              <div className="bento-card !p-5 flex flex-col justify-center border-b-4 border-b-emerald-500">
                <div className="text-sm text-slate-500 mb-1">Пройдено</div>
                <div className="text-3xl font-bold text-slate-900">18</div>
              </div>
              <div className="bento-card !p-5 flex flex-col justify-center bg-slate-900 text-white">
                <div className="text-sm text-slate-400 mb-1">Текущий баланс</div>
                <div className="text-3xl font-bold">12 500 ₽</div>
                <button className="text-xs text-orange mt-2 text-left hover:underline">Пополнить баланс &rarr;</button>
              </div>
            </div>

            {/* Homework Block */}
            <div className="bento-card flex-grow flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">Домашние задания</h3>
                <span className="bg-slate-100 text-slate-600 text-sm font-semibold px-3 py-1 rounded-full">
                  {tasks.filter(t => !t.done).length} осталось
                </span>
              </div>

              {/* Task list */}
              <div className="space-y-3 mb-6 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
                {tasks.map(task => (
                  <div 
                    key={task.id} 
                    className={`flex items-start p-4 rounded-xl border transition-all ${task.done ? 'bg-slate-50 border-slate-100' : 'bg-white border-slate-200 shadow-sm hover:border-orange/30'}`}
                  >
                    <button 
                      onClick={() => toggleTask(task.id)}
                      className={`shrink-0 w-6 h-6 rounded-md border flex items-center justify-center mr-4 mt-0.5 transition-colors ${task.done ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 text-transparent hover:border-orange'}`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </button>
                    <span className={`text-sm ${task.done ? 'text-slate-400 line-through' : 'text-slate-800 font-medium'}`}>
                      {task.text}
                    </span>
                  </div>
                ))}
                {tasks.length === 0 && (
                  <div className="text-center py-8 text-slate-500 text-sm">
                    Все задачи выполнены! Вы молодец 🎉
                  </div>
                )}
              </div>

              {/* Add task input */}
              <form onSubmit={addTask} className="mt-auto pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
                <input 
                  type="text" 
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Добавить новую задачу..."
                  className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange min-w-0"
                />
                <button type="submit" className="bg-orange text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-orange/90 transition-colors shrink-0">
                  Добавить
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
