import React from 'react';

const teachers = [
  {
    name: 'Михаил Ральченков',
    role: 'Ведущий преподаватель математики',
    image: '/images/mikhail_avatar_1779147208218.png',
    bio: 'Действующий эксперт ФИПИ. За 4 года подготовил 142 высокобалльника (85+) и 8 стобалльников. Средний балл учеников — 84,6.',
  },
  {
    name: 'Анна Савиных',
    role: 'Старший методист по русскому языку',
    image: '/images/anna_avatar_1779147222156.png',
    bio: 'Кандидат филологических наук с 12-летним опытом. 94% студентов сдают итоговое сочинение на максимальный балл с первой попытки.',
  },
  {
    name: 'Дмитрий Погодин',
    role: 'Преподаватель физики и информатики',
    image: '/images/dmitry_avatar_1779147235635.png',
    bio: 'Выпускник МФТИ. Перевел сухую теорию в интерактивные онлайн-тетради, сократив время усвоения тем в 2,5 раза.',
  },
];

const Team = () => {
  return (
    <section className="section section-alt" id="team">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 sm:mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-700 mb-4">Эксперты</p>
          <h2 className="section-title mb-6">Вашего ребенка будут учить эксперты из топ-3%</h2>
          <p className="section-lead">
            Мы не нанимаем студентов на подработку. Жесткий 4-этапный отбор проходят единицы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.name} className="bento-card group flex flex-col items-center text-center">
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 mb-6 rounded-full overflow-hidden border-2 border-neutral-200 group-hover:border-brand-400 transition-colors duration-300 shadow-md">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-1 text-neutral-900">{teacher.name}</h3>
              <p className="text-brand-700 text-sm font-semibold mb-4">{teacher.role}</p>
              <div className="bg-brand-50 p-4 rounded-2xl w-full text-left mt-auto border border-brand-100">
                <p className="text-sm text-neutral-700 leading-relaxed">{teacher.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
