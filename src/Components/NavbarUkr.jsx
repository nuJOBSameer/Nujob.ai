"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import {
  NewspaperIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  ChartBarIcon,
  LightBulbIcon,
  UsersIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import LanguageSelector from "./LanguageSelector";
import GetStartedUkr from "./GetStartedUkr";

const aboutFeatures = [
 {
    name: "Про компанію",
    description:
      "Дізнайтеся, як ми допомагаємо організаціям знаходити найкращих лідерів, а кандидатам — створювати власний бренд.",
    icon: BriefcaseIcon,
    link: "/aboutua",
  },
  // {
  //   name: "Competitive Analysis",
  //   description:
  //     "AI technology with a deep understanding of career needs, making the job search process smarter, faster, and more efficient.",
  //   icon: ChartBarIcon,
  //   link: "/Analysis",
  // },
  {
    name: "Бізнес-модель",
    description:
      "У nuJOB.AI ми використовуємо комплексний та орієнтований на дані підхід, щоб революціонізувати процес пошуку керівників.",
    icon: LightBulbIcon,
    link: "/Methodua",
  },
];

const candidateFeatures = [
  {
    name: "Кар’єрний шлях керівника",
    description:
      "Наша платформа на базі ШІ допомагає створити професійний профіль, який вирізняється.",
    icon: UsersIcon,
    link: "/Career-pathua",
  },
  {
    name: "Пошук роботи та рекомендації",
    description:
      "Інструменти на базі ШІ допомагають вам будувати, розвивати та зміцнювати свій кар’єрний шлях.",
    icon: BriefcaseIcon,
    link: "/JobSearchua",
  },
  {
    name: "Кар’єрний розвиток і наставництво",
    description:
      "Спрощує кар’єрну навігацію завдяки інструментам, що підтримують успіх на конкурентному ринку праці.",
    icon: LightBulbIcon,
    link: "/Career-Devua",
  },
  {
    name: "Резюме та розвиток навичок",
    description:
      "Створіть динамічний профіль, що підвищує ваші шанси на сучасному ринку праці.",
    icon: ClipboardDocumentIcon,
    link: "/Resume-skills-enhancementua",
  },
];

const RecruitersFeatures = [
  {
    name: "База кандидатів",
    description:
      "nuJOB.AI допомагає рекрутерам ефективно формувати та керувати сильною базою кандидатів за допомогою ШІ.",
    icon: UsersIcon,
    link: "/Candidate-Poolua",
  },
  {
    name: "Оцінювання на співбесідах",
    description:
      "У nuJOB.AI ми трансформуємо інтерв’ю та оцінювання за допомогою ШІ, пропонуючи живі інтерв’ю та реалістичні симуляції.",
    icon: DocumentTextIcon,
    link: "/Interviewua",
  },
  {
    name: "Адаптація нових працівників",
    description:
      "nuJOB.AI прискорює адаптацію завдяки інструментам на базі ШІ для безперебійного входження в посаду та перевірки навичок.",
    icon: UserPlusIcon,
    link: "/Onboardingua",
  },
  {
    name: "Управління талантами",
    description:
      "У nuJOB.AI ми залучаємо, розвиваємо та утримуємо найкращі таланти за допомогою передових технологій виявлення компетенцій.",
    icon: MagnifyingGlassIcon,
    link: "/Talentua",
  },
];

const supportFeatures = [
  {
    name: "Зв’яжіться з нами",
    description:
      "Якщо у вас виникли проблеми з nuJOB.AI, ми надамо технічну допомогу, усунення несправностей та підтримку.",
    icon: PhoneIcon,
    link: "/Contact",
  },
  {
    name: "Часті запитання",
    description:
      "Знайдіть відповіді на найпоширеніші запитання щодо використання nuJOB.AI, кар’єрного консультування, пошуку роботи тощо.",
    icon: QuestionMarkCircleIcon,
    link: "/FAQ",
  },
  {
    name: "Блог",
    description:
      "Будьте в курсі кар’єрних порад, стратегій пошуку роботи та особистісного зростання у нашому блозі.",
    icon: NewspaperIcon,
    link: "/Blogs",
  },
];


