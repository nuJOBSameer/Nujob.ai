import React from "react";

const MeritBadgesSp = () => {
  const badges = [
    { src: "/images/badge1.png", alt: "Insignia 1" },
    { src: "/images/badge2.png", alt: "Insignia 2" },
    { src: "/images/badge3.png", alt: "Insignia 3" },
    { src: "/images/badge4.png", alt: "Insignia 4" },
    { src: "/images/badge5.png", alt: "Insignia 5" },
  ];

  return (
    <div className="bg-[#F1ECEC36] py-12 px-5 md:px-32 text-center">
      <h2 className="text-2xl font-bold text-blue-700">Insignias de Mérito</h2>
      <p className="text-gray-900 font-medium mt-2 md:px-44">
        Tus logros merecen ser reconocidos. Nuestro sistema de gestión de insignias te ayuda a destacar habilidades, certificaciones y logros, haciendo que tu experiencia sea imposible de ignorar.
      </p>
      <p className="text-gray-600 max-w-3xl mx-auto mt-4">
        Gana y Muestra – Presume tus insignias ante los reclutadores.
        <br />
        Mantente Actualizado – Alertas impulsadas por IA para certificaciones que expiran.
        <br />
        Aumenta tu Credibilidad – Deja que tus logros hablen por ti.
      </p>

      {/** Lista de Insignias **/}
      <div className="flex justify-center gap-6 mt-8">
        {badges.map((badge, index) => (
          <div key={index} className="w-24">
            <img src={badge.src} alt={badge.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeritBadgesSp;
