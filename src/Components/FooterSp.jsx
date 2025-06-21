import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function FooterSp() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:ml-28">
          {/* Sección Izquierda */}
          <div className="max-w-sm">
            {/* Logo nuJob */}
            <Link to="/">
              <img src="/images/Logos.png" alt="nuJob Logo" className="mb-4 " />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              nuJOB es tu socio de confianza en el avance profesional, aprovechando
              tecnología de IA de vanguardia para ayudarte a buscar, perfeccionar y mostrar
              tus habilidades con precisión, eficiencia y apoyo personalizado incomparables.
            </p>

            {/* Campo de Correo Electrónico e Ícono Amarillo */}
            <div className="flex items-center gap-3 mt-6">
              <form
                action="https://nujob.us15.list-manage.com/subscribe/post?u=01c07448752f301f4df98e73b&amp;id=c60fb3e2d4&amp;f_id=00b20ae0f0"
                method="POST"
                target="_blank"
                className="flex items-center gap-3 mt-6"
              >
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Introduce tu correo..."
                  className="w-full bg-transparent border border-gray-600 rounded-full py-2 px-4 text-white outline-none"
                  required
                />
                <button type="submit">
                  <img
                    src="/images/circle-check.png"
                    alt="Enviar"
                    className="w-10 h-10 cursor-pointer"
                  />
                </button>
              </form>
            </div>
          </div>

          {/* Enlaces Centrales */}
          <div className="flex flex-row flex-wrap gap-10 ">
            <div>
              <h3 className="font-semibold text-lg mb-2">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <Link to="/aboutSp">
                  <li className="cursor-pointer hover:text-white">Sobre Nosotros</li>
                </Link>
                <Link to="/terms">
                  <li className="cursor-pointer hover:text-white">Términos y Condiciones</li>
                </Link>
                <Link to="/Privacy">
                  <li className="cursor-pointer hover:text-white">Política de Privacidad</li>
                </Link>
                <Link to="/Refund">
                  <li className="cursor-pointer hover:text-white">Política de Reembolso</li>
                </Link>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <Link to="/Candidate-PoolSp">
                  <li className="cursor-pointer hover:text-white">Para Reclutadores</li>
                </Link>
                <Link to="/Career-pathSp">
                  <li className="cursor-pointer hover:text-white">Para Buscadores de Empleo</li>
                </Link>
                <Link to="/StudentSp">
                  <li className="cursor-pointer hover:text-white">Para Estudiantes</li>
                </Link>
                <Link to="/FAQSp">
                  <li className="cursor-pointer hover:text-white">Preguntas Frecuentes</li>
                </Link>
                <Link to="/contactSp">
                  <li className="cursor-pointer hover:text-white">Soporte</li>
                </Link>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Contacto</h3>
              <p className="text-gray-400">Correo: support@nujob.ai</p>
              <p className="text-gray-400">Teléfono: +1 (302) 273-8477</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Ubicación</h3>
              <p className="text-gray-400">
                131 Continental Dr, Suite 305
                Newark, DE 19713, Estados Unidos de América
              </p>
            </div>
          </div>
        </div>

        {/* Parte Inferior */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <img
            src="/images/Logos.png"
            alt="nuJob Logo"
            className="h-10 w-12 md:ml-32 md:mx-0 mx-auto"
          />
          <p>nuJOB © 2025. Todos los derechos reservados.</p>
          {/* <div className="flex space-x-5 md:mt-0 mt-4">
            <FaDiscord className="text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
            <FaFacebookF className="text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
            <FaLinkedinIn className="text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
            <FaYoutube className="text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
          </div> */}
        </div>
      </div>
    </footer>
  );
}
