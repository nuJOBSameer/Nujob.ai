import React from "react";
import { Link } from "react-router-dom";

export default function Business() {
    return (
        <div className="bg-white px-6 py-10">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Left Section */}
                <div className="relative w-full lg:w-1/2 flex items-center justify-center">
                    <video
                        src="/Sarah.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        className="w-full max-w-md rounded-md"
                    />
                </div>


                {/* Right Section */}
                <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                    <p className="text-indigo-600 font-medium uppercase text-sm">
                        МАЙБУТНЄ РЕКРУТИНГУ
                    </p>
                    <h2 className="text-5xl font-bold mt-2">
                        Ідеальні <span className="text-indigo-600">рішення</span> для <br />
                        <span className="text-black">бізнесу та підбору персоналу</span>
                    </h2>

                    <ul className="mt-6">
                        {[
                            "Залучайте кандидатів за 15 хвилин – безшовно, швидко та ефективно.",
                            "Оцінюйте навички кандидатів за 5 годин – точні результати без довгого очікування.",
                            "Перевіряйте резюме за 1 годину – перевірка на основі ШІ, що відокремлює факти від вигадок.",
                            "Наймайте за 7 днів – поєднання швидкості та точності в ефективному процесі найму.",
                            "Закривайте вакансії за 4 дні – адже ідеальний кандидат не має чекати.",
                        ].map((item, index) => {
                            const [boldText, normalText] = item.split(" – ");
                            return (
                                <li
                                    key={index}
                                    className="flex items-start space-x-3 py-3 border-b border-gray-300"
                                >
                                    <span className="text-indigo-600">
                                        <img src="/images/down.png" alt="arrow" className="h-5" />
                                    </span>
                                    <p className="text-gray-700 text-lg">
                                        <strong className="font-semibold">{boldText}</strong> – {normalText}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>

                    <button className="mt-6 px-6 py-3 bg-black flex items-center text-white font-medium rounded-lg hover:bg-gray-800 transition">
                        <Link to="/Contactua">Зв’яжіться з нами</Link>
                        <img src="/images/Arrow.png" alt="" className="ml-2 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
