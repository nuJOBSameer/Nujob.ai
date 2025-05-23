import React from "react";

const ResumeVersionUkr = () => {
  return (
    <div className="text-center py-6">
      <h2 className="text-3xl text-blue-600 font-bold">Кілька версій резюме</h2>
      <p className="text-gray-600 text-wrap px-5 md:px-52 mt-2">
        Адаптуйтесь до різних вакансій без необхідності починати з нуля.
      </p>

      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-6">
        {/* Card 1 */}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white">
          <img src="/images/Version1.png" alt="Іконка шаблону" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-semibold">
            Заощаджуйте час із готовими структурованими шаблонами.
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Забудьте про необхідність створювати нове резюме для кожної вакансії. Наші налаштовувані шаблони дозволяють створити професійне резюме за кілька хвилин. Зберігайте та використовуйте їх повторно для майбутніх заявок, забезпечуючи послідовність і професіоналізм без зайвих витрат часу на форматування.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white">
          <img src="/images/Version2.png" alt="Іконка налаштувань" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-semibold">
            Налаштовуйте кожну версію під конкретні вимоги вакансій.
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Виділяйтесь, адаптуючи резюме під конкретні вимоги кожної посади. Підкреслюйте відповідні досягнення, навички та досвід, які відповідають ролі, щоб підвищити шанси на зацікавленість рекрутерів. З нашими інструментами ви легко зможете налаштувати контент під потреби галузі або стандарти ATS.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white">
          <img src="/images/Version3.png" alt="Іконка панелі" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-semibold">
            Зберігайте все організовано в одному місці для зручного доступу.
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Усі ваші резюме будуть акуратно зібрані в одній інтуїтивній панелі. Незалежно від того, чи ви подаєтесь у різні галузі, чи готуєте версії для різних кар’єрних цілей, наша платформа допоможе вам не втрачати контроль. Легко керуйте, редагуйте та завантажуйте свої резюме у будь-який момент — швидко та зручно.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeVersionUkr;
