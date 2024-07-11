import Link from "next/link";
import React, { useEffect, useState } from "react";

export const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="relative z-50">
        <button className="p-4 focus:outline-none" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <div className="line top"></div>
            <div className="line middle"></div>
            <div className="line bottom"></div>
          </div>
        </button>
      </div>

      <div
        className={`fixed z-10 top-0 left-0 w-full h-full bg-[#F4CCCC] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={closeMenu}
      >
        <nav
          className="flex flex-col items-center justify-center h-full space-y-8"
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            className="text-[20px] text-text-general font-roboto font-semibold"
            href="#about"
            onClick={closeMenu}
          >
            Про нас
          </Link>
          <Link
            className="text-[20px] text-text-general font-roboto font-semibold"
            href="#why-us"
            onClick={closeMenu}
          >
            Чому саме ми?
          </Link>
          <Link
            className="text-[20px] text-text-general font-roboto font-semibold"
            href="#gallery"
            onClick={closeMenu}
          >
            Галерея
          </Link>
          <Link
            className="text-[20px] text-text-general font-roboto font-semibold"
            href="#reviews"
            onClick={closeMenu}
          >
            Відгуки
          </Link>
          <a
            className="text-[20px] bg-white p-[8px] rounded-[8px] text- font-roboto font-semibold text-rose border-[2px] border-rose"
            href="tel:+380679707448"
          >
            {`Зв'язатися`}
          </a>
        </nav>
      </div>
    </div>
  );
};
