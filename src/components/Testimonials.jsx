import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-20 px-6 relative" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Истории поступлений
          </h2>
          <p className="text-slate-600 text-lg">
            Мы гордимся нашими учениками и их результатами. Вот что говорят они и их родители.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Review 1 */}
          <div className="bento-card flex flex-col">
            <div className="flex items-center mb-4">
              <div className="flex text-orange">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                ))}
              </div>
            </div>
            <p className="text-slate-700 italic mb-6 flex-grow">
              «Искали замену обычным репетиторам, так как сын писал пробники по физике максимум на 42 балла. Записались сюда из-за договора с четкой гарантией возврата денег. Итог — 86 баллов на реальном ЕГЭ и зачисление в МИФИ на бюджет! В Личном кабинете родителя видела каждую оценку и посещение, так что обошлись без домашних допросов.»
            </p>
            <div className="flex items-center mt-auto">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold mr-3 border border-slate-200">ЕБ</div>
              <div>
                <p className="text-slate-900 font-bold">Екатерина Б.</p>
                <p className="text-slate-500 text-xs uppercase tracking-wider">Мама выпускника</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bento-card flex flex-col">
            <div className="flex items-center mb-4">
              <div className="flex text-orange">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                ))}
              </div>
            </div>
            <p className="text-slate-700 italic mb-6 flex-grow">
              «В крупных онлайн-школах не зашло — на вебинарах по 1000 человек, вопросы в чате просто улетают. Здесь в группе было всего 7 парней, преподаватель спрашивал каждого по 5–6 раз за урок, отсидеться в телефоне нереально. Куратор отвечал в Телеграме даже в 11 вечера, когда я тупил над домашкой. Сдал профильную математику на 88 баллов.»
            </p>
            <div className="flex items-center mt-auto">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold mr-3 border border-slate-200">АК</div>
              <div>
                <p className="text-slate-900 font-bold">Артем К.</p>
                <p className="text-slate-500 text-xs uppercase tracking-wider">Ученик, 11 класс</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bento-card flex flex-col md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="flex text-orange">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                ))}
              </div>
            </div>
            <p className="text-slate-700 italic mb-6 flex-grow">
              «Дочка панически боялась ОГЭ по обществознанию, до слез. Понравилось, что на первом уроке провели диагностику и выдали четкий PDF-план, где расписан каждый день. Никакой воды, только факты и разбор ловушек в КИМах. Дочка сдала на твердую "5", набрав 34 балла из 37. Спасибо за сохраненные нервы!»
            </p>
            <div className="flex items-center mt-auto">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold mr-3 border border-slate-200">ИН</div>
              <div>
                <p className="text-slate-900 font-bold">Ирина Николаевна</p>
                <p className="text-slate-500 text-xs uppercase tracking-wider">Мама девятиклассницы</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
