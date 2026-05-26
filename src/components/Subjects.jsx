import React, { useState } from 'react';
import { Video } from 'lucide-react';

const subjectsData = [
  {
    id: 'informatics',
    name: 'Информатика',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=400',
    color: 'emerald',
    isUnlocked: true,
    topics: [
      { id: 1, title: 'Основы алгоритмизации', completed: true },
      { id: 2, title: 'Программирование на Python', completed: false },
    ],
    materials: [
      { id: 1, title: 'Шпаргалка по Python (PDF)', size: '1.2 MB' },
    ],
  },
  {
    id: 'english',
    name: 'Английский язык',
    image: 'https://images.unsplash.com/photo-1521123845560-14093637aa7d?auto=format&fit=crop&q=80&w=400',
    color: 'blue',
    isUnlocked: false,
    topics: [],
    materials: [],
  },
  {
    id: 'biology',
    name: 'Биология',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400',
    color: 'emerald',
    isUnlocked: false,
    topics: [],
    materials: [],
  },
  {
    id: 'chemistry',
    name: 'Химия',
    image: 'https://images.unsplash.com/photo-1603126859595-8e50655257f5?auto=format&fit=crop&q=80&w=400',
    color: 'indigo',
    isUnlocked: false,
    topics: [],
    materials: [],
  },
  {
    id: 'physics',
    name: 'Физика',
    image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=400',
    color: 'blue',
    isUnlocked: false,
    topics: [],
    materials: [],
  },
  {
    id: 'arabic',
    name: 'Арабский язык',
    image: 'https://images.unsplash.com/photo-1583151474251-2aa21e421eb2?auto=format&fit=crop&q=80&w=400',
    color: 'orange',
    isUnlocked: false,
    topics: [],
    materials: [],
  },
  {
    id: 'french',
    name: 'Французский язык',
    image: 'https://images.unsplash.com/photo-1502602898657-3e907a5ea82c?auto=format&fit=crop&q=80&w=400',
    color: 'blue',
    isUnlocked: false,
    topics: [],
    materials: [],
  },
  {
    id: 'literature',
    name: 'Литература',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400',
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Каталог курсов</h2>
          <p className="text-white/80">Учебные материалы и домашние задания по вашим предметам.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-10">
          {subjects.map((subject) => (
            <button
              key={subject.id}
              type="button"
              onClick={() => handleSubjectClick(subject)}
              className={`flex flex-col text-left rounded-[2rem] border-2 transition-all relative overflow-hidden group min-h-[160px]
                ${
                  activeSubject.id === subject.id && subject.isUnlocked
                    ? 'bg-white border-blue-500 shadow-lg scale-105 z-10'
                    : 'bg-white border-transparent shadow-sm hover:shadow-md hover:-translate-y-1'
                }
              `}
            >
              <div className="w-full h-24 sm:h-32 bg-slate-200 relative overflow-hidden">
                <img src={subject.image} alt={subject.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white font-bold text-sm bg-black/30 backdrop-blur-md px-3 py-1 rounded-full">
                  Курс
                </div>
              </div>
              <div className="p-4 sm:p-5 w-full">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-tight mb-2">{subject.name}</h3>
                {subject.isUnlocked ? (
                  <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-md">Доступ открыт</span>
                ) : (
                  <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-md">Закрыто</span>
                )}
              </div>

              {!subject.isUnlocked && (
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-slate-900 text-white p-3 rounded-full shadow-xl">
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
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-slate-100">
                  <img src={activeSubject.image} alt={activeSubject.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{activeSubject.name}</h2>
                  <p className="text-slate-500 text-sm mt-1">Доступ ко всем материалам курса открыт</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all"
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
                    <div key={topic.id} className="flex items-start p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
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
                          <button type="button" className="text-xs text-blue-600 font-bold mt-2 hover:underline">
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
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bento-card w-full max-w-md bg-white p-8 relative animate-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <img src={selectedToUnlock?.image} alt={selectedToUnlock?.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-2 text-slate-900">Доступ закрыт</h3>
            <p className="text-center text-slate-600 mb-8">
              У вас пока нет доступа к курсу «{selectedToUnlock?.name}». Хотите открыть демо-доступ?
            </p>
            <div className="flex flex-col gap-3">
              <button type="button" onClick={unlockSubject} className="btn-primary bg-blue-600 hover:bg-blue-700 w-full py-3 shadow-blue-500/30">
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
