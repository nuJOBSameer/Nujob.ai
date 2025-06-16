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
import GetStartedSp from "./GetStartedSp";

const aboutFeatures = [
  {
    name: "La Empresa",
    description:
      "Descubre cómo ayudamos a las organizaciones a encontrar talento de liderazgo de alto nivel y a los candidatos a construir su marca personal.",
    icon: BriefcaseIcon,
    link: "/Aboutsp",
  },
  // {
  //   name: "Competitive Analysis",
  //   description:
  //     "AI technology with a deep understanding of career needs, making the job search process smarter, faster, and more efficient.",
  //   icon: ChartBarIcon,
  //   link: "/Analysis",
  // },
  {
    name: "Modelo de Negocio",
    description:
      "En nuJOB.AI, utilizamos un enfoque integral y basado en datos para revolucionar el proceso de búsqueda ejecutiva.",
    icon: LightBulbIcon,
    link: "/Methodsp",
  },
];

const candidateFeatures = [
  {
  name: "Trayectoria Profesional Ejecutiva",
  description:
    "Nuestra plataforma impulsada por IA te ayuda a crear un perfil profesional destacado.",
  icon: UsersIcon,
  link: "/Career-pathsp",
},
{
  name: "Búsqueda de Empleo y Recomendaciones",
  description:
    "Herramientas con IA que te ayudan a construir, desarrollar y potenciar tu carrera.",
  icon: BriefcaseIcon,
  link: "/JobSearchsp",
},
{
  name: "Desarrollo y Orientación Profesional",
  description:
    "Simplifica la navegación profesional con herramientas para lograr el éxito en un mercado competitivo.",
  icon: LightBulbIcon,
  link: "/Career-Devsp",
},
{
  name: "Mejora de Currículum y Habilidades",
  description:
    "Crea un perfil dinámico que aumente tus oportunidades en el mercado laboral actual.",
  icon: ClipboardDocumentIcon,
  link: "/Resume-skills-enhancementsp",
}
];
const RecruitersFeatures = [
  {
    name: "Grupo de Candidatos",
    description:
      "nuJOB.AI ayuda a los responsables de contratación a construir y gestionar de manera eficiente un sólido grupo de candidatos...",
    icon: UsersIcon,
    link: "/Candidate-Poolsp",
  },
  {
    name: "Evaluación de Entrevistas",
    description:
      "En nuJOB.AI transformamos entrevistas y evaluaciones con IA, ofreciendo entrevistas en vivo y simulaciones realistas...",
    icon: DocumentTextIcon,
    link: "/Interviewsp",
  },
  {
    name: "Desarrollo de Incorporación",
    description:
      "nuJOB.AI acelera el éxito con herramientas impulsadas por IA para una incorporación fluida, validación de habilidades y más...",
    icon: UserPlusIcon,
    link: "/Onboardingsp",
  },
  {
    name: "Gestión del Talento",
    description:
      "En nuJOB.AI reclutamos, desarrollamos y retenemos el mejor talento a través de una detección avanzada de competencias...",
    icon: MagnifyingGlassIcon,
    link: "/Talentsp",
  }
];

const supportFeatures = [
  {
  name: "Conéctate con Nosotros",
  description:
    "Para cualquier problema con nuJOB.AI, estamos aquí para brindarte asistencia técnica, solución de problemas y orientación.",
  icon: PhoneIcon,
  link: "/Contactsp",
},
{
  name: "Preguntas Frecuentes",
  description:
    "Encuentra respuestas a las preguntas más comunes sobre el uso de nuJOB.AI, orientación profesional, herramientas de búsqueda de empleo y más.",
  icon: QuestionMarkCircleIcon,
  link: "/FAQsp",
},
{
  name: "Blog",
  description:
    "Mantente al día con consejos profesionales, estrategias de búsqueda de empleo y crecimiento personal en nuestro blog.",
  icon: NewspaperIcon,
  link: "/Blogssp",
}
];

export default function NavbarSp() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [candidatesOpen, setCandidatesOpen] = useState(false);
  const [recruitersOpen, setRecruitersOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-1 py-4">
        <div className="flex items-center">
          <Link to="/sp">
          <img src="/images/Logo.png" alt="logo" className="h-10 w-32" />
          </Link>
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link to="/sp" className="text-gray-900 font-medium">
            Inicio
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
              <Link Link to="/Aboutsp" onClick={() => setAboutOpen(false)}>
                 Sobre Nosotros
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
                      Realice un recorrido gratuito por las características de nuestra plataforma
                    </p>
                    <Link
                      to="/contact"
                      className="text-indigo-600 font-medium mt-1"
                      onClick={() => setAboutOpen(false)}
                    >
                      Reservar una Demostración 
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
              <Link Link to="/Career-pathsp" onClick={() => setCandidatesOpen(false)}>
             Für Jobsuchende
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
                      Realice un recorrido gratuito por las características de nuestra plataforma
                    </p>
                    <Link
                      to="/contact"
                      className="text-indigo-600 font-medium mt-1"
                      onClick={() => setCandidatesOpen(false)}
                    >
                      Reservar una Demostración 
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
              <Link Link to="/Candidate-Pool">
                Para Reclutadores
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
                      Realice un recorrido gratuito por las características de nuestra plataforma
                    </p>
                    <Link
                      to="/contact"
                      className="text-indigo-600 font-medium mt-1"
                      onClick={() => setRecruitersOpen(false)}
                    >
                      Reservar una Demostración 
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/Studentsp" className="text-gray-900 font-medium">
           Para estudiantes
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
              <Link Link to="/Contactsp">
                Soporte
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
                      Realice un recorrido gratuito por las características de nuestra plataforma
                    </p>
                    <Link
                      to="/contact"
                      className="text-indigo-600 font-medium mt-1"
                      onClick={() => setSupportOpen(false)}
                    >
                      Reservar una Demostración 
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/pricingsp" className="text-gray-900 font-medium">
            Precios
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-2">
          <LanguageSelector/>
          <GetStartedSp/>
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
          <Link to="/sp" className="block py-2 text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>
            Inicio
          </Link>

          {/* About Dropdown */}
          <div>
            <button
              className="flex justify-between w-full py-2 text-gray-900 font-medium"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              Sobre Nosotros <ChevronDownIcon className="h-5 w-5 text-gray-500" />
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
             Für Jobsuchende <ChevronDownIcon className="h-5 w-5 text-gray-500" />
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
             Para Reclutadores <ChevronDownIcon className="h-5 w-5 text-gray-500" />
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
          <Link to="/Studentsp" className="block py-2 text-gray-900 font-medium " onClick={() => setMobileMenuOpen(false)}>
            Para estudiantes
          </Link>
          {/* Support Dropdown */}
          <div>
            <button
              className="flex justify-between w-full py-2 text-gray-900 font-medium"
              onClick={() => setSupportOpen(!supportOpen)}
            >
              Soporte <ChevronDownIcon className="h-5 w-5 text-gray-500" />
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

          <Link to="/pricingsp" className="block py-2 text-gray-900 font-medium " onClick={() => setMobileMenuOpen(false)}>
            Precios
          </Link>

          <div className="mt-4 flex justify-center space-x-9">
            <LanguageSelector/>
            <GetStartedSp/>
          </div>
        </div>
      )}
    </header>
  );
}
