export default function BenefitsSectionSp() {
    const jobSeekers = [
        { title: "Destaca tu Marca", desc: "Currículums, cartas de presentación y preparación para entrevistas impulsadas por IA que te hacen destacar al instante.", icon: "/Logo/Logo1.png" },
        { title: "Justo e Imparcial", desc: "Nos enfocamos en tus habilidades, no en tu historial, asegurando igualdad de oportunidades para todos.", icon: "/Logo/Logo2.png" },
        { title: "Emparejamiento Inteligente", desc: "Obtén roles que realmente se ajustan a tu experiencia y metas, no solo listados aleatorios.", icon: "/Logo/Logo3.png" },
        { title: "Crecimiento Profesional", desc: "Obtén información, tendencias y estrategias que te mantengan por delante en el mercado laboral.", icon: "/Logo/Logo4.png" },
        { title: "Validación Real de Habilidades", desc: "Sin adornos: pon a prueba tus habilidades con simulaciones prácticas y evaluaciones estándar de la industria.", icon: "/Logo/Logo5.png" },
        { title: "Menos Estrés, Más Éxitos", desc: "Deja que la IA se encargue de la búsqueda para que puedas enfocarte en lo que importa: tu futuro.", icon: "/Logo/Logo6.png" }
    ];

    const jobRecruiters = [
        { title: "Contratación Rápida", desc: "La IA automatiza el filtrado, selecciona a los mejores candidatos y reduce el tiempo de contratación.", icon: "/Logo/Logo7.png" },
        { title: "Selección Sin Sesgos", desc: "Las evaluaciones basadas en datos garantizan contrataciones según habilidades y potencial.", icon: "/Logo/Logo8.png" },
        { title: "Información del Sector", desc: "Mantente al día con análisis impulsados por IA sobre salarios y tendencias de contratación.", icon: "/Logo/Logo9.png" },
        { title: "Mejores Candidatos, Menos Rotación", desc: "Contrata a quienes se ajustan a tu cultura y necesidades desde el primer día.", icon: "/Logo/Logo10.png" },
        { title: "Talento Comprobado, No Solo Currículums", desc: "Nuestra plataforma garantiza que los candidatos tengan habilidades comprobadas antes de postularse.", icon: "/Logo/Logo11.png" },
        { title: "Ahorra Tiempo y Costos", desc: "Reduce el filtrado manual y enfócate en el crecimiento estratégico.", icon: "/Logo/Logo12.png" }
    ];

    return (
        <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
            {/* Encabezado */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-10 px-0">
                {/* Sección Izquierda - Título y descripción */}
                <div className="max-w-2xl">
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                            nuJOB.AI
                        </span>{" "}
                        Beneficios
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                        Nuestro viaje comenzó con el nacimiento de la era informática, pasando por el auge de las redes y el internet, hasta adoptar ahora el poder transformador de la inteligencia artificial.
                    </p>
                </div>

                {/* Sección Derecha - Ilustración */}
                <div className="hidden md:block">
                    <img src="/images/SVG1.png" alt="Beneficios de la IA" className="w-52 h-auto rounded-2xl" />
                </div>
            </div>

            {/* Para Buscadores de Empleo */}
            <div className=" border-t border-gray-300 md:px-10">
                <h3 className="text-2xl font-bold text-blue-700 mt-6 mb-6">Para Buscadores de Empleo</h3>

                <div className="grid md:grid-cols-3 gap-6 pt-6">
                    {jobSeekers.map((benefit, index) => (
                        <div
                            key={index}
                            className={`flex justify-between items-start pr-6 ${
                                index !== jobSeekers.length - 1 && index !== 2 ? "md:border-r md:border-blue-700" : ""
                            }`}
                        >
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                    {benefit.desc}
                                </p>
                            </div>
                            <img src={benefit.icon} alt={benefit.title} className="w-8 h-8 object-contain" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Para Reclutadores */}
            <div className=" mt-10 border-t border-gray-300 md:px-10">
                <h3 className="text-2xl font-bold text-blue-700 mt-6 mb-6">Para Reclutadores</h3>

                <div className="grid md:grid-cols-3 gap-6 pt-6">
                    {jobRecruiters.map((benefit, index) => (
                        <div
                            key={index}
                            className={`flex justify-between items-start pr-6 ${
                                index !== jobRecruiters.length - 1 && index !== 2 ? "md:border-r md:border-blue-700" : ""
                            }`}
                        >
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                    {benefit.desc}
                                </p>
                            </div>
                            <img src={benefit.icon} alt={benefit.title} className="w-8 h-8 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
