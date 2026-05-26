import React, { useState } from 'react';
import { Video, Lock, Play, CheckCircle2 } from 'lucide-react';

const subjectsData = [
  {
    id: 'informatics',
    name: 'Информатика',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=400',
    color: '#E98E86',
    tag: 'Урок',
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
    color: '#FF6584',
    tag: 'Урок',
    isUnlocked: false,
    topics: [],
    materials: [],
  },
  {
    id: 'biology',
    name: 'Биология',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400',
    color: '#43D399',
    tag: 'Урок',
    isUnlocked: false,
    topics: [],
    materials: [],
  },
  {
    id: 'chemistry',
    name: 'Химия',
    image: 'https://images.unsplash.com/photo-1603126859595-8e50655257f5?auto=format&fit=crop&q=80&w=400',
    color: '#FFB347',
    tag: 'Урок',
    isUnlocked: false,
    topics: [],
    materials: [],
  },
  {
    id: 'physics',
    name: 'Физика',
    image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=400',
    color: '#4FC3F7',
    tag: 'Урок',
    isUnlocked: false,
    topics: [],
    materials: [],
  },
  {
    id: 'arabic',
    name: 'Арабский язык',
    image: 'https://images.unsplash.com/photo-1583151474251-2aa21e421eb2?auto=format&fit=crop&q=80&w=400',
    color: '#A78BFA',
    tag: 'Урок',
    isUnlocked: false,
    topics: [],
    materials: [],
  },
  {
    id: 'french',
    name: 'Французский язык',
    image: 'https://images.unsplash.com/photo-1502602898657-3e907a5ea82c?auto=format&fit=crop&q=80&w=400',
    color: '#F472B6',
    tag: 'Урок',
    isUnlocked: false,
    topics: [],
    materials: [],
  },
  {
    id: 'literature',
    name: 'Литература',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400',
    color: '#34D399',
    tag: 'Урок',
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
    <section className="py-6 sm:py-10 px-4 sm:px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">

        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">Каталог уроков</h2>
          <p className="text-white/70 text-sm">Учебные материалы и домашние задания по вашим предметам.</p>
        </div>

        {/* Subject cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {subjects.map((subject) => (
            <button
              key={subject.id}
              type="button"
              onClick={() => handleSubjectClick(subject)}
              className={`flex flex-col text-left rounded-3xl border-2 transition-all relative overflow-hidden group
                ${activeSubject.id === subject.id && subject.isUnlocked
                  ? 'border-brand-500 shadow-xl shadow-brand-200 scale-[1.03] z-10'
                  : 'border-transparent shadow-md hover:shadow-lg hover:-translate-y-1'
                } bg-white`}
            >
              {/* Subject image */}
              <div className="w-full h-28 sm:h-32 relative overflow-hidden rounded-t-3xl">
                <img
                  src={subject.image}
                  alt={subject.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Tag badge */}
                <div
                  className="absolute bottom-2.5 left-3 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                  style={{ backgroundColor: subject.color }}
                >
                  {subject.tag}
                </div>

                {/* Lock overlay */}
                {!subject.isUnlocked && (
                  <div className="absolute inset-0 bg-black/30 flex items-end justify-end p-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
                      <Lock className="w-3.5 h-3.5 text-slate-700" />
                    </div>
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className="p-3.5">
                <h3 className="font-bold text-slate-900 text-sm leading-tight mb-2">{subject.name}</h3>
                {subject.isUnlocked ? (
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" /> Доступ открыт
                  </span>
                ) : (
                  <span className="inline-block bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Закрыто
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Active subject detail */}
        {activeSubject && activeSubject.isUnlocked && (
          <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-brand-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8 pb-6 border-b border-slate-100">
              <div className="flex items-start sm:items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 shadow-md"
                  style={{ boxShadow: `0 4px 16px ${activeSubject.color}44` }}
                >
                  <img src={activeSubject.image} alt={activeSubject.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{activeSubject.name}</h2>
                  <p className="text-slate-500 text-xs mt-0.5">Доступ ко всем материалам урока открыт</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-2 w-28 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${progressPercent(activeSubject.topics)}%`, backgroundColor: activeSubject.color }}
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500">{completedTopics}/{totalTopics} тем</span>
                  </div>
                </div>
              </div>
              <a
                href="https://zoom.us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-brand-600 text-white rounded-2xl font-bold hover:bg-brand-700 transition-colors shadow-md shrink-0 text-sm"
              >
                <Video className="w-4 h-4" />
                Подключиться к уроку
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-4">Темы уроков</h3>
                <div className="space-y-3">
                  {activeSubject.topics?.map((topic) => (
                    <div key={topic.id} className={`flex items-start p-4 rounded-2xl border transition-colors ${topic.completed ? 'bg-slate-50 border-slate-100' : 'bg-white border-slate-200 hover:border-brand-200'}`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0 ${topic.completed ? 'bg-emerald-500 text-white' : 'border-2 border-slate-300'}`}>
                        {topic.completed && <CheckCircle2 className="w-3 h-3" />}
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${topic.completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                          {topic.title}
                        </p>
                        {!topic.completed && (
                          <button type="button" className="text-xs text-brand-600 font-bold mt-1 hover:underline flex items-center gap-1">
                            <Play className="w-3 h-3" /> Начать урок
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  {(!activeSubject.topics || activeSubject.topics.length === 0) && (
                    <p className="text-slate-400 text-sm italic">Уроков пока нет.</p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-4">Пособия и материалы</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSubject.materials?.map((material) => (
                    <div key={material.id} className="p-4 rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all group bg-white cursor-pointer">
                      <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-3 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-0.5">{material.title}</h4>
                      <p className="text-xs text-slate-400">{material.size}</p>
                    </div>
                  ))}
                  {(!activeSubject.materials || activeSubject.materials.length === 0) && (
                    <p className="text-slate-400 text-sm italic col-span-full">Материалы скоро появятся.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="rounded-3xl bg-white w-full max-w-md p-8 relative shadow-2xl">
            <button type="button" onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="w-20 h-20 mx-auto mb-5 rounded-2xl overflow-hidden shadow-lg">
              <img src={selectedToUnlock?.image} alt={selectedToUnlock?.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-slate-900">Доступ закрыт</h3>
            <p className="text-center text-slate-500 text-sm mb-6">
              Урок «{selectedToUnlock?.name}» ещё не открыт. Хотите получить демо-доступ?
            </p>
            <div className="flex flex-col gap-3">
              <button type="button" onClick={unlockSubject} className="w-full py-3 bg-brand-600 text-white rounded-2xl font-bold hover:bg-brand-700 transition-colors shadow-md text-sm">
                Открыть демо-доступ бесплатно
              </button>
              <button type="button" onClick={() => setShowModal(false)} className="w-full py-3 text-slate-500 text-sm font-medium hover:bg-slate-50 rounded-2xl transition-colors">
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
