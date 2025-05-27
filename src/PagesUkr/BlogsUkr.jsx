import React, { useState } from "react";
import { Helmet } from "react-helmet";

const BlogsUkr = () => {
    const blogs = [
        { title: "Процвітання всупереч викликам", image: "/images/Blog1.png", description: "Дізнайтеся, як люди та компанії можуть розкрити потенціал труднощів завдяки стійкості та інноваціям." },
        { title: "Розвінчуючи штучний інтелект", image: "/images/Blog2.png", description: "Огляд того, як ШІ трансформує технології та індустрію, формуючи ефективніше та автоматизоване майбутнє." },
        { title: "Сила уяви", image: "/images/Blog3.png", description: "Дізнайтеся, як креативність та інновації можуть трансформувати бізнес і особистий розвиток." },
        { title: "Велична гобелен природи", image: "/images/Blog4.png", description: "Глибоке занурення в красу природи та її складні зв’язки, що надихають на творчість та добробут." },
        { title: "Побудова сильніших зв’язків", image: "/images/Blog5.png", description: "Справжнє спілкування включає активне слухання, розуміння та емпатію, які зменшують розриви та зміцнюють відносини." },
        { title: "Сила уяви робить нас нескінченними", image: "/images/Blog6.png", description: "У цифрову епоху уява живить креативність і зміцнює змістовні відносини за межами слів." },
        { title: "Стійкість у рекрутингу: подолання відмов", image: "/images/Blog7.png", description: "Відмова неминуча в житті. Дізнайтеся, як впоратися з труднощами та повернутися сильнішим." },
        { title: "Як використовувати ШІ в рекрутингу сьогодні", image: "/images/Blog8.png", description: "ШІ революціонізував індустрії, включаючи рекрутинг. Дізнайтеся, як він може покращити процеси пошуку талантів." },
    ];

    const recentPosts = [
        "Контрпропозиції: плюси та мінуси для роботодавців і працівників",
        "Жахіття на співбесіді: найстрашніші моменти дистанційної роботи",
        "Прихований вплив віддаленої роботи",
    ];

    const categories = [
        "Кандидати", "Економія коштів", "Утримання працівників", "Найм", "Дошки оголошень", "Аутсорсинг рекрутингу", "Пошук ключових талантів", "Поради та трюки", "Без категорії"
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 4;
    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const currentBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

    return (
        <>
        <Helmet>
            <title>nuJOB.AI | Ідеї та оновлення</title>
            <meta name="description" content="Будьте в курсі останніх статей, порад та новин індустрії, які допоможуть вашій кар’єрі та стратегіям найму." />
        </Helmet>

        <div className="max-w-6xl mx-auto py-28 px-6 text-center">
            <div className="text-center mb-8">
                <div className="relative inline-block">
                    <img src="/images/Blog.png" alt="Блог" className="w-36 h-24" />
                    <h2 className="text-6xl font-bold text-gray-900">Блоги</h2>
                    <img src="/images/FAQBg.png" alt="Підкреслення" className="absolute left-0 bottom-[-10px] w-full -z-40" />
                </div>
                <p className="text-gray-600 mt-2">
                    Зв'язок у сучасному світі: понад цифрову взаємодію
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentBlogs.map((blog, index) => (
                            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold">{blog.title}</h2>
                                    <p className="text-gray-600 mt-2">{blog.description}</p>
                                    <button className="mt-4 bg-black text-white py-2 px-4 rounded flex flex-row">
                                        Читати більше <img src="/images/Arrow.png" alt="" className="ml-2 h-5 w-3" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center mt-8 space-x-2">
                        {[...Array(totalPages)].map((_, index) => (
                            <button key={index} className={`px-4 py-2 border rounded-md ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-white"}`} onClick={() => setCurrentPage(index + 1)}>
                                {index + 1}
                            </button>
                        ))}
                        <button className="px-4 py-2 border rounded-md text-black" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                            Наступна сторінка
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold border-b pb-2">Останні публікації</h3>
                        <ul className="mt-3 space-y-2 text-left">
                            {recentPosts.map((post, index) => (
                                <li key={index} className="text-gray-800 hover:text-blue-600 cursor-pointer">{post}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold border-b pb-2">Категорії</h3>
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

export default BlogsUkr;
