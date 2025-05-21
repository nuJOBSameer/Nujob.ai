import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeBuilder() {
  const [openSection, setOpenSection] = useState("editing");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white px-6 md:px-10 py-16"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
        {/* Left Side: Illustration */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="/images/SVG.png"
            alt="Resume Illustration"
            className="w-[80%] md:w-[70%] rounded-2xl"
          />
        </motion.div>

        {/* Right Side: Text and Accordion */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-4"
        >
          <p className="text-sm text-gray-500">✨ВИКОРИСТАННЯ ШІ ДЛЯ УСПІХУ</p>
          <h1 className="text-4xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
              Конструктор та 
            </span>{" "}
            редактор резюме
          </h1>

          {/* Accordion */}
          {[
            {
              key: "creation",
              title: "Створення та налаштування резюме",
              content:
                "Ваше резюме — це не просто документ, а ваша перша візитівка. Створюйте яскраве CV легко, адаптуйте його до своєї галузі та зробіть так, щоб воно говорило мовою вашого професіоналізму. Жодних шаблонів загального типу — створіть резюме, яке відповідає вашим унікальним кар’єрним амбіціям.",
            },
            {
              key: "editing",
              title: "Редагування та оптимізація резюме",
              content:
                "Ваше резюме повинно розвиватися разом із вами. Отримуйте рекомендації на основі ШІ для вдосконалення змісту, форматування та релевантності. Наша розумна система переналаштовує рівень відповідності до описів вакансій, допомагаючи вам залишатися на крок попереду в пошуку роботи. Адже добре оптимізоване резюме не просто переглядають — його обирають.",
            },
            {
              key: "versions",
              title: "Кілька версій резюме",
              content:
                "Один формат не підходить для всіх — так само і з вашим резюме. Створюйте різні версії, адаптовані під конкретні посади, галузі або кар’єрні напрямки. Подати заявку в стартап, корпорацію чи творчу компанію? У вас завжди буде ідеальне резюме напоготові.",
            },
          ].map(({ key, title, content }) => (
            <div key={key} className="border-t border-gray-300">
              <button
                className="w-full text-left py-4 text-lg font-semibold flex justify-between"
                onClick={() => toggleSection(key)}
              >
                {title}
                <span>{openSection === key ? "−" : "+"}</span>
              </button>
              <AnimatePresence mode="wait">
                {openSection === key && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 px-4 pb-4"
                    >
                      {content}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
