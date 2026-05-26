import React from 'react';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="section min-h-[92vh] flex items-center relative overflow-hidden">
      <div
        className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-200/40 blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-15%] left-[-10%] w-[40%] h-[40%] bg-brand-100 blur-[80px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <p className="inline-flex self-center lg:self-start mb-6 px-4 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-800 font-medium text-sm tracking-wide">
              Финансовая ответственность по договору
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-neutral-900">
              Не наберете 80+ баллов —{' '}
              <span className="text-brand-600">вернем деньги</span> по договору
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Гарантируем оценку «5» на ОГЭ или 80+ баллов на ЕГЭ с любого стартового уровня. Никаких устных
              обещаний — финансовая ответственность зафиксирована в двустороннем договоре.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#booking" className="btn-primary text-base sm:text-lg">
                Записаться на бесплатную диагностику
              </a>
              <a href="#services" className="btn-secondary text-base sm:text-lg">
                Смотреть программы
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center gap-8">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-[0_12px_40px_rgba(18,18,18,0.08)]">
              <img
                src={heroImage}
                alt="Подготовка к экзаменам"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 w-full max-w-md lg:max-w-none">
              <a
                href="#booking"
                className="bento-card p-5 flex flex-col group cursor-pointer hover:border-neutral-900/30"
              >
                <div className="text-3xl font-bold text-neutral-900 mb-1">до 8 чел.</div>
                <h3 className="text-base font-semibold text-neutral-800 mb-1">Мини-группы</h3>
                <p className="text-sm text-neutral-500">
                  Преподаватель контролирует работу каждого и разбирает ошибки в реальном времени.
                </p>
                <span className="text-xs font-semibold text-brand-700 mt-2 group-hover:underline">
                  Записаться →
                </span>
              </a>

              <a
                href="#booking"
                className="bento-card p-5 flex flex-col group cursor-pointer hover:border-neutral-900/30 sm:col-span-1"
              >
                <div className="text-3xl font-bold text-neutral-900 mb-1">
                  82,4 <span className="text-lg text-neutral-500 font-normal">балла</span>
                </div>
                <h3 className="text-base font-semibold text-neutral-800 mb-1">Средний результат</h3>
                <p className="text-sm text-neutral-500">На 25 баллов выше среднего по стране (57 баллов).</p>
                <span className="text-xs font-semibold text-brand-700 mt-2 group-hover:underline">
                  Узнать свой балл →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
