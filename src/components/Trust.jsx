import React from 'react';

const Trust = () => {
  return (
    <section className="py-20 px-6 relative" id="trust">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Вы сдадите экзамен на целевой балл, даже если сейчас пробники пишутся на 35, а в школе прочат провал
          </h2>
          <p className="text-slate-600 text-lg">
            Мы разрушаем систему хаотичной подготовки и «каши в голове».
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bento-card group">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">42 логических модуля</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Вместо «каши в голове». Индивидуальный трек обучения разбит по дням. Вы точно знаете, что учить сегодня, завтра и за неделю до экзамена, без хаотичного поиска теории.
            </p>
          </div>

          <div className="bento-card group">
            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">12 авто-тренажеров</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Вместо страха «чистого листа». Пошаговый разбор заданий второй части с ИИ-аналитикой. Первая полностью правильная задача повышенной сложности — уже через 3 занятия.
            </p>
          </div>

          <div className="bento-card group">
            <div className="w-14 h-14 rounded-full bg-orange/10 flex items-center justify-center mb-6 text-orange">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Ответ за 5 минут</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Вместо изоляции и паники. Куратор на связи даже в 23:30. Ребенок видит свой еженедельный прирост на +5 баллов на графике, что возвращает уверенность.
            </p>
          </div>

          {/* Large Trust Stats Banner */}
          <div className="md:col-span-2 lg:col-span-3 mt-8 bento-card bg-gradient-to-r from-orange/5 to-transparent border-orange/20 flex flex-col md:flex-row items-center justify-between p-8 shadow-sm">
            <div className="mb-6 md:mb-0 md:mr-8 flex-1">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Нас выбирают за экспертность</h3>
              <p className="text-slate-600">Только <strong className="text-slate-900">1 из 33 кандидатов</strong> проходит 4-этапный ассессмент. Наши эксперты ежегодно сдают экзамен на 100 баллов и знают все скрытые ловушки ФИПИ.</p>
            </div>
            <div className="flex-shrink-0 text-center md:text-right">
              <div className="text-5xl font-extrabold text-orange mb-1 drop-shadow-sm">82,4</div>
              <div className="text-slate-500 uppercase tracking-widest text-sm font-semibold">Средний балл</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
