import React from 'react';

const Services = () => {
  return (
    <section className="py-20 px-6 relative" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
              Программы подготовки
            </h2>
            <p className="text-slate-600 text-lg">
              Мы не продаем часы репетитора. Мы гарантируем достижение вашей образовательной цели.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#booking" className="text-orange hover:text-orange/80 font-semibold flex items-center transition-colors">
              Подобрать программу 
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <a href="#booking" className="bento-card border-t-4 border-t-emerald-500 relative overflow-hidden group block cursor-pointer">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] group-hover:bg-emerald-500/20 transition-colors"></div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Полная подготовка к ЕГЭ (11 класс)</h3>
            
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">Боль</div>
              <p className="text-slate-600 text-sm">
                Страх завалить экзамен, остаться без бюджета и потратить сотни тысяч рублей на хаотичные занятия с репетиторами.
              </p>
            </div>
            
            <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
              <div className="text-xs uppercase tracking-wider text-emerald-600 font-bold mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Результат
              </div>
              <p className="text-sm font-medium text-slate-800">
                Пошаговая программа из 42 логических модулей с ИИ-аналитикой пробелов. Вы получаете от <span className="text-emerald-600 font-bold">+25 баллов</span> к текущему результату за 6 месяцев и зачисление на бюджетное отделение.
              </p>
            </div>
            <span className="inline-block mt-6 text-sm font-semibold text-emerald-600">Записаться на диагностику →</span>
          </a>

          {/* Card 2 */}
          <a href="#booking" className="bento-card border-t-4 border-t-orange relative overflow-hidden group block cursor-pointer">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange/10 blur-[50px] group-hover:bg-orange/20 transition-colors"></div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Подготовка к ОГЭ без паники (9 класс)</h3>
            
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">Боль</div>
              <p className="text-slate-600 text-sm">
                Ощущение «каши в голове», страх «чистого листа» и ежедневное психологическое давление со стороны школьных учителей.
              </p>
            </div>
            
            <div className="bg-orange/5 p-4 rounded-xl border border-orange/10">
              <div className="text-xs uppercase tracking-wider text-orange font-bold mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Результат
              </div>
              <p className="text-sm font-medium text-slate-800">
                Освоение сложных формул через жизненные примеры и мемы. Вы получаете <span className="text-orange font-bold">гарантированную оценку «5»</span> на экзамене и уверенный переход в профильный класс без семейных скандалов.
              </p>
            </div>
            <span className="inline-block mt-6 text-sm font-semibold text-orange">Записаться на диагностику →</span>
          </a>

          {/* Card 3 */}
          <a href="#booking" className="bento-card border-t-4 border-t-blue-500 relative overflow-hidden group block cursor-pointer">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] group-hover:bg-blue-500/20 transition-colors"></div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Экспресс-интенсив повышенной сложности</h3>
            
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">Боль</div>
              <p className="text-slate-600 text-sm">
                Страх, что до экзамена остался месяц, в знаниях есть критические дыры, а на заданиях второй части ребенок теряет все баллы.
              </p>
            </div>
            
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <div className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Результат
              </div>
              <p className="text-sm font-medium text-slate-800">
                Жесткий практикум по критериям оценивания ФИПИ и 12 авто-тренажеров. Вы получаете <span className="text-blue-600 font-bold">систематизацию знаний за 30 дней</span> и защиту от обидных потерь на апелляции.
              </p>
            </div>
            <span className="inline-block mt-6 text-sm font-semibold text-blue-600">Записаться на диагностику →</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Services;
