import React from 'react';

const Trust = () => {
  return (
    <section className="section section-alt" id="trust">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 sm:mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-700 mb-4">Почему мы</p>
          <h2 className="section-title mb-6">
            Вы сдадите экзамен на целевой балл, даже если сейчас пробники — на 35
          </h2>
          <p className="section-lead">
            Мы разрушаем систему хаотичной подготовки и «каши в голове».
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bento-card group">
            <div className="w-12 h-12 rounded-full bg-brand-100 border border-brand-200 flex items-center justify-center mb-5 text-brand-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900">42 логических модуля</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Вместо «каши в голове». Индивидуальный трек обучения разбит по дням. Вы точно знаете, что учить сегодня,
              завтра и за неделю до экзамена.
            </p>
          </div>

          <div className="bento-card group">
            <div className="w-12 h-12 rounded-full bg-brand-100 border border-brand-200 flex items-center justify-center mb-5 text-brand-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900">12 авто-тренажеров</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Вместо страха «чистого листа». Пошаговый разбор заданий второй части с ИИ-аналитикой. Первая полностью
              правильная задача — уже через 3 занятия.
            </p>
          </div>

          <div className="bento-card group">
            <div className="w-12 h-12 rounded-full bg-brand-100 border border-brand-200 flex items-center justify-center mb-5 text-brand-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900">Ответ за 5 минут</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Куратор на связи даже в 23:30. Ребенок видит еженедельный прирост на +5 баллов на графике — это возвращает
              уверенность.
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-3 bento-card bg-brand-50 border-brand-200 flex flex-col md:flex-row items-center justify-between p-8 sm:p-10 gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3 text-neutral-900">Нас выбирают за экспертность</h3>
              <p className="text-neutral-600 leading-relaxed">
                Только <strong className="text-neutral-900">1 из 33 кандидатов</strong> проходит 4-этапный ассессмент.
                Наши эксперты ежегодно сдают экзамен на 100 баллов и знают все скрытые ловушки ФИПИ.
              </p>
            </div>
            <div className="shrink-0 text-center md:text-right px-6 py-4 rounded-2xl bg-white border border-neutral-200">
              <div className="font-serif text-5xl sm:text-6xl font-bold text-brand-600 mb-1">82,4</div>
              <div className="text-neutral-500 uppercase tracking-widest text-xs font-semibold">Средний балл</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
