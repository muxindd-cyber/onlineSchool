import React, { useState } from 'react';

const ContactForm = () => {
  const [studentClass, setStudentClass] = useState('');

  return (
    <section className="section relative overflow-hidden" id="booking">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-200/30 blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto bento-card p-8 md:p-12 relative z-10 bg-white border-neutral-200">
        <div className="text-center mb-10">
          <p className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-800 font-semibold text-sm tracking-wide">
            Тест-драйв без обязательств
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Узнайте реальный текущий балл ребенка до оплаты обучения
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Оставьте заявку на бесплатную 45-минутную диагностику по материалам ФИПИ. Мы подсветим пробелы и составим
            PDF-трек поступления — он останется у вас в любом случае.
          </p>
        </div>

        <form className="max-w-xl mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-600 mb-2">
                Имя родителя
              </label>
              <input
                type="text"
                id="name"
                className="input-field"
                placeholder="Как к вам обращаться?"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-600 mb-2">
                Номер телефона
              </label>
              <input
                type="tel"
                id="phone"
                className="input-field"
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="class" className="block text-sm font-medium text-neutral-600 mb-2">
              Класс ученика
            </label>
            <select
              id="class"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="input-field appearance-none"
              required
            >
              <option value="" disabled>
                Выберите класс
              </option>
              <option value="9">9 класс (ОГЭ)</option>
              <option value="10">10 класс (ЕГЭ база)</option>
              <option value="11">11 класс (ЕГЭ)</option>
            </select>
          </div>

          <button type="submit" className="w-full btn-primary text-lg mt-4">
            Записаться на бесплатную диагностику
          </button>

          <p className="text-center text-xs text-neutral-500 mt-4">
            Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
