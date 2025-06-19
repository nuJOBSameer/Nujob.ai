import React from "react";

const featuresSp = [
  {
    title: "Tarifa de Marca Personal",
    description:
      "Eleva tu identidad profesional con nuestros servicios de marca. Esto incluye:",
    points: [
      "Perfiles mejorados adaptados a los estándares de la industria",
      "Currículums y portafolios optimizados para resaltar habilidades y logros clave",
      "Branding estratégico para destacar en un mercado competitivo."
    ],
    image: "/images/Price1.png",
    arrow: "/images/ArrowD.png"
  },
  {
    title: "Plataforma Educativa",
    description:
      "Accede a recursos de aprendizaje de vanguardia a través de nuestra plataforma educativa. Incluye:",
    points: [
      "Cursos sobre tendencias actuales y mejores prácticas en contratación y desarrollo profesional",
      "Sesiones dirigidas por expertos sobre desarrollo personal y profesional.",
      "Certificaciones que fortalecen tu perfil y mejoran tus oportunidades."
    ],
    image: "/images/Price2.png",
    arrow: "/images/ArrowD.png"
  },
  {
    title: "Referencias y Beneficios",
    description:
      "Creemos en recompensar la lealtad y la colaboración. Nuestro programa ofrece:",
    points: [
      "Descuentos en servicios por referir a otros a nuestra plataforma.",
      "Créditos y recompensas por compromiso continuo y membresías a largo plazo."
    ],
    image: "/images/Price3.png",
    arrow: "/images/ArrowD.png"
  },
  {
    title: "Precios Individuales y Paquetes Personalizados",
    description:
      "Elige entre opciones de precios flexibles adaptadas a tus necesidades:",
    points: [
      "Opciones de pago por servicio para soluciones específicas.",
      "Paquetes combinados diseñados para ofrecer servicios integrales a precios competitivos."
    ],
    image: "/images/Price4.png",
    arrow: "/images/ArrowD.png"
  }
];

const FeaturesSectionSp = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 mb-32 mt-10">
      {featuresSp.map((feature, index) => (
        <div key={index} className="flex flex-col gap-4">
          <img src={feature.image} alt={feature.title} className="w-20 h-20" />
          <h3 className="text-lg font-bold text-blue-700">{feature.title}</h3>
          <p className="text-gray-700">{feature.description}</p>
          <ul className="space-y-2">
            {feature.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <img src={feature.arrow} alt="flecha" className="w-4 h-4 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSectionSp;
