import React, { useState, useRef, useEffect } from 'react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Здравствуйте! Я ИИ-помощник школы «Я уже все знаю». Чем могу помочь?', sender: 'ai' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateMockResponse = (input) => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('цена') || lowerInput.includes('стоимость') || lowerInput.includes('сколько стоит')) {
      return 'Стоимость обучения зависит от выбранного тарифа и количества предметов. В среднем, полная подготовка по 4 предметам обходится в 160 000 ₽ в год. Оставьте заявку на бесплатную диагностику, и мы подберем оптимальный вариант!';
    }
    if (lowerInput.includes('гарантия') || lowerInput.includes('договор') || lowerInput.includes('возврат')) {
      return 'Мы юридически гарантируем результат: 80+ баллов на ЕГЭ или оценку «5» на ОГЭ. Если вы выполнили все наши требования, но не набрали нужный балл — мы вернем деньги по договору.';
    }
    if (lowerInput.includes('учителя') || lowerInput.includes('преподаватели') || lowerInput.includes('кто учит')) {
      return 'Наши преподаватели — эксперты из топ-3%. Это действующие эксперты ФИПИ, кандидаты наук и выпускники МГУ/МФТИ.';
    }
    if (lowerInput.includes('привет') || lowerInput.includes('здравствуйте')) {
      return 'Приветствую! Выбираете курсы для подготовки к экзаменам?';
    }

    return 'Для детальной консультации оставьте заявку на сайте или позвоните: 8 (800) 000-00-00.';
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = generateMockResponse(userMsg.text);
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: aiResponse, sender: 'ai' }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-neutral-800 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        aria-label="Открыть чат"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      <div
        className={`fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-white border border-neutral-200 shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 origin-bottom-right flex flex-col ${
          isOpen ? 'scale-100 opacity-100 h-[500px]' : 'scale-0 opacity-0 h-0 pointer-events-none'
        }`}
      >
        <div className="bg-neutral-900 text-white p-4 flex justify-between items-center shrink-0">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-brand-400 text-neutral-900 flex items-center justify-center mr-3 font-bold text-xs border border-brand-300">
              AI
            </div>
            <div>
              <h3 className="font-semibold text-sm">ИИ-Методист</h3>
              <p className="text-[10px] text-white/50">Онлайн</p>
            </div>
          </div>
          <button type="button" onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-grow p-4 overflow-y-auto space-y-4 custom-scrollbar bg-brand-50/50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.sender === 'user'
                    ? 'bg-neutral-900 text-white rounded-tr-sm'
                    : 'bg-white border border-neutral-200 text-neutral-700 rounded-tl-sm shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-neutral-200 p-4 rounded-2xl rounded-tl-sm shadow-sm flex space-x-1.5 items-center">
                <div className="w-2 h-2 bg-brand-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-brand-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-brand-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSend} className="p-3 bg-white border-t border-neutral-100 flex items-center gap-2 shrink-0">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Введите ваш вопрос..."
            className="flex-grow input-field !py-2 !rounded-full text-sm"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default AIAssistant;
