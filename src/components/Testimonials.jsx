import React from 'react';

const reviews = [
  {
    initials: 'АК',
    name: 'Айбек К.',
    subject: 'Информатика',
    text: '«Отличная школа! Учитель информатики объяснил сложные вещи на пальцах, подготовился к экзамену за 3 месяца. Рекомендую!»',
  },
  {
    initials: 'МЛ',
    name: 'Мария Л.',
    subject: 'Мама ученика',
    text: '«Занимаемся английским и литературой. Педагоги — мастера своего дела. Ребенок перестал бояться отвечать на уроках.»',
  },
  {
    initials: 'РД',
    name: 'Рахим Д.',
    subject: 'Биология и химия',
    text: '«Сильная база по биологии и химии. Подготовка на уровне профильных вузов. Спасибо большое команде школы!»',
  },
];

const StarRow = () => (
  <div className="flex text-brand-500">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="section bg-neutral-900 text-white" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 sm:mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-300 mb-4">Отзывы</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Истории поступлений</h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Мы гордимся нашими учениками и их результатами. Вот что говорят они и их родители.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 flex flex-col backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center mb-4 gap-2">
                <StarRow />
                <span className="font-bold text-white/90 text-sm">5/5</span>
              </div>
              <p className="text-white/85 italic mb-6 flex-grow leading-relaxed">{review.text}</p>
              <div className="flex items-center mt-auto pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-brand-400/20 border border-brand-300/40 flex items-center justify-center text-brand-200 font-bold mr-3 text-sm">
                  {review.initials}
                </div>
                <div>
                  <p className="text-white font-bold">{review.name}</p>
                  <p className="text-white/50 text-xs uppercase tracking-wider">{review.subject}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
