import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
  "/images/image5.png",
];

const ServicesSectionSp = () => {
  const [index, setIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getImage = (position) => {
    const newIndex = (index + position + images.length) % images.length;
    return images[newIndex];
  };

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">¿Cómo te ayudamos?</h2>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          nuJOB.AI no es solo otra plataforma de empleo, es un centro de transformación profesional. Brindamos capacitación, validación y herramientas que ayudan a los profesionales a convertir su conocimiento en habilidades prácticas y alineadas al mercado laboral.
          Para las empresas, eliminamos las conjeturas—ofreciendo candidatos preevaluados y de alta calidad, listos para generar impacto. La IA se encarga del trabajo pesado, para que tú tengas contrataciones más rápidas, justas e inteligentes.
          Construyamos juntos carreras y negocios que prosperen.
        </p>
      </div>

      {/* Carrusel de Imágenes */}
      <div className="relative flex justify-center items-center gap-4 mt-8 w-full overflow-hidden">
        {[...Array(5)].map((_, position) => (
          <motion.img
            key={getImage(position - 2)}
            src={getImage(position - 2)}
            alt="Imagen del Carrusel"
            className={`rounded-lg object-cover shadow-md ${
              position === 2
                ? "w-48 h-48 md:w-56 md:h-56 shadow-xl"
                : position === 1 || position === 3
                ? "w-32 h-32 md:w-40 md:h-40 opacity-80 shadow-lg"
                : "w-24 h-24 md:w-32 md:h-32 opacity-60 shadow-md"
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSectionSp;
