import React from "react";

const MonitorUkr = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center py-16 ">
      {/** Left Image **/}
      <div className="w-1/2 flex justify-center">
        <img src="/images/Monitor.png" alt="Dashboard Illustration" className="w-full max-w-md" />
      </div>

      {/** Right Text Content **/}
      <div className="md:w-1/3 px-5 text-left ">
        <h2 className="text-3xl font-bold text-blue-500">Відстежуйте свій шлях інтерв’ю</h2>
        <p className="text-gray-700 mt-4">
        Керуйте своїм шляхом інтерв’ю легко за допомогою всеохоплюючої та інтуїтивної системи відстеження. Записуйте кожну деталь — від дат і назв компаній до відгуків, результатів та особистих вражень. Такий структурований підхід дозволяє аналізувати вашу ефективність, виявляти закономірності та визначати зони для покращення, формуючи чітку карту розвитку.
          <br /><br />
          Зберігаючи всю історію інтерв’ю в одному зручному місці, ви отримуєте цінні інсайти щодо свого прогресу та можете стратегічно підготуватись до майбутніх можливостей. Завдяки такій ясності та структурі кожне інтерв’ю ви зустрінете з новою впевненістю, фокусом і інструментами для переходу на наступний етап кар’єри.
        </p>
      </div>
    </div>
  );
};

export default MonitorUkr;
