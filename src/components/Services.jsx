import React from 'react';

const programs = [
  {
    title: 'Полная подготовка к ЕГЭ (11 класс)',
    pain: 'Страх завалить экзамен, остаться без бюджета и потратить сотни тысяч рублей на хаотичные занятия с репетиторами.',
    result: (
      <>
        Пошаговая программа из 42 логических модулей с ИИ-аналитикой пробелов. От{' '}
        <span className="text-brand-700 font-bold">+25 баллов</span> за 6 месяцев и зачисление на бюджет.
      </>
    ),
  },
  {
    title: 'Подготовка к ОГЭ без паники (9 класс)',
    pain: 'Ощущение «каши в голове», страх «чистого листа» и ежедневное давление со стороны школьных учителей.',
    result: (
      <>
        Освоение сложных тем через жизненные примеры. Гарантированная{' '}
        <span className="text-brand-700 font-bold">оценка «5»</span> на экзамене и спокойный переход в профильный класс.
      </>
    ),
  },
  {
    title: 'Экспресс-интенсив повышенной сложности',
    pain: 'До экзамена остался месяц, в знаниях критические дыры, а на заданиях второй части ребенок теряет все баллы.',
    result: (
      <>
        Практикум по критериям ФИПИ и 12 авто-тренажеров. Систематизация знаний за{' '}
        <span className="text-brand-700 font-bold">30 дней</span> и защита от потерь на апелляции.
      </>
    ),
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 sm:mb-16 md:flex justify-between items-end gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700 mb-4">Программы</p>
            <h2 className="section-title mb-6">Программы подготовки</h2>
            <p className="section-lead">
              Мы не продаем часы репетитора. Мы гарантируем достижение вашей образовательной цели.
            </p>
          </div>
          <a href="#booking" className="link-brand flex items-center shrink-0">
            Подобрать программу
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <a
              key={program.title}
              href="#booking"
              className="bento-card relative overflow-hidden group block cursor-pointer hover:border-neutral-900/25"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-400 rounded-t-3xl" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-bold mb-6 text-neutral-900 mt-2">{program.title}</h3>

              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider text-neutral-500 font-bold mb-2">Боль</div>
                <p className="text-neutral-600 text-sm leading-relaxed">{program.pain}</p>
              </div>

              <div className="bg-brand-50 p-4 rounded-2xl border border-brand-100">
                <div className="text-xs uppercase tracking-wider text-brand-800 font-bold mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Результат
                </div>
                <p className="text-sm font-medium text-neutral-800 leading-relaxed">{program.result}</p>
              </div>
              <span className="inline-block mt-6 text-sm font-semibold text-brand-700 group-hover:underline">
                Записаться на диагностику →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
