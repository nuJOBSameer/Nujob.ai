import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const FAQSp = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = {
    Clientes: [
      {
        question: "¿Cuánto tiempo tarda en publicarse mi oferta de trabajo?",
        answer:
          "Las ofertas de trabajo suelen pasar por un proceso de revisión rápida para garantizar que cumplan con las normas de la plataforma. La aprobación normalmente tarda entre 24 y 48 horas. Una vez aprobada, tu oferta estará visible para los candidatos adecuados. Además de las publicaciones, ofrecemos asesoramiento experto en contratación y orientación específica por industria.",
      },
      {
        question: "¿Cuáles son las opciones de pago disponibles para las ofertas de trabajo?",
        answer:
          "Ofrecemos múltiples opciones de pago, incluidas tarjetas de crédito/débito, transferencias bancarias y facturación para publicaciones múltiples. Hay planes flexibles que se adaptan a tus necesidades de contratación.",
      },
    ],
    Candidatos: [
      {
        question: "¿Puedo publicar varias ofertas de trabajo con una sola cuenta?",
        answer:
          "Sí. Puedes gestionar múltiples publicaciones desde una sola cuenta, lo que facilita tu proceso de contratación.",
      },
      {
        question: "¿Hay un límite para la cantidad de solicitantes por oferta?",
        answer:
          "No. No hay un límite de candidatos: tu publicación estará abierta a todos los candidatos calificados hasta que la cierres o establezcas límites específicos.",
      },
    ],
    Otros: [
      {
        question: "¿Qué tipo de puestos reclutan?",
        answer:
          "Reclutamos desde puestos de nivel inicial hasta ejecutivos en diversas industrias, tanto técnicas como no técnicas.",
      },
      {
        question: "¿Dónde están ubicados?",
        answer:
          "Operamos de forma remota con alcance global, conectando empleadores y candidatos en múltiples ubicaciones.",
      },
      {
        question: "¿Por qué necesito un reclutador?",
        answer:
          "Un reclutador te ayuda a: 1. Filtrar solicitudes no calificadas con selección respaldada por IA. 2. Conectar con talento top más rápido. 3. Ahorrar tiempo al optimizar el proceso de contratación.",
      },
      {
        question: "¿En qué industrias reclutan?",
        answer:
          "Nos especializamos en tecnología, finanzas, salud, marketing, ventas, ingeniería y más.",
      },
      {
        question: "¿Cuáles son sus valores?",
        answer:
          "Priorizamos la transparencia, eficiencia e innovación en el reclutamiento—garantizando el mejor ajuste para empleadores y candidatos.",
      },
      {
        question:
          "¿Cómo puedo buscar por categoría de trabajo o ubicación en el sitio?",
        answer:
          "Utiliza nuestros filtros inteligentes para refinar los resultados por industria, rol, nivel de experiencia y ubicación—facilitando tu búsqueda.",
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
        <title>nuJOB.AI | Preguntas Frecuentes</title>
        <meta
          name="description"
          content="Explora preguntas comunes y respuestas detalladas para comprender mejor nuestros servicios y cómo aprovecharlos al máximo."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <img src="/images/FAQ.png" alt="Icono FAQ" className="mx-auto w-36 h-24 mb-4" />

        <div className="text-center mb-4">
          <div className="relative inline-block">
            <h2 className="text-6xl font-bold text-gray-900">FAQ's</h2>
            <img
              src="/images/FAQBg.png"
              alt="Subrayado"
              className="absolute left-0 bottom-[-3px] w-full -z-40"
            />
          </div>
        </div>

        <p className="text-gray-600 mt-2">
          ¿Tienes preguntas? Tenemos las respuestas. Descubre más sobre nuJOB.AI y cómo podemos ayudarte.
        </p>

        {Object.keys(faqs).map((category) => (
          <div key={category} className="mt-6 text-left">
            <div className="bg-black text-white py-2 px-4 font-medium">{category}</div>
            <div className="mt-4">
              {faqs[category].map((faq, index) => (
                <div key={index} className="border-b border-gray-300 py-4">
                  <button
                    className={`flex justify-between w-full text-left font-semibold text-lg ${
                      openIndex === `${category}-${index}`
                        ? "text-blue-600"
                        : "text-black"
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

        <div
          className="mt-10 mx-auto max-w-3xl rounded-2xl p-6 text-center"
          style={{
            backgroundImage: "url('/images/ABBg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3 className="text-xl font-bold text-blue-700">¿Aún tienes preguntas?</h3>
          <p className="text-gray-800 mt-2">
            Visita nuestra página de soporte o contáctanos directamente para asistencia personalizada.
          </p>
          <button className="mt-4 px-6 py-2 bg-black text-white font-medium rounded-lg flex items-center mx-auto hover:bg-gray-900">
            <Link to="/contactsp">Pregúntanos</Link>
            <span className="ml-2">
              <img src="/images/Arrow.png" alt="Flecha" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FAQSp;
