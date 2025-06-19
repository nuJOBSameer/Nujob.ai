import React, { useState } from "react";
import { Helmet } from "react-helmet";

const BlogsSp = () => {
  const blogs = [
    {
      title: "Prosperando entre desafíos",
      image: "/images/Blog1.png",
      description: "Descubre cómo personas y empresas pueden liberar el potencial de la adversidad con resiliencia e innovación."
    },
    {
      title: "Desmitificando la Inteligencia Artificial",
      image: "/images/Blog2.png",
      description: "Una visión de cómo la IA está transformando la tecnología y la industria, creando un futuro más eficiente y automatizado."
    },
    {
      title: "Abrazando el poder de la imaginación",
      image: "/images/Blog3.png",
      description: "Descubre cómo la creatividad y la innovación pueden transformar negocios y crecimiento personal."
    },
    {
      title: "El magnífico tapiz de la naturaleza",
      image: "/images/Blog4.png",
      description: "Una inmersión profunda en la belleza de la naturaleza y sus conexiones que inspiran creatividad y bienestar."
    },
    {
      title: "Construyendo conexiones más fuertes",
      image: "/images/Blog5.png",
      description: "La verdadera comunicación implica escuchar activamente, comprender y empatizar, cerrando brechas y fortaleciendo relaciones."
    },
    {
      title: "El poder de la imaginación nos hace infinitos",
      image: "/images/Blog6.png",
      description: "En la era digital, la imaginación alimenta la creatividad y mejora las relaciones significativas más allá de las palabras."
    },
    {
      title: "Resiliencia en reclutamiento: navegando el rechazo",
      image: "/images/Blog7.png",
      description: "El rechazo es inevitable. Aprende cómo superar los contratiempos con resiliencia y volver más fuerte."
    },
    {
      title: "Cómo aprovechar la IA en el reclutamiento actual",
      image: "/images/Blog8.png",
      description: "La IA ha revolucionado industrias, incluyendo el reclutamiento. Descubre cómo puede mejorar tus procesos de adquisición de talento."
    },
  ];

  const recentPosts = [
    "La encrucijada de las contraofertas: pros y contras para empleadores y empleados",
    "Historias de terror en entrevistas: los momentos más espeluznantes del trabajo remoto",
    "El impacto oculto del trabajo remoto"
  ];

  const categories = [
    "Candidatos", "Ahorro de Costos", "Retención de Empleados", "Contratación", "Portales de Empleo", "Reclutamiento Externo", "Búsqueda de Talento Clave", "Consejos & Trucos", "Sin Categoría"
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const currentBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Perspectivas y Actualizaciones</title>
        <meta name="description" content="Mantente informado con los últimos artículos, consejos y noticias de la industria para apoyar tu carrera y estrategias de contratación." />
      </Helmet>

      <div className="max-w-6xl mx-auto py-28 px-6 text-center">
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <img src="/images/Blog.png" alt="Ícono de Blog" className="w-36 h-24" />
            <h2 className="text-6xl font-bold text-gray-900">Blogs</h2>
            <img src="/images/FAQBg.png" alt="Subrayado" className="absolute left-0 bottom-[-10px] w-full -z-40" />
          </div>
          <p className="text-gray-600 mt-2">
            Conexión en el mundo moderno: más allá de las interacciones digitales
          </p>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Principal */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentBlogs.map((blog, index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <img src={blog.image} alt={`Imagen del blog: ${blog.title}`} className="w-full h-48 object-cover" />
                  <div className="p-4 text-left">
                    <h2 className="text-xl font-semibold">{blog.title}</h2>
                    <p className="text-gray-600 mt-2">{blog.description}</p>
                    <button className="mt-4 bg-black text-white py-2 px-4 rounded flex flex-row">
                      Leer Más <img src="/images/Arrow.png" alt="Flecha" className="ml-2 h-5 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginación */}
            <div className="flex justify-center items-center mt-8 space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded-md ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-white"}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className={`px-4 py-2 border rounded-md ${currentPage === totalPages ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "text-black"}`}
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Página Siguiente
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-xl font-semibold border-b pb-2">Entradas Recientes</h3>
              <ul className="mt-3 space-y-2">
                {recentPosts.map((post, index) => (
                  <li key={index} className="text-gray-800 hover:text-blue-600 cursor-pointer">{post}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold border-b pb-2">Categorías</h3>
              <ul className="mt-3 space-y-2">
                {categories.map((category, index) => (
                  <li key={index} className="text-gray-800 hover:text-blue-600 cursor-pointer flex items-center">
                    <span className="mr-2">›</span> {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsSp;
