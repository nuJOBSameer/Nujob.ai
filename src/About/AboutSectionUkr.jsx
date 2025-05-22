export default function AboutSectionUkr() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

        {/* Left Side - Image */}
        <div className="relative">
          <img
            src="/images/AboutUs.png"
            alt="Consultant"
            className="rounded-lg shadow-lg w-full max-w-sm"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold text-gray-900">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">Що</span> ми робимо
          </h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Маючи понад 35 років досвіду в ІТ, ми бачили, як змінювались індустрії — від перших комп’ютерів до найму на основі штучного інтелекту. Ми знаємо: мета — не просто знайти роботу, а побудувати кар’єру. nuJOB.AI — це не просто інструмент для найму, це справжня зміна правил гри. Ми допомагаємо професіоналам створювати особистий бренд, а компаніям — знаходити найкращих лідерів з точністю та швидкістю.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Але ми виходимо за рамки звичайного найму. Ми віримо у справжню перевірку навичок, а не лише у перегляд резюме. Наша платформа створює середовище, де ваші навички проходять випробування — через симуляції, практичні оцінювання та інтерактивні лабораторії. Ми не просто допомагаємо знайти роботу — ми готуємо вас до успішної роботи в реальному світі.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
           Ми тут, щоб дати вам навички, які дійсно мають значення — бо один аркуш паперу не повинен визначати ваше майбутнє. Наша платформа стає вашим «живим» резюме — прямим шляхом до успіху, що демонструє ваші здібності в дії.
          </p>
        </div>

      </div>
    </section>
  );
}
