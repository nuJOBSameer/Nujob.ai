import React from "react";
import HelpDesk from "../Contact/HelpDesk";
import CustomerSupport from "../Contact/CustomerSupport";
import { Helmet } from "react-helmet";
import HelpDeskSp from "../Contact/HelpDeskSp";
import CustomerSupportSp from "../Contact/CustomerSupportSp";

const ContactSp = () => {
  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Contáctanos</title>
        <meta
          name="description"
          content="Comunícate con nosotros para consultas, soporte o para conocer cómo podemos ayudarte con tu carrera o necesidades de contratación."
        />
      </Helmet>

      <div className="flex justify-center items-center py-32">
        {/* Sección de Fondo */}
        <div
          className="relative w-[80%] max-w-5xl h-[420px] rounded-lg"
          style={{ background: "url('/images/contact.png') center/cover no-repeat" }}
        >
          {/* Contenedor del Formulario */}
          <div className="absolute top-60 -right-3 md:right-10 transform -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-[350px]">
            <form
              action="https://formsubmit.co/fromweb@nuJOB.ai"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="Nueva consulta empresarial desde nuJOB.ai" />

              <div className="flex space-x-2">
                <input
                  type="text"
                  name="first_name"
                  placeholder="Nombre*"
                  className="w-1/2 p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Apellido*"
                  className="w-1/2 p-2 border rounded"
                  required
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico de trabajo*"
                  className="w-1/2 p-2 border rounded"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Número de teléfono"
                  className="w-1/2 p-2 border rounded"
                />
              </div>
              <textarea
                name="message"
                placeholder="¿En qué podemos ayudarte?"
                className="w-full p-2 border rounded"
                rows="3"
                required
              ></textarea>

              <div className="text-sm">
                <label className="flex items-start space-x-2">
                  <input type="checkbox" name="marketing_opt_in" />
                  <span>Sí, acepto recibir comunicaciones de marketing de nuJOB.AI.</span>
                </label>
                <label className="flex items-start space-x-2 mt-2">
                  <input type="checkbox" name="privacy_agreement" required />
                  <span>
                    Al enviar este formulario, acepto que nuJOB.AI procese mis datos personales de acuerdo con su
                    <a href="/privacy" className="text-blue-600"> Política de Privacidad.</a>
                  </span>
                </label>
              </div>

              <button type="submit" className="bg-purple-600 text-white w-full py-2 rounded">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>

      <HelpDeskSp />
      <CustomerSupportSp />
    </>
  );
};

export default ContactSp;
