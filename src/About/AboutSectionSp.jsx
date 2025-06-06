export default function AboutSectionSp() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

        {/* Lado izquierdo - Imagen */}
        <div className="relative">
          <img
            src="/images/AboutUs.png"
            alt="Consultor"
            className="rounded-lg shadow-lg w-full max-w-sm"
          />
        </div>

        {/* Lado derecho - Contenido de texto */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold text-gray-900">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">Qué</span> Hacemos
          </h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Con más de 35 años en TI, hemos visto cómo las industrias han evolucionado, desde las primeras computadoras hasta la contratación impulsada por IA. Sabemos que conseguir un trabajo no es el objetivo: construir una carrera lo es. NuJOB.AI no es solo una herramienta de contratación; es un cambio de paradigma. Ayudamos a los profesionales a construir su marca y a las empresas a encontrar líderes de primer nivel con precisión y rapidez.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Pero vamos más allá de la contratación. Creemos en la validación real de habilidades, no solo en revisar currículums. Nuestra plataforma crea entornos donde tus habilidades se ponen a prueba mediante experiencias simuladas, evaluaciones prácticas y laboratorios interactivos. No solo te ayudamos a encontrar un empleo; te preparamos con las habilidades necesarias para destacar.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Estamos aquí para proporcionarte habilidades que marquen la diferencia, porque un papel no debería definir tu futuro. Nuestra plataforma se convierte en tu currículum vivo, un camino directo al éxito que muestra tus habilidades en acción.
          </p>
        </div>

      </div>
    </section>
  );
}
