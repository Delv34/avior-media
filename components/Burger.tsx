"use client";
import { useState } from "react";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Кнопка бургера */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
        aria-label="Меню"
      >
        {/* Линии бургера */}
        <span
          className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-transform duration-300 ${
            isOpen ? "transform rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
            isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Меню */}
      <div
        className={`absolute  top-full top-0 bg-white shadow-lg rounded-lg mt-2 w-48 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ maxHeight: isOpen ? "20rem" : "0" }}
      >
        <ul className="flex flex-col p-4">
          <li className="mb-2">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Главная
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              О нас
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Услуги
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
