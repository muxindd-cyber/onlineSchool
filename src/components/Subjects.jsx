import React, { useState } from 'react';
import { Video } from 'lucide-react';

const subjectsData = [
  {
    id: 'russian',
    name: 'Русский язык',
    icon: '📚',
    color: 'emerald',
    isUnlocked: true,
    topics: [
      { id: 1, title: 'Задание 8: Синтаксические нормы', completed: true },
      { id: 2, title: 'Задание 27: Структура идеального сочинения', completed: false },
      { id: 3, title: 'Задание 12: Правописание суффиксов и окончаний', completed: false },
    ],
    materials: [
      { id: 1, title: 'Клише для сочинения ЕГЭ (PDF)', size: '1.2 MB' },
      { id: 2, title: 'Словарь паронимов от ФИПИ (PDF)', size: '0.8 MB' },
    ],
  },
  {
    id: 'math',
    name: 'Математика (Профиль)',
    icon: '📐',
    color: 'blue',
    isUnlocked: false,
    topics: [],
    materials: [],
  },
  {
    id: 'history',
    name: 'История',
    icon: '🏛️',
    color: 'orange',
    isUnlocked: false,
    topics: [],
    materials: [],
  },
  {
    id: 'social',
    name: 'Обществознание',
    icon: '🌍',
    color: 'indigo',
    isUnlocked: false,
    topics: [],
    materials: [],
  },
];

const progressPercent = (topics) => {
  const total = topics?.length || 0;
  if (!total) return 0;
  const done = topics.filter((t) => t.completed).length;
  return Math.round((done / total) * 100);
};

const Subjects = () => {
  const [subjects, setSubjects] = useState(subjectsData);
  const [activeSubject, setActiveSubject] = useState(subjects[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedToUnlock, setSelectedToUnlock] = useState(null);

  const handleSubjectClick = (subject) => {
    if (subject.isUnlocked) {
      setActiveSubject(subject);
    } else {
      setSelectedToUnlock(subject);
      setShowModal(true);
    }
  };

  const unlockSubject = () => {
    const unlocked = {
      ...selectedToUnlock,
      isUnlocked: true,
      topics: [
        { id: 1, title: 'Вводное занятие', completed: false },
        { id: 2, title: 'Первый модуль: Основы', completed: false },
      ],
      materials: [{ id: 1, title: 'Рабочая тетрадь (PDF)', size: '2.5 MB' }],
    };
    setSubjects(subjects.map((s) => (s.id === selectedToUnlock.id ? unlocked : s)));
    setActiveSubject(unlocked);
    setShowModal(false);
  };

  const completedTopics = activeSubject.topics?.filter((t) => t.completed).length || 0;
  const totalTopics = activeSubject.topics?.length || 0;

  return (
    <section className="py-6 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Мои предметы</h2>
          <p className="text-slate-600">Учебные материалы и домашние задания по курсам.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-10">
          {subjects.map((subject) => (
            <button
              key={subject.id}
              type="button"
              onClick={() => handleSubjectClick(subject)}
              className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl border-2 transition-all relative overflow-hidden group min-h-[120px] sm:min-h-0
                ${
                  activeSubject.id === subject.id && subject.isUnlocked
                    ? 'bg-white border-orange shadow-md scale-105 z-10'
                    : 'bg-white/60 border-transparent shadow-sm hover:bg-white hover:shadow hover:-translate-y-1'
                }
              `}
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{subject.icon}</div>
              <h3 className="font-bold text-slate-900 text-center text-xs sm:text-base leading-tight">{subject.name}</h3>

              {!subject.isUnlocked && (
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="bg-slate-900 text-white p-2 rounded-full shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {activeSubject && activeSubject.isUnlocked && (
          <div className="bento-card bg-white animate-in fade-in duration-500">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 border-b border-slate-100">
              <div className="flex items-start sm:items-center gap-3 sm:gap-0">
                <div className="text-4xl sm:text-5xl sm:mr-4 shrink-0">{activeSubject.icon}</div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{activeSubject.name}</h2>
                  <p className="text-slate-500">Доступ ко всем материалам курса открыт</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-2 w-40 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange rounded-full transition-all"
                        style={{ width: `${progressPercent(activeSubject.topics)}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-500">
                      {completedTopics} / {totalTopics} тем
                    </span>
                  </div>
                </div>
              </div>
              <a
                href="https://zoom.us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center py-3 px-6 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-md shrink-0 w-full sm:w-auto"
              >
                <Video className="w-5 h-5 mr-2" />
                Подключиться к уроку
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Домашние задания по темам</h3>
                <div className="space-y-3">
                  {activeSubject.topics?.map((topic) => (
                    <div key={topic.id} className="flex items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0 ${
                          topic.completed ? 'bg-emerald-500 text-white' : 'border-2 border-slate-300'
                        }`}
                      >
                        {topic.completed && (
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${topic.completed ? 'text-slate-500 line-through' : 'text-slate-800'}`}>
                          {topic.title}
                        </p>
                        {!topic.completed && (
                          <button type="button" className="text-xs text-orange font-bold mt-2 hover:underline">
                            Приступить к выполнению
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  {(!activeSubject.topics || activeSubject.topics.length === 0) && (
                    <p className="text-slate-500 text-sm italic">Заданий пока нет.</p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Пособия и материалы</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeSubject.materials?.map((material) => (
                    <div
                      key={material.id}
                      className="p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group bg-white cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center mb-3 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        PDF
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">{material.title}</h4>
                      <p className="text-xs text-slate-500">{material.size}</p>
                    </div>
                  ))}
                  {(!activeSubject.materials || activeSubject.materials.length === 0) && (
                    <p className="text-slate-500 text-sm italic col-span-full">Материалы скоро появятся.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bento-card w-full max-w-md bg-white p-8 relative animate-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
            <div className="text-5xl mb-4 text-center">{selectedToUnlock?.icon}</div>
            <h3 className="text-2xl font-bold text-center mb-2 text-slate-900">Доступ закрыт</h3>
            <p className="text-center text-slate-600 mb-8">
              У вас пока нет доступа к курсу «{selectedToUnlock?.name}». Хотите открыть демо-доступ?
            </p>
            <div className="flex flex-col gap-3">
              <button type="button" onClick={unlockSubject} className="btn-primary w-full py-3">
                Открыть демо-доступ бесплатно
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-6 py-3 rounded-full text-slate-600 font-medium hover:bg-slate-100 transition-colors"
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Subjects;