export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [candidatesOpen, setCandidatesOpen] = useState(false);
  const [recruitersOpen, setRecruitersOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Link to="/ua">
          <img src="/images/Logo.png" alt="logo" className="h-10 w-32" />
          </Link>
        </div>
        <div className="hidden lg:flex space-x-5">
          <Link to="/ua" className="text-gray-900 font-medium">
            Головна
          </Link>
          <div
            className="relative z-30"
            onMouseEnter={() => {
              setAboutOpen(true);
              setCandidatesOpen(false);
              setRecruitersOpen(false);
              setSupportOpen(false);
            }}
            onMouseLeave={() => setTimeout(() => setAboutOpen(false), 2500)}
          >
            <div className="flex items-center text-gray-900 font-medium cursor-pointer">
              <Link Link to="/Aboutua" onClick={() => setAboutOpen(false)}>
                Про нас
              </Link >
              <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
            </div>
            {aboutOpen && (
              <div className="absolute left-1/2 top-10 z-10 w-[700px] -translate-x-1/2 bg-white shadow-lg rounded-xl p-6">
                <h3 className="text-gray-400 text-xs font-semibold uppercase">
                  Features
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-6 items-center">
                  <div className="grid grid-cols-2 gap-6 col-span-2">
                    {aboutFeatures.map((item, index) => (
                      <Link
                        to={item.link}
                        key={index}
                        className="flex items-start space-x-3 hover:bg-gray-100 p-2 rounded-md"
                        onClick={() => setAboutOpen(false)}
                      >
                        <item.icon className="h-24 w-24 text-indigo-600" />
                        <div>
                          <p className="text-indigo-600 font-medium">
                            {item.name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/platform-overview.png"
                      alt="Platform Overview"
                      className="rounded-lg w-full h-auto"
                    />
                    <p className="text-gray-600 text-sm mt-2">
                      Take a free tour of our platform features
                    </p>
                    <Link
                      to="/contact"
                      className="text-indigo-600 font-medium mt-1"
                      onClick={() => setAboutOpen(false)}
                    >
                      Book a Demo →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative z-30"
            onMouseEnter={() => {
              setCandidatesOpen(true);
              setAboutOpen(false);
              setRecruitersOpen(false);
              setSupportOpen(false);
            }}
            onMouseLeave={() =>
              setTimeout(() => setCandidatesOpen(false), 2500)
            }
          >
            <div className="flex items-center text-gray-900 font-medium cursor-pointer">
              <Link Link to="/Career-pathua" onClick={() => setCandidatesOpen(false)}>
              Для пошукачів роботи
              </Link>
              <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
            </div>
            {candidatesOpen && (
              <div className="absolute left-1/2 top-10 z-10 w-[700px] -translate-x-1/2 bg-white shadow-lg rounded-xl p-6">
                <h3 className="text-gray-400 text-xs font-semibold uppercase">
                  Features
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-6 items-center">
                  <div className="grid grid-cols-2 gap-6 col-span-2">
                    {candidateFeatures.map((item, index) => (
                      <Link
                        to={item.link}
                        key={index}
                        className="flex items-start space-x-3 hover:bg-gray-100 p-2 rounded-md"
                        onClick={() => setCandidatesOpen(false)}
                      >
                        <item.icon className="h-24 w-24 text-indigo-600" />
                        <div>
                          <p className="text-indigo-600 font-medium">
                            {item.name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/platform-overview.png"
                      alt="Platform Overview"
                      className="rounded-lg w-full h-auto"
                    />
                    <p className="text-gray-600 text-sm mt-2">
                      Take a free tour of our platform features
                    </p>
                    <Link
                      to="/contact"
                      className="text-indigo-600 font-medium mt-1"
                      onClick={() => setCandidatesOpen(false)}
                    >
                      Book a Demo →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative z-30"
            onMouseEnter={() => {
              setRecruitersOpen(true);
              setAboutOpen(false);
              setCandidatesOpen(false);
              setSupportOpen(false);
            }}
            onMouseLeave={() =>
              setTimeout(() => setRecruitersOpen(false), 2500)
            }
          >
            <div className="flex items-center text-gray-900 font-medium cursor-pointer">
              <Link Link to="/Candidate-Poolua">
                Для рекрутерів
              </Link>
              <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
            </div>
            {recruitersOpen && (
              <div className="absolute left-1/2 top-10 z-10 w-[700px] -translate-x-1/2 bg-white shadow-lg rounded-xl p-6">
                <h3 className="text-gray-400 text-xs font-semibold uppercase">
                  Features
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-6 items-center">
                  <div className="grid grid-cols-2 gap-6 col-span-2">
                    {RecruitersFeatures.map((item, index) => (
                      <Link
                        to={item.link}
                        key={index}
                        className="flex items-start space-x-3 hover:bg-gray-100 p-2 rounded-md"
                        onClick={() => setRecruitersOpen(false)}
                      >
                        <item.icon className="h-24 w-24 text-indigo-600" />
                        <div>
                          <p className="text-indigo-600 font-medium">
                            {item.name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/platform-overview.png"
                      alt="Platform Overview"
                      className="rounded-lg w-full h-auto"
                    />
                    <p className="text-gray-600 text-sm mt-2">
                      Take a free tour of our platform features
                    </p>
                    <Link
                      to="/contact"
                      className="text-indigo-600 font-medium mt-1"
                      onClick={() => setRecruitersOpen(false)}
                    >
                      Book a Demo →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/Studentua" className="text-gray-900 font-medium">
           Для студентів
          </Link>
          <div
            className="relative z-30"
            onMouseEnter={() => {
              setSupportOpen(true);
              setAboutOpen(false);
              setCandidatesOpen(false);
              setRecruitersOpen(false);
            }}
            onMouseLeave={() => setTimeout(() => setSupportOpen(false), 2500)}
          >
            <div className="flex items-center text-gray-900 font-medium cursor-pointer">
              <Link Link to="/Contact">
                Підтримка
              </Link>{" "}
              <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
            </div>
            {supportOpen && (
              <div className="absolute left-1/2 top-10 z-10 w-[700px] -translate-x-1/2 bg-white shadow-lg rounded-xl p-6">
                <h3 className="text-gray-400 text-xs font-semibold uppercase">
                  Features
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-6 items-center">
                  <div className="grid grid-cols-2 gap-6 col-span-2">
                    {supportFeatures.map((item, index) => (
                      <Link
                        to={item.link}
                        key={index}
                        className="flex items-start space-x-3 hover:bg-gray-100 p-2 rounded-md"
                        onClick={() => setSupportOpen(false)}
                      >
                        <item.icon className="h-24 w-24 text-indigo-600" />
                        <div>
                          <p className="text-indigo-600 font-medium">
                            {item.name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/platform-overview.png"
                      alt="Platform Overview"
                      className="rounded-lg w-full h-auto"
                    />
                    <p className="text-gray-600 text-sm mt-2">
                      Take a free tour of our platform features
                    </p>
                    <Link
                      to="/contact"
                      className="text-indigo-600 font-medium mt-1"
                      onClick={() => setSupportOpen(false)}
                    >
                      Book a Demo →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/pricingua" className="text-gray-900 font-medium">
            Ціни
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-2">
          <LanguageSelector/>
          <GetStartedUkr/>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-900"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 z-50">
          <Link to="/ua" className="block py-2 text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>
            Головна
          </Link>

          {/* About Dropdown */}
          <div>
            <button
              className="flex justify-between w-full py-2 text-gray-900 font-medium"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              Про нас <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            </button>
            {aboutOpen && (
              <div className="ml-4 space-y-2">
                {aboutFeatures.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block text-gray-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Candidates Dropdown */}
          <div>
            <button
              className="flex justify-between w-full py-2 text-gray-900 font-medium"
              onClick={() => setCandidatesOpen(!candidatesOpen)}
            >
              Для пошукачів роботи <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            </button>
            {candidatesOpen && (
              <div className="ml-4 space-y-2">
                {candidateFeatures.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block text-gray-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Recruiters Dropdown */}
          <div>
            <button
              className="flex justify-between w-full py-2 text-gray-900 font-medium"
              onClick={() => setRecruitersOpen(!recruitersOpen)}
            >
             Для рекрутерів <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            </button>
            {recruitersOpen && (
              <div className="ml-4 space-y-2">
                {RecruitersFeatures.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block text-gray-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/Studentua" className="block py-2 text-gray-900 font-medium " onClick={() => setMobileMenuOpen(false)}>
            Для студентів
          </Link>
          {/* Support Dropdown */}
          <div>
            <button
              className="flex justify-between w-full py-2 text-gray-900 font-medium"
              onClick={() => setSupportOpen(!supportOpen)}
            >
              Підтримка <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            </button>
            {supportOpen && (
              <div className="ml-4 space-y-2">
                {supportFeatures.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block text-gray-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/pricingua" className="block py-2 text-gray-900 font-medium " onClick={() => setMobileMenuOpen(false)}>
            Ціни
          </Link>

          <div className="mt-4 flex justify-center space-x-9">
            <LanguageSelector/>
            <GetStartedUkr/>
          </div>
        </div>
      )}
    </header>
  );
}
