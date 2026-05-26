import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-20 px-6 relative" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Истории поступлений
          </h2>
          <p className="text-white/80 text-lg">
            Мы гордимся нашими учениками и их результатами. Вот что говорят они и их родители.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Review 1 */}
          <div className="bento-card flex flex-col">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                ))}
              </div>
              <span className="ml-2 font-bold text-slate-700 text-sm">5/5</span>
            </div>
            <p className="text-slate-700 italic mb-6 flex-grow">
              «Отличная школа! Учитель информатики объяснил сложные вещи на пальцах, подготовился к экзамену за 3 месяца. Рекомендую!»
            </p>
            <div className="flex items-center mt-auto pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">АК</div>
              <div>
                <p className="text-slate-900 font-bold">Айбек К.</p>
                <p className="text-slate-500 text-xs uppercase tracking-wider">Информатика</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bento-card flex flex-col">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                ))}
              </div>
              <span className="ml-2 font-bold text-slate-700 text-sm">5/5</span>
            </div>
            <p className="text-slate-700 italic mb-6 flex-grow">
              «Занимаемся английским и литературой. Педагоги — мастера своего дела, очень структурированный подход. Ребенок перестал бояться отвечать на уроках.»
            </p>
            <div className="flex items-center mt-auto pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold mr-3">МЛ</div>
              <div>
                <p className="text-slate-900 font-bold">Мария Л.</p>
                <p className="text-slate-500 text-xs uppercase tracking-wider">Мама ученика</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bento-card flex flex-col md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                ))}
              </div>
              <span className="ml-2 font-bold text-slate-700 text-sm">5/5</span>
            </div>
            <p className="text-slate-700 italic mb-6 flex-grow">
              «Сильная база по биологии и химии. Подготовка на уровне профильных вузов. Спасибо большое команде школы!»
            </p>
            <div className="flex items-center mt-auto pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold mr-3">РД</div>
              <div>
                <p className="text-slate-900 font-bold">Рахим Д.</p>
                <p className="text-slate-500 text-xs uppercase tracking-wider">Биология и Химия</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
