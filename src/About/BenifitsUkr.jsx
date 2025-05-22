export default function BenefitsSection() {
    const jobSeekers = [
  {
    title: "Створіть власний бренд",
    desc: "Резюме, мотиваційні листи та підготовка до інтерв’ю на базі ШІ, які допоможуть вам миттєво вирізнитися.",
    icon: "/Logo/Logo1.png",
  },
  {
    title: "Справедливо та неупереджено",
    desc: "Ми зосереджуємось на ваших навичках, а не на походженні, забезпечуючи рівні можливості для всіх.",
    icon: "/Logo/Logo2.png",
  },
  {
    title: "Розумне підбирання роботи",
    desc: "Отримуйте вакансії, які дійсно відповідають вашому досвіду та цілям, а не випадкові оголошення.",
    icon: "/Logo/Logo3.png",
  },
  {
    title: "Кар’єрне зростання",
    desc: "Отримуйте аналітику, тренди та стратегії, які тримають вас на крок попереду на ринку праці.",
    icon: "/Logo/Logo4.png",
  },
  {
    title: "Справжня перевірка навичок",
    desc: "Жодної «води» — випробуйте свої навички за допомогою практичних симуляцій і галузевих стандартів оцінювання.",
    icon: "/Logo/Logo5.png",
  },
  {
    title: "Менше стресу, більше перемог",
    desc: "Довірте пошук ШІ, щоб зосередитися на головному — вашому майбутньому.",
    icon: "/Logo/Logo6.png",
  },
];



    const jobRecruiters = [
  {
    title: "Швидший найм",
    desc: "ШІ автоматизує відбір, фільтрує найкращих кандидатів і скорочує час найму.",
    icon: "/Logo/Logo7.png",
  },
  {
    title: "Відбір без упереджень",
    desc: "Оцінювання на основі даних гарантує найм за навичками та потенціалом.",
    icon: "/Logo/Logo8.png",
  },
  {
    title: "Галузева аналітика",
    desc: "Будьте на крок попереду завдяки аналітиці на базі ШІ про зарплатні тенденції та моделі найму.",
    icon: "/Logo/Logo9.png",
  },
  {
    title: "Краща відповідність — менше плинності",
    desc: "Наймайте кандидатів, які відповідають вашій культурі та потребам з першого дня.",
    icon: "/Logo/Logo10.png",
  },
  {
    title: "Перевірені таланти, а не просто резюме",
    desc: "Наша платформа гарантує, що кандидати мають підтверджені та готові до роботи навички ще до подачі заявки.",
    icon: "/Logo/Logo11.png",
  },
  {
    title: "Заощаджуйте час і кошти",
    desc: "Скоротіть ручний відбір і зосередьтеся на стратегічному зростанні.",
    icon: "/Logo/Logo12.png",
  },
];


    return (
        <section  className="bg-white py-16 px-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-10 px-0">
                {/* Left Section - Heading and Description */}
                <div className="max-w-2xl">
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                            Переваги 
                        </span>{" "}
                        nuJOB.AI
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                        Наша подорож почалася з народження комп’ютерної епохи, пройшла через розвиток мережевих технологій та інтернету й тепер охоплює трансформаційний потенціал штучного інтелекту.
                    </p>
                </div>

                {/* Right Section - Illustration */}
                <div className="hidden md:block">
                    <img src="/images/SVG1.png" alt="AI Benefits" className="w-52 h-auto rounded-2xl" />
                </div>
            </div>


            {/* For Job Seekers */}
            <div className=" border-t border-gray-300 md:px-10">
                {/* Section Heading */}
                <h3 className="text-2xl font-bold text-blue-700 mt-6 mb-6">Для пошукачів роботи</h3>

                {/* Grid Layout */}
                <div className="grid md:grid-cols-3 gap-6 pt-6">
                    {jobSeekers.map((benefit, index) => (
                        <div
                            key={index}
                            className={`flex justify-between items-start pr-6 ${
                                index !== jobSeekers.length - 1 && index !== 2 ? "md:border-r md:border-blue-700" : ""
                            }`}
                        >
                            {/* Left Side: Title & Description */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                    {benefit.desc}
                                </p>
                            </div>

                            {/* Right Side: Icon */}
                            <img src={benefit.icon} alt={benefit.title} className="w-8 h-8 object-contain" />
                        </div>
                    ))}
                </div>
            </div>



            {/* For Job Recruiters */}
            <div className=" mt-10 border-t border-gray-300 md:px-10">
                {/* Section Heading */}
                <h3 className="text-2xl font-bold text-blue-700 mt-6 mb-6">Для рекрутерів</h3>

                {/* Grid Layout */}
                <div className="grid md:grid-cols-3 gap-6 pt-6">
                    {jobRecruiters.map((benefit, index) => (
                        <div
                        key={index}
                        className={`flex justify-between items-start pr-6 ${
                            index !== jobRecruiters.length - 1 && index !== 2 ? "md:border-r md:border-blue-700" : ""
                        }`}
                    >
                            {/* Left Side: Title & Description */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                    {benefit.desc}
                                </p>
                            </div>

                            {/* Right Side: Icon */}
                            <img src={benefit.icon} alt={benefit.title} className="w-8 h-8 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
