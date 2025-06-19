import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeBuilderSp() {
  const [openSection, setOpenSection] = useState("editing");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white px-6 md:px-10 py-16"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
        {/* Lado Izquierdo: Ilustración */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="/images/SVG.png"
            alt="Ilustración de CV"
            className="w-[80%] md:w-[70%] rounded-2xl"
          />
        </motion.div>

        {/* Lado Derecho: Texto y Acordeón */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-4"
        >
          <p className="text-sm text-gray-500">✨ APROVECHANDO LA IA PARA EL ÉXITO</p>
          <h1 className="text-4xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
              Constructor
            </span>{" "}
            y Editor de Currículums
          </h1>

          {/* Acordeón */}
          {[
            {
              key: "creation",
              title: "Creación y Personalización del Currículum",
              content:
                "Tu currículum no es solo un documento—es tu primera impresión. Crea un CV destacado con facilidad, adáptalo a tu industria y asegúrate de que hable tu lenguaje profesional. No más plantillas genéricas; construye un currículum tan único como tus aspiraciones profesionales.",
            },
            {
              key: "editing",
              title: "Edición y Optimización del Currículum",
              content:
                "Tu currículum debe evolucionar contigo. Obtén sugerencias potenciadas por IA para perfeccionar el contenido, el formato y la relevancia. Nuestro sistema inteligente recalibra tu nivel de coincidencia con las descripciones de empleo, ayudándote a mantenerte un paso adelante. Porque un currículum bien optimizado no solo se ve—se selecciona.",
            },
            {
              key: "versions",
              title: "Múltiples Versiones del Currículum",
              content:
                "Un único formato no sirve para todos, y tu currículum tampoco debería. Crea versiones diferentes adaptadas a roles, industrias o trayectorias específicas. Ya sea que postules a una startup, una empresa corporativa o una firma creativa, siempre tendrás el currículum perfecto listo.",
            },
          ].map(({ key, title, content }) => (
            <div key={key} className="border-t border-gray-300">
              <button
                className="w-full text-left py-4 text-lg font-semibold flex justify-between"
                onClick={() => toggleSection(key)}
              >
                {title}
                <span>{openSection === key ? "−" : "+"}</span>
              </button>
              <AnimatePresence mode="wait">
                {openSection === key && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 px-4 pb-4"
                    >
                      {content}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
