import React from "react";
import HelpDesk from "../Contact/HelpDesk";
import CustomerSupport from "../Contact/CustomerSupport";
import { Helmet } from "react-helmet";
import HelpDeskUkr from "../Contact/HelpDeskUkr";
import CustomerSupportUkr from "../Contact/CustomerSupportUkr";

const ContactUkr = () => {
  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Зв'яжіться з нами</title>
        <meta name="description" content="Зверніться до нас із запитаннями, за підтримкою або щоб дізнатися більше про те, як ми можемо допомогти з вашою кар'єрою чи потребами у наймі." />
      </Helmet>

      <div className="flex justify-center items-center py-32">
        {/* Background Section */}
        <div
          className="relative w-[80%] max-w-5xl h-[420px] rounded-lg"
          style={{ background: "url('/images/contact.png') center/cover no-repeat" }}
        >
          {/* Form Container */}
          <div className="absolute top-60 -right-3 md:right-10 transform -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-[350px]">
            <form
              action="https://formsubmit.co/fromweb@nuJOB.ai" // ✅ Замініть на перевірений FormSubmit email або посилання
              method="POST"
              className="space-y-4"
            >
              {/* Приховані налаштування для FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="Нове корпоративне звернення з nuJOB.ai" />

              <div className="flex space-x-2">
                <input
                  type="text"
                  name="first_name"
                  placeholder="Ім'я*"
                  className="w-1/2 p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Прізвище*"
                  className="w-1/2 p-2 border rounded"
                  required
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Робочий email*"
                  className="w-1/2 p-2 border rounded"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Номер телефону"
                  className="w-1/2 p-2 border rounded"
                />
              </div>
              <textarea
                name="message"
                placeholder="Чим ми можемо вам допомогти?"
                className="w-full p-2 border rounded"
                rows="3"
                required
              ></textarea>

              <div className="text-sm">
                <label className="flex items-start space-x-2">
                  <input type="checkbox" name="marketing_opt_in" />
                  <span>Так, я згоден(-на) отримувати маркетингові повідомлення від nuJOB.AI.</span>
                </label>
                <label className="flex items-start space-x-2 mt-2">
                  <input type="checkbox" name="privacy_agreement" required />
                  <span>
                    Надсилаючи цю форму, я погоджуюся, що nuJOB.AI обробляє мої персональні дані згідно з їхньою
                    <a href="/privacy" className="text-blue-600"> Політикою конфіденційності.</a>
                  </span>
                </label>
              </div>

              <button type="submit" className="bg-purple-600 text-white w-full py-2 rounded">
                Надіслати
              </button>
            </form>
          </div>
        </div>
      </div>

      <HelpDeskUkr />
      <CustomerSupportUkr />
    </>
  );
};

export default ContactUkr;
