import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const FAQUkr = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = {
    Клієнти: [
      {
        question: "Скільки часу потрібно, щоб мій список вакансій став активним?",
        answer:
          "Списки вакансій проходять швидку перевірку на відповідність нашим стандартам. Зазвичай це займає 24–48 годин. Після схвалення, ваша вакансія буде опублікована та доступна відповідним кандидатам. Ми також надаємо експертні поради з найму та галузеві рекомендації.",
      },
      {
        question: "Які варіанти оплати доступні для розміщення вакансій?",
        answer: "Ми приймаємо різні способи оплати: кредитні/дебетові картки, банківські перекази та виставлення рахунків для масових публікацій. Гнучкі плани відповідають вашим потребам у наймі.",
      },
    ],
    Кандидати: [
      {
        question: "Чи можу я розміщувати кілька вакансій з одного облікового запису?",
        answer: "Так. Ви можете керувати кількома публікаціями з одного акаунту для спрощення процесу найму.",
      },
      {
        question: "Чи є обмеження на кількість заявок для вакансії?",
        answer: "Ні. Обмежень немає — ваша вакансія буде доступною всім кваліфікованим кандидатам, поки ви її не закриєте або не встановите ліміт.",
      },
    ],
    Інше: [
      {
        question: "На які ролі ви здійснюєте підбір персоналу?",
        answer: "Ми набираємо персонал на рівнях від початкових до керівних у різних галузях, технічних і нетехнічних.",
      },
      {
        question: "Де ви знаходитесь?",
        answer: "Ми працюємо дистанційно з глобальним охопленням, з'єднуючи роботодавців і кандидатів по всьому світу.",
      },
      {
        question: "Навіщо мені потрібен рекрутер?",
        answer: "Рекрутер допомагає вам: 1. Усунути неякісні заявки за допомогою перевірки з підтримкою ШІ. 2. Швидше знаходити таланти через цілеспрямований пошук. 3. Заощаджувати час, оптимізуючи процес найму.",
      },
      {
        question: "Для яких галузей ви підбираєте кандидатів?",
        answer: "Ми спеціалізуємося на ІТ, фінансах, охороні здоров’я, маркетингу, продажах, інженерії та інших.",
      },
      {
        question: "Які ваші цінності?",
        answer: "Ми надаємо перевагу прозорості, ефективності та інноваціям у підборі персоналу — щоб забезпечити ідеальне співпадіння для роботодавців і кандидатів.",
      },
      {
        question: "Як я можу шукати вакансії за категоріями або локацією?",
        answer: "Використовуйте наші фільтри для точного пошуку за галуззю, посадою, досвідом і локацією.",
      },
    ],
  };

  const toggleFAQ = (category, index) => {
    const newIndex = `${category}-${index}`;
    setOpenIndex(openIndex === newIndex ? null : newIndex);
  };

  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Часті питання</title>
        <meta
          name="description"
          content="Ознайомтесь з відповідями на часті питання щодо наших послуг і як ними користуватися ефективніше."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        {/* FAQ Icon */}
        <img src="/images/FAQ.png" alt="FAQ Icon" className="mx-auto w-36 h-24 mb-4" />

        {/* Heading */}
        <div className="text-center mb-4">
          <div className="relative inline-block">
            <h2 className="text-6xl font-bold text-gray-900">Часті Питання</h2>
            <img src="/images/FAQBg.png" alt="Underline" className="absolute left-0 bottom-[-3px] w-full -z-40" />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mt-2">
          Маєте питання? Ми маємо відповіді. Дізнайтеся більше про nuJOB.AI і як ми можемо допомогти.
        </p>

        {/* Sections */}
        {Object.keys(faqs).map((category) => (
          <div key={category} className="mt-6 text-left">
            <div className="bg-black text-white py-2 px-4 font-medium">{category}</div>
            <div className="mt-4">
              {faqs[category].map((faq, index) => (
                <div key={index} className="border-b border-gray-300 py-4">
                  <button
                    className={`flex justify-between w-full text-left font-semibold text-lg ${
                      openIndex === `${category}-${index}` ? "text-blue-600" : "text-black"
                    }`}
                    onClick={() => toggleFAQ(category, index)}
                  >
                    {faq.question}
                    {openIndex === `${category}-${index}` ? (
                      <MinusIcon className="w-5 h-5 text-blue-600" />
                    ) : (
                      <PlusIcon className="w-5 h-5 text-blue-600" />
                    )}
                  </button>
                  {openIndex === `${category}-${index}` && (
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div
          className="mt-10 mx-auto max-w-3xl rounded-2xl p-6 text-center"
          style={{
            backgroundImage: "url('/images/ABBg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3 className="text-xl font-bold text-blue-700">Є ще питання?</h3>
          <p className="text-gray-800 mt-2">
            Перейдіть на сторінку підтримки або зв’яжіться з нами для індивідуальної допомоги.
          </p>
          <button className="mt-4 px-6 py-2 bg-black text-white font-medium rounded-lg flex items-center mx-auto hover:bg-gray-900">
            <Link to="/contactua">Запитайте нас</Link>
            <span className="ml-2">
              <img src="/images/Arrow.png" alt="Arrow" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FAQUkr;
