import React from 'react';

const Team = () => {
  return (
    <section className="py-20 px-6" id="team">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Вашего ребенка будут учить эксперты из топ-3%
          </h2>
          <p className="text-slate-600 text-lg">
            Мы не нанимаем студентов на подработку. Жесткий 4-этапный отбор проходят единицы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Teacher 1 */}
          <div className="bento-card group flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-emerald-500 transition-colors duration-300 shadow-xl">
              <img src="/images/mikhail_avatar_1779147208218.png" alt="Михаил Ральченков" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold mb-1 text-slate-900">Михаил Ральченков</h3>
            <p className="text-emerald-600 text-sm font-semibold mb-4">Ведущий преподаватель математики</p>
            <div className="bg-slate-50 p-4 rounded-xl w-full text-left mt-auto border border-slate-100">
              <p className="text-sm text-slate-700">
                <strong className="text-slate-900">Действующий эксперт ФИПИ.</strong> За последние 4 года лично подготовил 142 высокобалльника (85+) и 8 стобалльников. Средний балл его учеников — 84,6.
              </p>
            </div>
          </div>

          {/* Teacher 2 */}
          <div className="bento-card group flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-orange transition-colors duration-300 shadow-xl">
              <img src="/images/anna_avatar_1779147222156.png" alt="Анна Савиных" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold mb-1 text-slate-900">Анна Савиных</h3>
            <p className="text-orange text-sm font-semibold mb-4">Старший методист по русскому языку</p>
            <div className="bg-slate-50 p-4 rounded-xl w-full text-left mt-auto border border-slate-100">
              <p className="text-sm text-slate-700">
                <strong className="text-slate-900">Кандидат филологических наук</strong> с 12-летним опытом. 94% её студентов сдают итоговое сочинение на максимальный балл с первой попытки благодаря авторским визуальным моделям.
              </p>
            </div>
          </div>

          {/* Teacher 3 */}
          <div className="bento-card group flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-blue-500 transition-colors duration-300 shadow-xl">
              <img src="/images/dmitry_avatar_1779147235635.png" alt="Дмитрий Погодин" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold mb-1 text-slate-900">Дмитрий Погодин</h3>
            <p className="text-blue-600 text-sm font-semibold mb-4">Преподаватель физики и информатики</p>
            <div className="bg-slate-50 p-4 rounded-xl w-full text-left mt-auto border border-slate-100">
              <p className="text-sm text-slate-700">
                <strong className="text-slate-900">Выпускник МФТИ.</strong> Перевел сухую теорию в интерактивные онлайн-тетради, сократив время усвоения тем в 2,5 раза. Каждый третий его ученик учится в Бауманке или МФТИ на бюджете.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
