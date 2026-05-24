import React, { useState } from 'react';

const ContactForm = () => {
  const [studentClass, setStudentClass] = useState('');
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="booking">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-orange/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto bento-card p-8 md:p-12 relative z-10 border-orange/10 bg-white/90 shadow-2xl shadow-orange/5">
        <div className="text-center mb-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange/10 border border-orange/20 text-orange font-semibold text-sm tracking-wide">
            Тест-драйв без обязательств
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Узнайте реальный текущий балл ребенка до того, как оплатите обучение
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Оставьте заявку на бесплатную 45-минутную диагностику знаний по актуальным материалам ФИПИ. Мы подсветим скрытые пробелы и составим пошаговый PDF-трек поступления в вуз, который останется у вас в любом случае.
          </p>
        </div>

        <form className="max-w-xl mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-2">Имя родителя</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
                placeholder="Как к вам обращаться?"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-600 mb-2">Номер телефона</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="class" className="block text-sm font-medium text-slate-600 mb-2">Класс ученика</label>
            <select
              id="class"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors appearance-none"
              required
            >
              <option value="" disabled>Выберите класс</option>
              <option value="9">9 класс (ОГЭ)</option>
              <option value="10">10 класс (ЕГЭ база)</option>
              <option value="11">11 класс (ЕГЭ)</option>
            </select>
          </div>

          <button type="submit" className="w-full btn-primary text-lg mt-4">
            Записаться на бесплатную диагностику знаний
          </button>
          
          <p className="text-center text-xs text-slate-500 mt-4">
            Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
