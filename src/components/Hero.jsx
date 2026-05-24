import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-20 pb-16 px-6 relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-orange/10 border border-orange/20 text-orange font-semibold text-sm tracking-wide self-start shadow-sm">
            Финансовая ответственность по договору
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
            Не наберете 80+ баллов — <span className="text-orange">вернем деньги</span> по договору
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Гарантируем оценку «5» на ОГЭ или 80+ баллов на ЕГЭ с любого стартового уровня. Никаких устных обещаний — финансовая ответственность зафиксирована в двустороннем договоре.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="btn-primary text-lg">
              Записаться на бесплатную диагностику знаний
            </a>
          </div>
        </div>

        {/* Bento Grid Stats right side */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-6 mt-8 lg:mt-0">
          
          <a href="#booking" className="bento-card p-6 flex flex-col justify-center relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] group-hover:bg-emerald-500/10 transition-colors"></div>
            <div className="text-4xl font-bold text-slate-900 mb-2">до 8 чел.</div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Мини-группы</h3>
            <p className="text-sm text-slate-500">
              Ребенок не затеряется в чате на 1000 участников — преподаватель контролирует работу каждого и разбирает ошибки в реальном времени.
            </p>
            <span className="text-xs font-semibold text-emerald-600 mt-3">Записаться на диагностику →</span>
          </a>

          <a href="#booking" className="bento-card p-6 flex flex-col justify-center relative overflow-hidden group cursor-pointer">
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange/5 blur-[50px] group-hover:bg-orange/10 transition-colors"></div>
            <div className="text-4xl font-bold text-slate-900 mb-2">82,4 <span className="text-xl text-slate-500">балла</span></div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Средний результат</h3>
            <p className="text-sm text-slate-500">
              На 25 баллов выше официального среднего показателя по стране (57 баллов).
            </p>
            <span className="text-xs font-semibold text-orange mt-3">Узнать свой балл →</span>
          </a>

          <a href="#booking" className="bento-card p-6 sm:col-span-2 lg:col-span-1 flex flex-col justify-center relative overflow-hidden group cursor-pointer">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="text-4xl font-bold text-slate-900 mb-2">160 000 ₽</div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Экономия в год</h3>
            <p className="text-sm text-slate-500">
              Полная подготовка по 4 ключевым предметам стоит меньше, чем один узкопрофильный репетитор в Москве.
            </p>
            <span className="text-xs font-semibold text-blue-600 mt-3">Подобрать программу →</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
