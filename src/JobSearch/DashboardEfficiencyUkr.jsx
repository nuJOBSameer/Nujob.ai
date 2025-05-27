import React from "react";

const DashboardEfficiencyUkr = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center pb-16 ">
      {/** Left Image **/}
      <div className="w-1/2 flex justify-center">
        <img src="/images/Dashboard.png" alt="Dashboard Illustration" className="w-full max-w-md" />
      </div>

      {/** Right Text Content **/}
      <div className="md:w-1/3 px-4 text-left md:mt-0 mt-4">
        <h2 className="text-3xl font-bold text-[#006BA6]">Панель керування, створена для ефективності</h2>
        <p className="text-gray-700 mt-4">
          Наша інтуїтивна інформаційна панель на основі ШІ розроблена для максимальної продуктивності, надаючи менеджерам централізований інструмент для відстеження прогалин у навичках, візуалізації прогресу команди та ухвалення рішень на основі даних. Завдяки метрикам у реальному часі та персоналізованим інсайтам ви можете безперешкодно контролювати ефективність, виявляти напрями розвитку та впроваджувати ефективні стратегії навчання — усе в межах зручного інтерфейсу.
          <br /><br />
          Відчуйте розумний підхід до підвищення продуктивності та розвитку навичок без перерв.
        </p>
      </div>
    </div>
  );
};

export default DashboardEfficiencyUkr;
